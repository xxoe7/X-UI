---
title: Button | X-Element
description: Button 组件的文档
---

# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`plain`定义按钮的样式, 同时你可以使用 `disabled` 属性来定义按钮是否被禁用。

<preview path="../demo/Button/Basic.vue" title="基础用法" description="Button 组件的基础用法"></preview>

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性额外配置尺寸，可使用 `large`和`small`两种值。

<preview path="../demo/Button/Size.vue" title="调整尺寸" description="Button 组件的尺寸调整"></preview>

## 圆角和圆形按钮

除了默认的形状，按钮组件还提供了额外的形状可供选择，以便适配不同的场景。
使用 `round`与`circle` 属性可额外配置形状。

## Loading效果

通过`loading`属性可让图标展示为加载中的状态

<preview path="../demo/Button/Loading.vue" title="调loading状态" description="Button 组件的loading状态"></preview>

## Button 属性

| 参数        | 说明                  | 类型                                                             | Default |
| ----------- | --------------------- | ---------------------------------------------------------------- | ------- |
| size        | 尺寸                  | `enum` - `'large'\| 'small'`                                     | —       |
| type        | 类型                  | `enum` - `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | —       |
| plain       | 是否为朴素按钮        | `boolean`                                                        | false   |
| round       | 是否为圆角按钮        | `boolean`                                                        | false   |
| circle      | 是否为圆形按钮        | `boolean`                                                        | false   |
| loading     | 是否为加载中状态      | `boolean`                                                        | false   |
| disabled    | 按钮是否为禁用状态    | `boolean`                                                        | false   |
| icon        | 图标组件              | `string`                                                         | —       |
| autofocus   | 原生 `autofocus` 属性 | `boolean`                                                        | false   |
| native-type | 原生 `type` 属性      | `enum` - `'button'\| 'submit'\| 'reset'`                         | button  |
