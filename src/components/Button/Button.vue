<template>
    <button 
    class="xy-button"
    ref="_ref"
    :disabled="disabled||loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="{
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-loading': loading,
    'is-disabled': disabled,
    [`xy-button--${type}`]: type,
    [`xy-button--${size}`]: size,  
    }"
    >
    <XIcon icon="spinner" spin v-if="loading" ></XIcon>
    <XIcon :icon="icon" v-if="icon"></XIcon>
       <span>
       <slot />
       </span>
    </button>
    <!-- defineExpose将子组件指定的属性和方法暴露给父组件，使得父组件能够调用这些暴露出来的内容。 -->
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { defineProps, defineExpose } from 'vue'
import type { ButtonProps } from './types';
import XIcon from '../Icon/Icon.vue'
defineOptions({
    name: 'XyButton',
})
//辅助函数
withDefaults(defineProps<ButtonProps>(),{
        nativeType: 'button',
})
// defineProps<ButtonProps>()
const _ref = ref<HTMLButtonElement>()

defineExpose(
    {
        ref:_ref
    }
)

</script>
<style scoped></style>