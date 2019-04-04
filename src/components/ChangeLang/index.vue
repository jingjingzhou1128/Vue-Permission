<template>
  <el-dropdown trigger="click" @command="handleChangeLang">
    <div class="el-dropdown-link">
      <span class="iconfont icon-language"></span>
      <i class="el-icon-caret-bottom el-icon-right"></i>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="item in langItems" :key="item.value" :command="item.value" :disabled="currentLang === item.value">{{ item.label }}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'changeLang',
  data () {
    return {
      langItems: [{
        value: 'zh-CN',
        label: '中文-简体'
      },
      {
        value: 'en-US',
        label: 'English'
      }]
    }
  },
  computed: {
    currentLang () {
      return this.$store.getters.language
    }
  },
  methods: {
    // 改变当前语言选项
    handleChangeLang (lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('SetLanguage', lang)
    }
  }
}
</script>
