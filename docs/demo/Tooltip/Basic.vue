<script setup>
import XTooltip from '@/components/Tooltip/Tooltip.vue'
import XButton from '@/components/Button/Button.vue'
</script>
<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <XTooltip class="box-item" content="Top Left prompts info" placement="top-start">
        <XButton>topstart</XButton>
      </XTooltip>
      <XTooltip class="box-item" content="Top Center prompts info" placement="top">
        <XButton>top</XButton>
      </XTooltip>
      <XTooltip class="box-item" content="Top Right prompts info" placement="top-end">
        <XButton>topend</XButton>
      </XTooltip>
    </div>
    <div class="row">
      <XTooltip class="box-item" content="Left Top prompts info" placement="left-start">
        <XButton>leftstart</XButton>
      </XTooltip>
      <XTooltip class="box-item" content="Right Top prompts info" placement="right-start">
        <XButton>rightstart</XButton>
      </XTooltip>
    </div>
    <div class="row">
      <XTooltip class="box-item" content="Left Center prompts info" placement="left">
        <XButton>left</XButton>
      </XTooltip>
      <XTooltip class="box-item" content="Right Center prompts info" placement="right">
        <XButton>right</XButton>
      </XTooltip>
    </div>
    <div class="row">
      <XTooltip class="box-item" content="Left Bottom prompts info" placement="left-end">
        <XButton>leftend</XButton>
      </XTooltip>
      <XTooltip class="box-item" content="Right Bottom prompts info" placement="right-end">
        <XButton>rightend</XButton>
      </XTooltip>
    </div>
    <div class="row center">
      <XTooltip class="box-item" content="Bottom Left prompts info" placement="bottom-start">
        <XButton>bottomstart</XButton>
      </XTooltip>
      <XTooltip class="box-item" content="Bottom Center prompts info" placement="bottom">
        <XButton>bottom</XButton>
      </XTooltip>
      <XTooltip class="box-item" content="Bottom Right prompts info" placement="bottom-end">
        <XButton>bottomend</XButton>
      </XTooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
