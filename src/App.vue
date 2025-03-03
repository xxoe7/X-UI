<script setup lang="ts">
// “h” 一般用于创建虚拟 DOM 节点
import { ref, onMounted,h} from 'vue'
import XIcon from './components/Icon/Icon.vue'
import XButton from './components/Button/Button.vue'
import XCollapse from './components/Collapse/Collapse.vue'
import XCollapseItem from './components/Collapse/CollapseItem.vue'
import XTooltip from './components/Tooltip/Tooltip.vue'
import XDropdown from './components/Dropdown/Dropdown.vue'
import XInput from './components/Input/Input.vue'
import XSelect from './components/Select/Select.vue'
import XSwitch from './components/Switch/Switch.vue'
// import XMessage from './components/Message/Message.vue'
import { createMessage } from './components/Message/method'
import type { MenuOption } from './components/Dropdown/type'
import type { ButtonInstance } from './components/Button/types';
import type { TooltipInstance } from './components/Tooltip/types'

const buttonRef = ref<ButtonInstance | null>(null)
const openedValue = ref(['a'])
const trigger = ref<any>('hover')
const tooltipRef = ref<TooltipInstance | null>(null)
const inputtest = ref('')
const switchtest = ref(false)
const selecttest = ref('1')
const options2 = [
  { label: 'hello', value: '1' },
  { label: 'xyz', value: '2' },
  { label: 'testing', value: '3' },
  { label: 'check', value: '4', disabled: true }
]
const customRender = (options2:any) => {
  return h('div', { className: 'xyz' }, [h('b', options2.label), h('span', options2.value)])
}
const options: MenuOption[] = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
]
const open = () => {
  tooltipRef?.value?.show()
}
const close = () => {
  tooltipRef?.value?.hide()
}
const inputchange = (e:string) => {
  console.log('change test',e)
}
onMounted(() => {
  createMessage({ message: 'hello1', duration: 0,type:'success'})
  createMessage({ message: 'hello22', duration: 0,showClose:true })
  createMessage({ message: 'hello66666' })
  if(buttonRef.value){
    console.log('buttonref',buttonRef.value)
  }
})
</script>

<template>
  <!-- <XMessage message="message test"></XMessage> -->
  <header>
    <XDropdown :menu-options="options" placement="bottom" :trigger="trigger" ref="dropdownRef">
      <img class="logo" src="./assets/vue.svg" alt="Vue logo" width="125" height="125" />
      
    </XDropdown>
    <XTooltip  placement="right" :trigger="trigger" ref="tooltipRef">
      <img class="logo" src="./assets/vue.svg" alt="Vue logo" width="125" height="125" />
      <template #content>
        <h1>hello!!</h1>
      </template>
    </XTooltip>
   <!-- <div ref="overlayNode"><h1>hello world</h1></div> -->
  </header>
  <div id="app1">
    <XIcon icon="arrow-up" type="danger" color="green" />
    <XIcon icon="arrow-up" type="primary" color="red" />
    <XIcon icon="arrow-up" type="success" color="blue" />
  </div>
  <XButton ref="buttonRef" autofocus>button test</XButton>
  <XButton type="primary" @click="open">primary</XButton>
  <XButton type="primary" @click="close">Primary</XButton>
  <XButton type="success">Success</XButton>
  <XButton type="info">Info</XButton>
  <XButton type="warning">Warning</XButton>
  <XButton type="danger">Danger</XButton><br /><br />
  <XButton type="primary" plain>Primary</XButton>
  <XButton type="success" plain>Success</XButton>
  <XButton type="info" plain>Info</XButton>
  <XButton type="warning" plain>Warning</XButton>
  <XButton type="danger" plain>Danger</XButton><br /><br />
  <XButton size="large">Large</XButton>
  <XButton size="small">Small</XButton><br /><br />
  <XButton size="large" loading>Loading</XButton>
  <XButton size="large" icon="arrow-up">Icon</XButton>
   <XCollapse  accordion v-model="openedValue">
      <XCollapseItem  name="a" >
        <!-- 具名插槽 -->
        <template #title>
          <h1>nice title</h1>
        </template>
        <h1>headlint title</h1>
        <div>this is content a aaa</div>
      </XCollapseItem>
      <XCollapseItem name="b" title="nice title b item b">
        <div>this is bbbbb test</div>
      </XCollapseItem>
      <XCollapseItem name="c" title="nice cccc" disabled>
        <div>this is cccc test</div>
      </XCollapseItem>
    </XCollapse>
    <XInput v-model="inputtest" showPassword clearable @change="inputchange"></XInput>
    <XSwitch v-model="switchtest"></XSwitch>
    <XSelect v-model='selecttest' placeholder="下拉框" :options="options2" clearable :render-label="customRender" filterable></XSelect>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
