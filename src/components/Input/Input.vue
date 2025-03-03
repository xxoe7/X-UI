<template>
    <div
    class="xy-input"
    :class="{
    [`xy-input--${type}`]: type,
    [`xy-input--${size}`]: size,
    'is-disabled': disabled,
    'is-prepend': $slots.prepend,
    'is-append': $slots.append,
    'is-prefix': $slots.prefix,
    'is-suffix': $slots.suffix,
    'is-focus': isFocus
    }">
    <!-- input -->
     <template  v-if="type!=='textarea'">
        <!-- 前缀 -->
        <div v-if="$slots.prepend" class="xy-input__prepend">
            <slot name="prepend"></slot>
        </div>
         <!-- prefix前缀 语意上的前缀 简短的提示语等-->
        <div class="xy-input__wrapper">
            <span v-if="$slots.prefix" class="xy-input__prefix">
                <slot name="prefix"></slot>
            </span>
            <input
            class="xy-input__inner"
            :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
             ref="inputRef"
             v-bind="attrs"
            v-model="innerValue"
            :disabled="disabled"
            :readonly="readonly"
            :autocomplete="autocomplete"
            :placeholder="placeholder"
            :autofocus="autofocus"
            :form="form"
            @input="handleInput"
            @change="handleChange"
            @focus="handleFocus"
            @blur="handleBlur"
            />
            <!-- suffix 语义后缀 -->
            <span v-if="$slots.suffix || showClear ||showPasswordArea" class="xy-input__suffix" @click="keepFocus">
                <slot name="suffix"></slot>
                <XIcon icon="circle-xmark" v-if="showClear" class="xy-input__clear" @click="clear" @mousedown.prevent="NOOP"></XIcon>
                <XIcon icon="eye" v-if="showPasswordArea&&passwordVisible" class="xy-input__password" @click="togglePasswordVisible"></XIcon>
                <XIcon icon="eye-slash" v-if="showPasswordArea&&!passwordVisible" class="xy-input__password" @click="togglePasswordVisible"></XIcon>
            </span>
        </div> 
        <!-- 后缀append -->
        <div v-if="$slots.append" class="xy-input__append">
            <slot name="append"></slot>
        </div>
     </template>
   
     <!-- textarea -->
      <template v-else>
        <textarea
        class="xy-textarea__wrapper"
        ref="inputRef"
        v-bind="attrs"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :form="form"
        v-model="innerValue"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        ></textarea>

      </template>

    </div>
</template>
<script setup lang="ts">
import type { InputProps,InputEmits} from './types';
import { ref, watch, useAttrs, computed, nextTick } from 'vue'
import type { Ref } from 'vue'
import XIcon from '../Icon/Icon.vue'
defineOptions({
    name: 'XyInput',
    inheritAttrs:false
})
const inputRef = ref() as Ref<HTMLInputElement>
const props=withDefaults(defineProps<InputProps>(), { type: 'text',autocomplete: 'off' })
const isFocus = ref(false)
const passwordVisible = ref(false)
const innerValue = ref(props.modelValue)
//显示clear图标
const showClear = computed(() => props.clearable && !props.disabled && !!innerValue.value && isFocus.value)
//点击显示密码
const showPasswordArea = computed(() => props.showPassword && !props.disabled && !!innerValue.value)
const togglePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value
}
//noop？？
const NOOP = () => { }
//keepfocus
const keepFocus = async () => {
  await nextTick()
  inputRef.value.focus()
}
const emits = defineEmits<InputEmits>()
//不继承父属性
const attrs = useAttrs() as Record<string, unknown>
//实现v-model
const handleInput = () => {
    emits('update:modelValue', innerValue.value)
    emits('input',innerValue.value)
}
//v-model的异步更新
watch(()=>props.modelValue, (newValue) => {
    innerValue.value=newValue
})
const clear = () => {
    innerValue.value = ''
    emits('update:modelValue', '')
    emits('clear')
    emits('input', '')
    emits('change', '')
    
}
//change事件
const handleChange = () => {
    emits('change',innerValue.value)
}
//focus
const handleFocus = (event: FocusEvent) => {
    isFocus.value=true
    emits('focus',event)
}
//blur
const handleBlur = (event: FocusEvent) => {
    isFocus.value = false
    emits('blur',event)
}
//支持点击清空字符串
//expose
defineExpose({ ref: inputRef })
</script>