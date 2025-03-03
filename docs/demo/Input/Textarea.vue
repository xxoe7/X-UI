<script setup>
import { ref } from 'vue'
import XInput from '@/components/Input/Input.vue'
const test = ref('')
</script>
<template>
  <XInput v-model="test" placeholder="可以是一个 Textarea" type="textarea">
  </XInput>
</template>
