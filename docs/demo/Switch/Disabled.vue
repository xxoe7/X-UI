<script setup>
import { ref } from 'vue'
import XSwitch from '@/components/Switch/Switch.vue'
const test = ref(false)
const test2 = ref(false)
</script>
<template>
  正常：<XSwitch v-model="test" /> <br/>
  禁用：<XSwitch v-model="test2" disabled/>
</template>