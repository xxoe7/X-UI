export interface InputProps {
    type?: string
    modelValue: string
    size?: 'large' | 'small'
    clearable?: boolean
    showPassword?: boolean
    disabled?: boolean
    placeholder?: string
    //只读
    readonly?: boolean
    //表单自动填充
    autocomplete?: string
    //如果为true 表示当页面加载完毕后 input组件自动focus
    autofocus?: boolean
    //一个字符串 指定该输入与之相关的表单元素
    form?: string

    
}

//事件
export interface InputEmits{
    //input的值有变化的时候 只要输入有变化就算
    (e: 'input', value: string): void
    //当失去焦点 且value有变化的时候
    (e: 'change', value: string): void
    //清除输入
    (e: 'clear'): void
    // FocusEvent 接口表示和焦点相关的事件比如 focus, blur, focusin, 和 focusout。
    (e: 'focus', value: FocusEvent): void
    //blur事件
    (e: 'blur', value: FocusEvent): void
    //v-model数据双向绑定
    (e:'update:modelValue',value:string):void
    
    
}

//为用户 暴露出去的input实例
export interface InputInstance{
    ref:HTMLInputElement|HTMLTextAreaElement
}