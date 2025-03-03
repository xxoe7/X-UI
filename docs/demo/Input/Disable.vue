<script setup>
import { ref } from 'vue'
import XInput from '@/components/Input/Input.vue'
const test = ref('some text')
</script>
<template>
  <XInput v-model="test" disabled />
</template>