<template>
    <!-- 主要包含name、title、disabled -->
     <div class="xy-collapse-item"
     :class="{
        'is-disabled':disabled,
     }"
     >
     <div class="xy-collapse-item__header" 
     :id="`item-header-${name}`"
     :class="{
        'is-active':isActive,
        'is-disabled':disabled,
        }" 
        @click="handleClick"
    >
        <slot name="title">{{ title }}</slot>
        <XIcon icon="angle-right" class="header-angle" />
     </div>
      <Transition name="slide" v-on="transitionEvents">
      <div class="xy-collapse-item__wrapper" v-show="isActive">
        <div class="xy-collapse-item__content" :id="`item-content-${name}`">
          <slot />
        </div>
      </div>
    </Transition>


     </div>
</template>
<script  setup lang="ts">
import { inject,computed} from 'vue';
import { collapseContextKey, type CollapseItemProps } from './types';
import XIcon from '../Icon/Icon.vue'
defineOptions({
    name:'XyCollapseItem',
})

const props = defineProps<CollapseItemProps>()
const collapseContext = inject(collapseContextKey)
//判断item是否是激活状态
const isActive = computed(() =>  collapseContext?.activeNames.value.includes(props.name) );

const handleClick = () => {
    if (props.disabled) return
    collapseContext?.handleItemClick(props.name)
}
const transitionEvents: Record<string, (el: HTMLElement) => void> = {
    beforeEnter(el) {
        el.style.height = '0px'
        el.style.overflow = 'hidden'
    },
    enter(el) {
    el.style.height = `${el.scrollHeight}px`
    },
    afterEnter(el) {
        el.style.height = ''
        el.style.overflow = ''
    },
    beforeLeave(el) {
        el.style.height = `${el.scrollHeight}px`
        el.style.overflow = 'hidden'
    },
    leave(el) {
        el.style.height = '0px'
    },
    afterLeave(el) {
        el.style.height = ''
        el.style.overflow = ''
    }
}
</script>
<style>
.xy-collapse-item__header {
  font-size: 30px;
}
</style>
