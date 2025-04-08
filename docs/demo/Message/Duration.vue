<template>
    <div>
        <XButton @click="test1" type="success">停留2s</XButton>
        <XButton @click="test2" type="warning">一直保留</XButton>
        <XButton @click="test3" type="danger">可关闭</XButton>
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
    createMessage({ message: '请注意，有警告信息！', duration: 0, type: 'warning' })
}
// 显示错误消息
const test3 = () => {
    createMessage({ message: '发生错误，请稍后重试！', duration: 0, showClose: true })
}

</script>