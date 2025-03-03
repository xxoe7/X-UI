<script setup>
import { ref } from 'vue'
import XSwitch from '@/components/Switch/Switch.vue'
const test = ref(false)
</script>
<template>
  <div class="switch-size-container">
    <XSwitch v-model="test" size="large"/>
    <XSwitch v-model="test"/>
    <XSwitch v-model="test" size="small"/>
  </div>
</template>
<style scoped>
.switch-size-container {
  display: flex;
  align-items: center;
  .xy-switch {
    margin-right: 10px;
  }
}
</style>