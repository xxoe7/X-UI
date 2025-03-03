<script setup>
import XButton from '@/components/Button/Button.vue'
</script>
<template>
  <XButton type="primary" size="large">Large</XButton>
  <XButton type="primary">Default</XButton>
  <XButton type="primary" size="small">Small</XButton><br /><br />
  <XButton type="primary" size="large" icon="fa-solid fa-user-secret">Search</XButton>
  <XButton type="primary" icon="fa-solid fa-user-secret">Search</XButton>
  <XButton type="primary" size="small" icon="fa-solid fa-user-secret">Search</XButton>
</template>
