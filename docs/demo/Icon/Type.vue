<script setup>
import XIcon from '@/components/Icon/Icon.vue'
</script>

<template>
  <XIcon class="icon-spacing" icon="fa-solid fa-user" size="1x" type="success" />
  <XIcon class="icon-spacing" icon="fa-solid fa-user" size="2x" type="success" />
  <XIcon class="icon-spacing" icon="fa-solid fa-user" size="3x" type="success" /><br /><br />
  <XIcon class="icon-spacing" icon="fa-solid fa-star" size="2xs" type="warning" />
  <XIcon class="icon-spacing" icon="fa-solid fa-star" size="xs" type="warning" />
  <XIcon class="icon-spacing" icon="fa-solid fa-star" size="sm" type="warning" /><br /><br />
  <XIcon class="icon-spacing" icon="fa-solid fa-poo" size="lg" type="danger" />
  <XIcon class="icon-spacing" icon="fa-solid fa-poo" size="xl" type="danger" />
  <XIcon class="icon-spacing" icon="fa-solid fa-poo" size="2xl" type="danger" /><br /><br />
</template>

<style scoped>
.icon-spacing {
  margin-right: 10px;
}
</style>
