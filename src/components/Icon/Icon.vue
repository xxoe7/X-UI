<template>
    <i :style="customStyles" v-bind="$attrs"  :class="{'xy-icon':true,[`xy-icon-${props.type}`]:props.type}">
        <!-- “透传特性” 或者 “属性绑定展开” 会把对象里的所有属性作为独立的属性绑定到组件或者 HTML 元素上 -->
        <font-awesome-icon v-bind="filteredProps"></font-awesome-icon>
    </i>
</template>
<script setup lang="ts">
import { computed,defineProps} from 'vue'
import type { IconProps } from './types';
import { omit } from 'lodash-es'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
defineOptions({
    name: 'XyIcon',
    //inheritAttrs 选项用于控制组件是否继承父组件传递的非 props 属性。
    // 默认情况下，这个值为 true，也就是组件会把父组件传递的非 props 属性自动附加到组件的根元素上；
    // 当设置为 false 时，组件不会继承这些属性，需要你手动通过 $attrs 来处理。
    inheritAttrs:false
    
})
//接收参数
const props = defineProps<IconProps>()
const filteredProps = computed(() => omit(props, ['type', 'color']))
const customStyles = computed(() => {
    return props.color?{color:props.color}:{}
})
    
</script>