<template>
  <div v-if="!item.meta.hidden" class="menu-wrapper">
    <!-- 无下拉菜单 -->
    <el-menu-item
      v-if="item.meta.rootShow || !item.children"
      :key="basePath"
      :index="basePath">
      <router-link :to="basePath" class="menu">
        <i v-if="item.meta.icon" class="menu-icon iconfont" :class="item.meta.icon"></i>
        <span class="menu-text">{{generateTitle(i18nPath,item.meta.title)}}</span>
      </router-link>
    </el-menu-item>
    <!-- 下拉菜单 -->
    <template v-else>
      <el-submenu v-if="hasChild(item)" :index="basePath" :key="basePath">
        <!-- 下拉菜单标题 -->
        <template slot="title">
          <i v-if="item.meta.icon" class="menu-icon iconfont" :class="item.meta.icon"></i>
          <span class="menu-text">{{ generateTitle(i18nPath,item.meta.title) }}</span>
        </template>
        <!-- 下拉菜单项 -->
        <template v-for="child in item.children">
          <sidebar-item :item="child" :key="resolvePath(child.path)" :base-path="resolvePath(child.path)"></sidebar-item>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script>
import path from 'path'
import {generateTitle} from '@/utils/i18n'

export default {
  name: 'SidebarItem',
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // i18n path
      i18nPath: 'vueFrame.route.'
    }
  },
  methods: {
    // 是否有子菜单
    hasChild (menu) {
      if (!menu.children) return false
      if (menu.children.length === 0) return false
      let hasShowItem = menu.children.some(item => {
        return item.meta && !item.meta.hidden
      })
      if (!hasShowItem) return false
      return true
    },
    // 国际化
    generateTitle,
    // 路由拼接
    resolvePath (routePath) {
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style lang="scss">

</style>
