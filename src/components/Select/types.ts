
import type { VNode } from 'vue'
export interface SelectOption{
    label: string
    value: string | number
    disabled?:boolean
}


export interface SelectProps{
    disabled?: boolean
    modelValue: string | number;
    placeholder: string
    options?: SelectOption[]
    clearable?: boolean
    filterable?: boolean
    //用户自定义的过滤方法
    filterMethod?: CustomFilterFunc
    //用户自定义模版
    renderLabel?: RenderLabelFunc
    //远程自动联想
    remote?: boolean
    remoteMethod?: CustomFilterRemoteFunc
}

export type RenderLabelFunc = (option: SelectOption) => VNode
export type CustomFilterFunc = (value: string) => SelectOption[]
export type CustomFilterRemoteFunc = (value: string) => Promise<SelectOption[]>

export interface SelectEmits{
    (e: 'update:modelValue', value: string | number): void
    (e: 'change', value: string | number): void
    (e: 'visible-change', value: boolean): void
    (e: 'clear'): void
}
// select框的状态
export interface SelectStates {
  inputValue: string
  selectOption: null | SelectOption
  mouseHover: boolean
  loading: boolean
  highlightedIndex: number
}