<script setup>
import XTooltip from '@/components/Tooltip/Tooltip.vue'
import XButton from '@/components/Button/Button.vue'
</script>
<template>
  <XTooltip placement="top" trigger="click">
    <template #content> multiple lines<br />second line </template>
    <XButton>Click</XButton>
  </XTooltip>
  <br /><br />
  <XTooltip placement="top" trigger="hover">
    <template #content> multiple lines<br />second line </template>
    <XButton>Hover</XButton>
  </XTooltip>
</template>
