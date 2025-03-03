<script setup>
import { ref } from 'vue'
import XInput from '@/components/Input/Input.vue'
import XIcon from '@/components/Icon/Icon.vue'
const test = ref('')
</script>
<template>
  <XInput v-model="test" placeholder="prepend append">
    <template #prepend>Https://</template>
    <template #append>.com</template>
  </XInput>

  <XInput v-model="test" placeholder="prefix suffix">
    <template #prefix>
      <XIcon icon="fa-user" />
    </template>
    <template #suffix>
      <XIcon icon="fa-user" />
    </template>
  </XInput>
</template>