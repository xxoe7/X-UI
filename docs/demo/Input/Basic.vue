<script setup>
import { ref } from 'vue'
import XInput from '@/components/Input/Input.vue'
const test = ref('')
</script>
<template>
  <XInput v-model="test" placeholder="基础文本框，请输入" />
  <span>{{test}}</span>
</template>