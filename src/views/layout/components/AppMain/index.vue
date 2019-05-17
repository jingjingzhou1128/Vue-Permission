<template>
  <el-main class="app-main">
    <transition name="fade-transform" mode="out-in" appear>
      <router-view :key="key"/>
    </transition>
  </el-main>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key () {
      return this.$route.fullPath
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
  overflow-x: hidden;
}
</style>
