import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IconProps { 
    border?: boolean;
    //固定宽度
    fixedWidth?: boolean;
    //翻转方向
    flip?: "horizontal" | "vertical" | "both";
    //指定要显示的图标。可以是一个图标定义对象、图标名称数组、图标名称字符串或 IconDefinition 类型的对象。
    icon: object | IconDefinition | string | Array<string>;
    //为图标应用遮罩效果。可以使用另一个图标作为遮罩，创建独特的视觉效果
    mask?: object | string | Array<string>;
    //设置图标的大小。可以使用相对大小（如 lg、xl）或倍数大小（如 2x、3x）来调整图标尺寸。
    size?: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
    //图标颜色
    color?: string;
    //旋转图标
    rotation?: 90 | 180 | 270 | '90' | '180' | '270';
    //使图标旋转。设置为 true 时，图标会持续顺时针旋转
    spin?: boolean;
    //使图标以 8 步的旋转动画脉冲式旋转
    pulse?: boolean;
    //为图标添加弹跳动画效果
    bounce?: boolean;
    //为图标添加抖动动画效果。
    shake?: boolean
    //为图标添加心跳动画效果
    beat?: boolean
    //为图标添加渐隐动画效果
    fade?: boolean
    //为图标添加渐显动画效果
    beatFade?: boolean
    //结合了旋转和脉冲的动画效果。
    spinPulse?: boolean
    //使图标逆时针旋转。
    spinReverse?: boolean;
    //将图标向左或向右浮动。可以用于创建文本环绕图标的效果。
    pull?: 'right' | 'left'
    //交换图标的不透明度
    swapOpacity?: boolean;
    //对图标进行变换操作，如缩放、平移、旋转等
    transform?: object | string
    //将图标转换为 SVG 符号
    symbol?: boolean | string
    //为图标添加标题属性
    title?: string
    //反转图标的颜色
    inverse?: boolean
    //为图标应用预定义的颜色主题
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'


}