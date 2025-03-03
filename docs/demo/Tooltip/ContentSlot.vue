<script setup>
import XTooltip from '@/components/Tooltip/Tooltip.vue'
import XButton from '@/components/Button/Button.vue'
</script>
<template>
  <XTooltip placement="top">
    <template #content> multiple lines<br />second line </template>
    <XButton>Top Center</XButton>
  </XTooltip>
</template>
