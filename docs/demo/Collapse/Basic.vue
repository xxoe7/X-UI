<script setup>
import XCollapse from '@/components/Collapse/Collapse.vue'
import XCollapseItem from '@/components/Collapse/CollapseItem.vue'
import { ref } from 'vue'

const openedValue = ref(['a'])
</script>
<template>
  <XCollapse v-model="openedValue">
    <XCollapseItem name="a" title="nice title">
      <div>this is content a aaa</div>
    </XCollapseItem>
    <XCollapseItem name="b" title="nice title b item b">
      <div>this is bbbbb test</div>
    </XCollapseItem>
    <XCollapseItem name="c" title="nice cccc" disabled>
      <div>this is cccc test</div>
    </XCollapseItem>
  </XCollapse>
</template>
