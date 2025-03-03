export type SwitchValueType = boolean | string | number

export interface switchProps{
    modelValue: SwitchValueType;
    size?: 'small' | 'large';
    disabled?: boolean;
    name?: string;
    id?: string
    //激活和未激活状态的提示text以及value
    activeText?: string
    inactiveText?: string
    activeValue?: SwitchValueType
    inactiveValue?: SwitchValueType
}
    
export interface switchEmits{
    (e: 'update:modelValue', value: SwitchValueType): void;
    (e:'change',value:SwitchValueType):void
}