<template>
  <el-container class="app-wrapper">
    <el-aside>
      <sidebar></sidebar>
    </el-aside>
    <el-container>
      <el-header>
        <navbar></navbar>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from './components/Sidebar/index'
import Navbar from './components/Navbar'

export default {
  name: 'layout',
  components: {Navbar, Sidebar}
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  height: 100%;
  .el-aside {
    // width: 200px !important;
    width: auto !important;
  }
  .el-header {
    height: auto !important;
    padding: 0;
  }
}
</style>
