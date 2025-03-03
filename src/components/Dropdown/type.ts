import type { VNode } from "vue";
// VNode 通常指虚拟节点（Virtual Node）。
// 它是一种用于描述用户界面结构的数据结构，在一些前端框架中被广泛使用，
// 比如 Vue.js。VNode 可以表示真实 DOM 节点的抽象，
import type { TooltipProps } from "../Tooltip/types";

export interface DropdownProps extends TooltipProps { 
    menuOptions: MenuOption[];
    hideAfterClick?: boolean;
}
export interface MenuOption{
    label: string | VNode;
    key: number | string;
    disabled?: boolean;
    divided?: boolean;
}

export interface DropdownEmits {
    (e: 'visible-change', value: boolean): void
    (e: 'select', value: MenuOption): void
}

export interface DropdownInstance {
    show: () => void
    hide: () => void
}
