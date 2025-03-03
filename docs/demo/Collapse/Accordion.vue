<script setup>
import XCollapse from '@/components/Collapse/Collapse.vue'
import XCollapseItem from '@/components/Collapse/CollapseItem.vue'
import { ref } from 'vue'

const openedValue = ref(['a'])
</script>
<template>
  <XCollapse v-model="openedValue" accordion>
    <XCollapseItem name="a">
      <template #title>
        <div>nice title</div>
      </template>
      <div>this is content a aaa</div>
    </XCollapseItem>
    <XCollapseItem name="b" title="nice title b item b">
      <div>this is bbbbb test</div>
    </XCollapseItem>
  </XCollapse>
</template>
