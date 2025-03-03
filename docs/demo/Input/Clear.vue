<script setup>
import { ref } from 'vue'
import XInput from '@/components/Input/Input.vue'
const test = ref('')
</script>
<template>
  <XInput v-model="test" clearable placeholder="输入字符以后可以点击清空"/>
</template>