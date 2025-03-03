<script setup>
import XTooltip from '@/components/Tooltip/Tooltip.vue'
import XButton from '@/components/Button/Button.vue'
import { ref, watch } from 'vue'

const tooltipRef = ref(null)
const control = ref(false)

watch(control, () => {
  manual()
})
const manual = () => {
  if (control.value) {
    tooltipRef.value.show()
  } else {
    tooltipRef.value.hide()
  }
}
</script>
<template>
  <XTooltip ref="tooltipRef" placement="top" manual>
    <template #content> multiple lines<br />second line </template>
    <XButton @click="control = !control">Top Center</XButton>
  </XTooltip>
</template>
