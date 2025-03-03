<!-- //面板
//provide/inject
//v-model
//slot插槽
//trasition
//展示多个item 标题和内容 展开和关闭 手风琴模式 -->
<!-- 用一个响应式的数组来记录打开或者关闭 -->
<template>
    <div class="xy-collapse">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import {ref,provide,watch} from 'vue'
import { collapseContextKey, type NameType,type CollapseContext } from './types';
import type { CollapseProps,CollapseEmits } from './types';
defineOptions({
    name:'XyCollapse',
})
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
//记录已经打开的
const activeNames = ref<NameType[]>(props.modelValue)

watch(
  () => props.modelValue,
  () => {
    activeNames.value = props.modelValue
  }
)
if (props.accordion && activeNames.value.length > 1) {
  console.warn('accordion mode should only have one active item')
}
const handleItemClick = (item: NameType) => {
    //手风琴模式
    if (props.accordion)
    {
        //如果当前点击的和已经打开的不一样 则关闭已经打开的
        activeNames.value = [activeNames.value[0] === item ? '' : item]
    } else {
        const index = activeNames.value.indexOf(item)
        if (index > -1)
        {
            //已经打开 则关闭从数组中删除
            activeNames.value.splice(index,1)
        } else {
            activeNames.value.push(item)
            
            
        }   
    }
    emits('update:modelValue', activeNames.value)
    emits('change', activeNames.value)
    
}       
provide<CollapseContext>(collapseContextKey, {
    activeNames,handleItemClick
})
</script>