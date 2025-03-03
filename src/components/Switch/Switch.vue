<!-- switch 类似于一个checkbox 主要是样式问题 -->
 <template>

    <div class="xy-switch"
        :class="{
        [`xy-switch--${size}`]:size,
        'is-disabled': disabled,
        'is-checked':checked
         }"
         @click="switchValue"
    >
        <input type="checkbox"
            class="xy-switch__input"
            role="switch"
            ref="input"
            :name="name"
            :disabled="disabled" />
        <!-- 组件是由一个外部的矩形和内部的小圆组成 点击时小圆从左移动到右 -->
         <div class="xy-switch__core">
            <!-- 文本 -->
            <div class="xy-switch__core-inner">
                 <span v-if="activeText || inactiveText" class="xy-switch__core-inner-text">
                {{ checked ? activeText : inactiveText }}
                </span>

            </div>
             <!-- circle -->
          <div class="xy-switch__core-action"></div>
         </div>
        
    </div>

 </template>

 <script setup lang="ts">
import { ref,computed, onMounted,watch} from 'vue'
import type { switchProps, switchEmits } from './types';
defineOptions({
    name: 'XySwitch',
    inheritAttrs:false
})
const props = withDefaults(defineProps<switchProps>(), {
    activeValue: true,inactiveValue:false
})
const emits = defineEmits<switchEmits>()

const innerValue = ref(props.modelValue)
const input = ref<HTMLInputElement>()
//是否被选中
const checked = computed(() => innerValue.value === props.activeValue)

const switchValue = () => {
    if (props.disabled) return
    const newValue = checked.value ? props.inactiveValue : props.activeValue
    innerValue.value = newValue
    emits('update:modelValue', newValue)
    emits('change',newValue)
}
//input和组件的值同步
onMounted(() => {
    input.value!.checked=checked.value
})

watch(checked, (val) => {
  input.value!.checked = val
})
watch(
  () => props.modelValue,
  (newValue) => {
    innerValue.value = newValue
  }
)
</script>