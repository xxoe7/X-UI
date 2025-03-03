<script setup>
import { ref } from 'vue'
import XInput from '@/components/Input/Input.vue'
const test = ref('')
</script>
<template>
  <XInput v-model="test" placeholder="密码文本框，可以切换" showPassword/>
</template>