<script setup>
import { ref } from 'vue'
import XSwitch from '@/components/Switch/Switch.vue'
const test = ref(false)
</script>
<template>
  <XSwitch v-model="test" />
</template>