import type { VNode,ComponentInternalInstance} from 'vue';

export interface MessageProps { 
    message: string | VNode;
    duration?: number;//持续时间
    showClose?: boolean;
    type?: 'info' | 'success' | 'warning' | 'error';
    id: string;
    zIndex?: number;
    offset?: number;
    transitionName?: string
    onDestory: () => void
}

//ComponentInternalInstance” 可能是 Vue 组件的内部实例，包含了组件的状态、方法、生命周期钩子等信息。
export interface MessageContext{
    id: string;
    vnode: VNode;
    // “ComponentInternalInstance” 可能与 Vue 组件的内部实例相关，包含了组件的状态、方法等信息。
    vm: ComponentInternalInstance
    props: MessageProps
    destory:()=>void
}

export type CreateMessageProps = Omit<MessageProps, 'onDestory' | 'id' | 'zIndex'>