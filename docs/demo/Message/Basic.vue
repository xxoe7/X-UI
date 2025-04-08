<template>
    <div>
        <XButton @click="test1" type="success">显示成功消息</XButton>
        <XButton @click="test2" type="warning">显示警告消息</XButton>
        <XButton @click="test3" type="danger">显示错误消息</XButton>
        <XButton @click="test4" type="primary">显示带关闭按钮的消息</XButton>
    </div>
</template>

<script setup>
import { createMessage } from '@/components/Message/method'
import XButton from '@/components/Button/Button.vue'

// 显示成功消息
const test1 = () => {
    createMessage({ message: '操作成功！', type: 'success' })
}
// 显示警告消息
const test2 = () => {
    createMessage({ message: '请注意，有警告信息！', type: 'warning' })
}
// 显示错误消息
const test3 = () => {
    createMessage({ message: '发生错误，请稍后重试！', type: 'error' })
}
// 显示带关闭按钮的消息
const test4 = () => {
    createMessage({ message: '此消息可关闭', duration: 0, showClose: true })
}

</script>