import type { InjectionKey } from "vue";
import type {Ref} from 'vue'
//主要属性
export interface CollapseProps { 
    //是否打开手风琴模式
    accordion?: boolean
    //记录打开的item
    modelValue: NameType[];
}
export type NameType=string|number
//item属性
export interface CollapseItemProps {
    //item的唯一标识
    name: NameType
    //item的标题
    title?: string
    //是否禁用
    disabled?: boolean
}
export interface CollapseContext{
    activeNames: Ref<NameType[]>
    handleItemClick:(name:NameType)=>void
}
export interface CollapseEmits{
    (e:'update:modelValue',value:NameType[]):void
    (e:'change',value:NameType[]):void
}

export const collapseContextKey:InjectionKey<CollapseContext> =Symbol('collapseContextKey')