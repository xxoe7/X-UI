<template>
  <div class="xy-select"
    :class="{
      'is-disabled': disabled
    }"
    @click="toggleDropdown"
    @mouseenter="states.mouseHover = true"
    @mouseleave="states.mouseHover = false"
  >
    <XTooltip
      placement="bottom-start"
      :popper-options="popperOptions"
      manual
      ref="tooltipRef"
      @click-outside="controlDropdown(false)"
    >
      <!-- 第一部分 是一个input框 -->
      <XInput v-model="states.inputValue"
        :disabled="disabled"
        ref="inputRef"
        :placeholder="filteredPlaceholder"
        :readonly="!filterable || !isDropdowmShow"
        @input="debounceOnFilter"
        @keydown="handleKeydown">
        <!-- 后缀  suffix-->
        <template #suffix>
          <!-- 清空的圆形按钮 -->
          <XIcon icon="circle-xmark" v-if="showClearIcon" @click.stop="onClear" class="xy-input__clear" @mousedown.prevent="NOOP"></XIcon>
          <!-- 向下的箭头 -->
          <XIcon icon="angle-down" v-else class="header-angle" :class="{ 'is-active': isDropdowmShow }"></XIcon>
        </template>
      </XInput>
      <!-- tooltip的content部分 下拉菜单-->
      <template #content>
        <!-- loading加载状态 -->
        <div class="xy-select__loading" v-if="states.loading">
            <Icon icon="spinner" spin />
        </div>
        <!-- 无匹配默认显示 -->
         <div class="xy-select__nodata" v-else-if="filterable && filteredOptions.length === 0">
          no matching data
        </div>
        <!-- for循环展示数据 -->
        <ul class="xy-select__menu">
          <template v-for="(item, index) in filteredOptions" :key="index">
            <li
              class="xy-select__menu-item"
              :class="{
                'is-disabled': item.disabled,
                'is-selected': states.selectOption?.value === item.value,
                'is-hightlighted': states.highlightedIndex === index
              }"
              :id="`selecet-item-${item.value}`"
              @click.stop="itemSelect(item)"
            >
              <!-- 为什么要加stop 因为事件会冒泡 他同时会触发itemselect以及toogledropdown -->
              <!-- {{ item.label }} -->
              <!-- <span v-if="states.selectOption?.value === item.value"> selected</span> -->
               <!-- 自定义模版 -->
              <RenderVnode :vNode="renderLabel ? renderLabel(item) : item.label" />
            </li>
          </template>
        </ul>
      </template>
    </XTooltip>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue';
import XTooltip from '../Tooltip/Tooltip.vue';
import XInput from '../Input/Input.vue';
import XIcon from '../Icon/Icon.vue';
import type { SelectEmits, SelectOption, SelectProps, SelectStates } from './types';
import type { TooltipInstance } from '../Tooltip/types';
import type { InputInstance } from '../Input/types';
import RenderVnode from '../Common/RenderVnode';
import { isFunction, debounce } from 'lodash-es'

defineOptions({
  name: 'XySelect'
});

const props = withDefaults(defineProps<SelectProps>(), {
  options: () => []
});

// 相同宽度的popper设置 popperoption
const popperOptions: any = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9]
      }
    },
    {
      name: 'sameWidth',
      enabled: true,
      fn: ({ state }: { state: any }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      phase: 'beforeWrite',
      requires: ['computeStyles']
    }
  ]
};

// 根据用户点击的项 更新到input中
const findOption = (value: string | number) => {
  const option = props.options?.find((item) => item.value === value);
  return option ? option : null;
};
//阻止点击清空按钮后事件的冒泡
const NOOP = () => {}
// 用户最开始定义的选项
const initialOption = findOption(props.modelValue);
const emits = defineEmits<SelectEmits>();
// const innerValue = ref(initialOption ? initialOption.label : '');
const states = reactive<SelectStates>({
  inputValue: initialOption ? initialOption.label : '',
  selectOption: initialOption,
  mouseHover: false,
  loading: false,
  highlightedIndex: -1
});
//remote的联想
const timeout = computed(() => (props.remote ? 300 : 0))
const tooltipRef = ref<TooltipInstance>();
const inputRef = ref<InputInstance>();
// 下拉菜单是否打开
const isDropdowmShow = ref(false);

// 控制下拉菜单的打开与关闭 利用tooltip暴露出来的show和close方法
const controlDropdown = (show: boolean) => {
    if (show) {
    //再次选择需要清空input
    //filter模式 之前选择过对应的值
    if (props.filterable && states.selectOption) { states.inputValue = '' }
     // 进行一次默认选项的生成
    if (props.filterable) {
      generateFilterOptions(states.inputValue)
    }
    tooltipRef.value?.show();
  } else {
        tooltipRef.value?.hide();
        // blur的时候将之前的值回灌到input中
        if (props.filterable) {
        states.inputValue = states.selectOption ? states.selectOption.label : ''
    }
    states.highlightedIndex = -1
  }
  isDropdowmShow.value = show;
  emits('visible-change', show);
};

// 点击事件触发下拉菜单的展示与隐藏
const toggleDropdown = () => {
  if (props.disabled) return;
  if (isDropdowmShow.value) {
    controlDropdown(false);
  } else {
    controlDropdown(true);
  }
};

// 点击某个选项选择item
const itemSelect = (e: SelectOption) => {
  if (e.disabled) return;
  states.inputValue = e.label;
  states.selectOption = e;
  emits('change', e.value);
  emits('update:modelValue', e.value);
  controlDropdown(false);
  inputRef.value?.ref.focus();
};


// 当有内容的时候显示关闭按钮 hover上去的时候  clearable为true input的值不能为空 selectoption不能为空
const showClearIcon = computed(() => {
  return (props.clearable && states.inputValue.trim() !== '' && states.mouseHover && states.selectOption);
});

// 点击清空select框
const onClear = () => {
  states.selectOption = null;
  states.inputValue = '';
  emits('clear');
  emits('change', '');
  emits('update:modelValue', '');
};

// 支持filterable 允许用户输入  根据输入的字符自动过滤菜单选项
//思路：在本地存储一个可变的响应式对象 在input的时候重新计算 渲染新的值
const filteredOptions=ref(props.options)

watch(
  () => props.options,
  (newOptions) => {
    filteredOptions.value = newOptions
  }
)
const generateFilterOptions = async (searchValue: string) => {
    if (!props.filterable) return
    if (props.filterMethod && isFunction(props.filterMethod)) {
        filteredOptions.value=props.filterMethod(searchValue)
    } else if(props.remote && props.remoteMethod && isFunction(props.remoteMethod)) {
        //当支持remote的时候
            states.loading = true
            try {
            filteredOptions.value = await props.remoteMethod(searchValue)
            } catch (e) {
            console.error(e)
            filteredOptions.value = []
            } finally {
            states.loading = false
            }
    } else {
        //默认的过滤方法 includes函数
        filteredOptions.value = props.options.filter((option) => option.label.includes(searchValue))
    }
    states.highlightedIndex = -1
    
}
//当input的值输入有变化的时候 
const onFilter = () => {
  generateFilterOptions(states.inputValue)
}
//防抖
const debounceOnFilter = debounce(() => {
  onFilter()
}, timeout.value)


//再次选择改善placeholder的显示 显示当前选中的值
const filteredPlaceholder = computed(() => {
  return props.filterable && states.selectOption && isDropdowmShow.value
    ? states.selectOption.label
    : props.placeholder
})


//键盘事件
const handleKeydown = (e: KeyboardEvent) => {
  switch (e.key) {
    case 'Enter':
      if (!isDropdowmShow.value) {
        controlDropdown(true)
      } else {
        if (states.highlightedIndex > -1 && filteredOptions.value[states.highlightedIndex]) {
          itemSelect(filteredOptions.value[states.highlightedIndex])
        } else {
          controlDropdown(false)
        }
      }
      break
    case 'Escape':
      if (isDropdowmShow.value) {
        controlDropdown(false)
      }
      break
    case 'ArrowUp':
      e.preventDefault()
      // states.hightlightedIndex = -1
      if (filteredOptions.value.length > 0) {
        if (states.highlightedIndex === -1 || states.highlightedIndex === 0) {
          states.highlightedIndex = filteredOptions.value.length - 1
        } else {
          // move up
          states.highlightedIndex--
        }
      }
      break
    case 'ArrowDown':
      e.preventDefault()
      // states.hightlightedIndex = -1
      if (filteredOptions.value.length > 0) {
        if (
          states.highlightedIndex === -1 ||
          states.highlightedIndex === filteredOptions.value.length - 1
        ) {
          states.highlightedIndex = 0
        } else {
          // move up
          states.highlightedIndex++
        }
      }
      break
    default:
      break
  }
}
</script>