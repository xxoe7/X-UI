<script setup>
import { ref } from 'vue'
import XInput from '@/components/Input/Input.vue'
const test = ref('')
</script>
<template>
  <div class="size-holder">
    <XInput v-model="test" placeholder="大的 Input" size="large">
    </XInput>
    <XInput v-model="test" placeholder="普通的 Input">
    </XInput>
    <XInput v-model="test" placeholder="小的 Input" size="small">
    </xInput>
  </div>
</template>
<style scoped>
.size-holder {
  display: flex;
  align-items: center;
}
</style>