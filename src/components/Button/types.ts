import type { PropType } from "vue";
//主要用于在使用 TypeScript 开发 Vue 组件时，对组件的 props 进行更精确的类型定义
export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type ButtonSize = 'large' | 'medium' | 'small';
//nativetype是一个字符串类型，表示原生的button的type属性
export type NativeType = 'button' | 'submit' | 'reset';
//可以有两种方式 一种是直接定义类型 一种是用propstype精确定义
//第一种
export interface ButtonProps{
    //按钮类型
    type?: ButtonType;
    //按钮size
    size?: ButtonSize
    //原生button的type属性
    nativeType?: NativeType;
    //按钮的loading状态
    loading?: boolean;
     //按钮自动聚焦
    autofocus?: boolean;
    //按钮的禁用状态
    disabled?: boolean;
    //按钮的图标
    icon?: string;
    //ℹ是否为朴素按钮
    plain?: boolean
    //按钮的圆角
    round?: boolean
    //按钮的圆形
    circle?: boolean
}
//按钮实例？将ref暴露出去
export interface ButtonInstance{
    ref:HTMLButtonElement
}
//第二种使用proptype
export const buttonProps = {
    type: {
        type:String as PropType<ButtonType>,
    },
    size: {
    type: String as PropType<ButtonSize>
    },
    plain: {
        type: Boolean
    },
    round: {
        type: Boolean
    },
    circle: {
        type: Boolean
    },
    disabled: {
        type: Boolean
    }
}