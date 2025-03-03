<template>
    <Transition :name="transitionName" @after-leave="destoryComponent"  @enter="updateHeight">
        <div 
        class="xy-message"
        v-show="visible"
        :class="{[`xy-message--${type}`]:type,'is-close':showClose}"
        role="alert"
        ref="messageRef"
        @mouseenter="clearTimer"
        @mouseleave="startTimer"
        :style="cssStyle"
        >
        <div class="xy-message__content">
            <slot>
            <RenderVnode :vNode="message" v-if="message" />
            </slot>
        </div>
        <div class="xy-message__close" v-if="showClose">
            <!-- stop停止冒泡 -->
            <XIcon @click.stop="() => (visible = false)" icon="xmark" />
        </div>
        </div>
    </Transition>
</template>
<script setup lang="ts">
import { onMounted, ref,  computed } from 'vue'
import type { MessageProps } from './types'
import RenderVnode from '../Common/RenderVnode'
import XIcon from '../Icon/Icon.vue'
import { getLastBottomOffset } from './method'
import useEventListener from '../../hooks/useEventListener'
const props = withDefaults(defineProps<MessageProps>(), {
    type: 'info',
    duration: 3000,
    offset: 20,
    transitionName:'fade-up'
})
const visible = ref(false);
const messageRef = ref<HTMLDivElement>()
//“getCurrentInstance” 可以获取当前组件的实例。
// const instance = getCurrentInstance()

// 计算偏移高度
// 这个div的高度
const height = ref(0)
// 上一个实例的最下面的坐标数字，第一个是0
const lastOffset = computed(() => getLastBottomOffset(props.id))
// 这个元素应该使用的top
const topOffset = computed(() => props.offset + lastOffset.value)
// 这个元素为下一个元素预留的offset，也就是它最低端bottom的值
const bottomOffset = computed(() => height.value + topOffset.value)
//css高度设置
const cssStyle = computed(() => ({
  top: topOffset.value + 'px',
  zIndex: props.zIndex
}))

//定时关闭
let timer: any
function startTimer() {
  if (props.duration == 0) {
    return
  }
  timer = setTimeout(() => {
    visible.value = false
  }, props.duration)
}
function clearTimer() {
  clearTimeout(timer)
}
onMounted(async () => {
  visible.value = true
    startTimer()
  //直到下一次 DOM 更新完成后再继续执行后续代码。
//   await nextTick()
//   height.value = messageRef.value!.getBoundingClientRect().height
})
function keydown(e: Event) {
  const event = e as KeyboardEvent
  if (event.code == 'Escape') {
    visible.value = false
  }
}
useEventListener(document, 'keydown', keydown)
//如果组件关闭就销毁此组件
// watch(visible, (newValue) => {
//   if (!newValue) {
//     props.onDestory()
//   }
// })
function destoryComponent() {
  props.onDestory()
}
function updateHeight() {
  height.value = messageRef.value!.getBoundingClientRect().height
}
defineExpose({
  bottomOffset,
  visible
})
</script>