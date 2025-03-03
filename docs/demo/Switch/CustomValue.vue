<script setup>
import { ref } from 'vue'
import XSwitch from '@/components/Switch/Switch.vue'
const test = ref('right')
</script>
<template>
  <XSwitch v-model="test" activeValue="right" inactiveValue="wrong"/>
  <h4>model-value: {{test}}</h4>
</template>