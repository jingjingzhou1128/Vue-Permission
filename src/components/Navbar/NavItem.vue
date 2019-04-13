<template>
  <div class="menu-wrapper">
    <template v-if="!menu.children">
      <el-menu-item :index="resolvePath(menu.path)">
        <!-- <router-link :to="{path: menu.path}">{{ menu.label }}</router-link> -->
        <router-link :to="{path: resolvePath(menu.path)}">{{ menu.label }}</router-link>
      </el-menu-item>
    </template>
    <el-submenu v-else :index="basePath">
      <template slot="title">{{menu.label}}</template>
      <!-- <template slot="title">{{basePath}}</template> -->
      <template v-for="child in menu.children">
        <nav-item v-if="child.children && child.children.length > 0" :menu="child" :basePath="resolvePath(child.path)" :key="child.path"></nav-item>
        <el-menu-item v-else :index="resolvePath(child.path)" :key="child.path">
          <!-- <router-link :to="{path: child.path}">{{ child.label }}</router-link> -->
          <router-link :to="{path: resolvePath(child.path)}">{{ child.label }}</router-link>
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
export default {
  name: 'NavItem',
  props: {
    basePath: {
      type: String,
      default: ''
    },
    menu: {
      type: Object
    }
  },
  methods: {
    resolvePath (routePath) {
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style lang="scss">

</style>
