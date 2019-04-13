<template>
  <el-dropdown trigger="click" @command="handleChangeTheme">
    <div class="el-dropdown-link">
      <span class=" iconfont icon-T-yanse"></span>
      <i class="el-icon-caret-bottom el-icon-right"></i>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="theme in themeItems" :key="theme.value" :command="theme.value" :disabled="currentTheme === theme.value">{{ theme.label }}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import {removeClass, addClass} from '@/utils/dom'
// import '@/styles/theme/theme1.scss'
export default {
  name: 'changeLang',
  data () {
    return {
      themeItems: [{
        value: 'default',
        label: 'Default'
      },
      {
        value: 'theme1',
        label: 'Theme1'
      }]
    }
  },
  computed: {
    currentTheme () {
      return this.$store.getters.theme
    }
  },
  methods: {
    // 改变当前主题选项
    handleChangeTheme (theme) {
      removeClass(document.body)
      if (theme !== 'default') {
        addClass(document.body, theme)
      }
      this.$store.dispatch('SetTheme', theme)
      // window.document.documentElement.setAttribute('data-theme', theme)
    },
    initTheme () {
      let theme = this.currentTheme
      removeClass(document.body)
      if (theme !== 'default') {
        addClass(document.body, theme)
      }
    }
  },
  created () {
    this.initTheme()
  }
}
</script>
