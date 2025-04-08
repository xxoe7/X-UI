---
title: Message | X-Element
description: Message 组件的文档
---

# Message消息提示
常见的消息弹窗

## 基础用法

使用 `message`来自定义弹窗内容
<preview path="../demo/Message/Basic.vue" title="基础用法" description="Message组件的基础用法"></preview>

## 消息类型

可以通过`type`属性进行自定义，包含info、success、warning、error四种类型

<preview path="../demo/Message/mtype.vue" title="消息类型" description="Message组件的消息类型"></preview>


## 调整停留时间

消息框默认为3s后消失，可以通过`duration`属性进行自定义 

<preview path="../demo/Message/Duration.vue" title="停留时间" description="Message组件的停留时间"></preview>



## Message 属性

| 参数        | 说明                  | 类型                                                             | Default |
| ----------- | --------------------- | ---------------------------------------------------------------- | ------- |
| message        | 文本消息                 | `string`｜`VNode`                                     | —       |
| type        | 类型                  | `enum` - `\| 'success'\| 'warning'\| 'error'\| 'info'` | —       |
| duration      | 持续时间        | `number`                                                        | 3000   |
| showClose       |是否可关闭        | `boolean`                                                        | false   |
