<template>
  <el-container class="app-wrapper">
    <el-aside>Aside</el-aside>
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
import Navbar from './components/Navbar'

export default {
  name: 'layout',
  components: {Navbar}
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  height: 100%;
  .el-aside {
    width: 200px !important;
    background-color: rgb(48, 65, 86);
  }
  .el-header {
    height: auto !important;
    padding: 0;
  }
}
</style>
