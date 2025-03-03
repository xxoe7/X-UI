import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros'
import md from 'vite-plugin-md';
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "X-UI",
  description: "My Own UI-project ",
    markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
   vite: {
    plugins: [
      VueMacros.vite({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vueJsx: vueJsx(),
        }
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
   
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '快速上手', link: '../components/button.md' }
    ],

    sidebar: [
       {
        text: 'Basic 基础组件',
        items: [
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'Icon 图标', link: '/components/icon' }
        ]
      },
      {
        text: 'Form 表单组件',
        items: [
          { text: 'Input 输入框', link: '/components/input' },
          { text: 'Switch 开关', link: '/components/switch' },
          { text: 'Select 选择器', link: '/components/select' }
        ]
      },
      {
        text: 'Data 数据展示',
        items: [{ text: 'Collapse 折叠面板', link: '/components/collapse' }]
      },
      {
        text: 'Navigation 导航',
        items: [{ text: 'Dropdown 下拉菜单', link: '/components/dropdown' }]
      },
      {
        text: 'Feedback 反馈组件',
        items: [
          { text: 'Message 消息提示', link: '/components/message' },
          { text: 'Tooltip 文字提示', link: '/components/tooltip' }
        ]
      },
      {
        text: '个人学习经验',
        items: [{ text: '重点知识点', link: '../learn_experience' }]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
