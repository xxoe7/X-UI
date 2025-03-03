import type { CreateMessageProps,MessageContext} from "./types";
import { render,h,  shallowReactive } from 'vue'
import MessageConstructor from './Message.vue'
import useZIndex from '../../hooks/useZIndex'
//如果有多个组件的话就将组件用数组存储起来之后 获取每个组件的高度等内容 动态的设置样式
//定义组件数组 messagecontext里主要有id以及虚拟节点vnode 还有组件对应的props
let seed=1
const instances:MessageContext[]=shallowReactive([])
export const createMessage = (props: CreateMessageProps) => {
    const { nextZIndex } = useZIndex()
    const id=`message_${seed++}`
    const container = document.createElement('div')
    
    //清除已经挂载的节点
    // render(null,container)
    const destory = () => {
        
        //删除数组中的实例
        const idx = instances.findIndex((instance) => instance.id === id)
        if(idx===-1)  return
        instances.splice(idx, 1)
        
        render(null, container)
        
    }
      const manualDestory = () => {
        const instance = instances.find((instance) => instance.id === id)
        if (instance) {
        instance.vm.exposed!.visible.value = false
        }
    }
    //将destory属性传进去 ...展开运算符
    const newProps = {
        ...props,
        id,
        zIndex: nextZIndex(),
        onDestory: destory,
    }
    const vnode = h(MessageConstructor, newProps)
    render(vnode, container)
    //非空操作断言符-----！
    document.body.appendChild(container.firstElementChild!)
    const vm=vnode.component!
    const instance = { id, vnode,vm,props: newProps, destory: manualDestory}
    instances.push(instance)
    return instance
}

// const getLastInstance = () => {
//     return instances[instances.length-1]
// }

export const getLastBottomOffset = (id: string) => {
    const idx = instances.findIndex((instance) => instance.id === id)
    if (idx <= 0) {
        return 0;
    } else {
        const prev = instances[idx - 1];
        return prev.vnode.component?.exposed!.bottomOffset.value
    }
}