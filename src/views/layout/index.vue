<template>
  <el-container class="app-wrapper">
    <div class="backstage" v-if="isMobile && sidebar.opened" @click="handleCloseSidebar"></div>
    <el-aside :class="sidebarCalss">
      <sidebar></sidebar>
    </el-aside>
    <el-container>
      <el-header>
        <navbar></navbar>
      </el-header>
      <tags></tags>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from './components/Sidebar/index'
import Navbar from './components/Navbar'
import Tags from './components/Tags'

import resizeScreen from './mixin/resizeScreen'

export default {
  name: 'layout',
  mixins: [resizeScreen],
  components: {Navbar, Sidebar, Tags}
}
</script>

<style lang="scss" scoped>

</style>
