<!-- //展示方案： -->
<!-- <Dropdown :menu-options="options">
    <button>
        <span>Dropdown</span>
        <XIcon icon="arrow-down" />
    </button>
</Dropdown> -->
<template>
    <div class="xy-dropdown">
        <Xtooltip 
        :trigger="trigger"
        :placement="placement"
        :popperOptions="popperOptions"
        :openDelay="openDelay"
        :closeDelay="closeDelay"
        @visible-change="visibleChange"
        ref="tooltipRef">
            <slot></slot>
            <template #content>
                <ul class="xy-dropdown__menu">
                   <template v-for="item in menuOptions" :key="item.key">
                       <li
                            v-if="item.divided"
                            role="separator"
                            class="divided-placeholder xy-dropdown__item"
                        />
                        <li
                            class="xy-dropdown__item"
                            @click="() => itemClick(item)"
                            :class="{ 'is-disabled': item.disabled, 'is-divided': item.divided }"
                            :id="`dropdown-item-${item.key}`"
                        >
                        <!-- {{ item.label }} -->
                       
                        <RenderVnode :vNode="item.label" />
                        </li>
                   </template>
                </ul>
            </template>
        </Xtooltip>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Xtooltip from '../Tooltip/Tooltip.vue'
import type { TooltipInstance } from '../Tooltip/types'
import RenderVnode from '../Common/RenderVnode'
import type { DropdownEmits, DropdownInstance, DropdownProps, MenuOption } from './type';
defineOptions({
    name: 'XyDropdown'
})
const props = withDefaults(defineProps<DropdownProps>(), { hideAfterClick: true })
const emits = defineEmits<DropdownEmits>()
const tooltipRef=ref<TooltipInstance | null>(null)
const visibleChange = (e: boolean) => {
  emits('visible-change', e)
}
const itemClick = (e: MenuOption) => {
  if (e.disabled) {
    return
  }
  emits('select', e)
  if (props.hideAfterClick) {
    tooltipRef.value?.hide()
  }
}
defineExpose<DropdownInstance>({
  show: () => tooltipRef.value?.show(),
  hide: () => tooltipRef.value?.hide()
})
</script>