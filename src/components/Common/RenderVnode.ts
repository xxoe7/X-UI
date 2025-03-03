//  <!-- 如果不是纯文本而是一个节点呢？
// setup 函数返回渲染函数：setup 函数返回了一个箭头函数，这个箭头函数就是渲染函数。渲染函数的作用是返回一个虚拟节点，Vue 会根据这个返回的虚拟节点来生成真实的 DOM 节点。在这个例子中，渲染函数直接返回了 props.vNode，也就是传入的虚拟节点。
// 直接渲染成节点的原理
//  当父组件将一个有效的虚拟节点作为 item.label 传递给 RenderVnode 组件时：
//   RenderVnode 组件接收到这个虚拟节点作为 props.vNode。
//  setup 函数返回的渲染函数将 props.vNode 返回给 Vue 的渲染机制。
//   Vue 的渲染机制接收到这个虚拟节点后，会根据虚拟节点的描述信息（如标签名、属性、子节点等）来创建对应的真实 DOM 节点。 -->
//   <!-- <RenderVnode :vNode="item.label" /> -->

import { defineComponent } from "vue";
const RenderVnode = defineComponent({
    props: {
        vNode: {
            type: [String, Object],
            required: true
        }
    },
    setup(props) {
        return () => props.vNode
    }
})
export default RenderVnode;