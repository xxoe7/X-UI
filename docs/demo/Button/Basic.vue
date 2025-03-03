<script setup>
// import Button from '@/components/Button/Button.vue'
import XButton from '@/components/Button/Button.vue'
</script>
<template>
  <XButton> hello </XButton>
  <XButton type="primary"> Primary </XButton>
  <XButton type="danger"> Danger </XButton><br /><br />
  <XButton plain> hello </XButton>
  <XButton type="primary" plain> Primary </XButton>
  <XButton type="danger" plain> Danger </XButton>
  <XButton disabled> hello </XButton>
</template>
