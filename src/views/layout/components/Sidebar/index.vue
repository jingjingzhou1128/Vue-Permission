<template>
  <el-menu
    :default-active="defaultActive"
    class="sidebar-menu"
    :unique-opened="true"
    menu-trigger="click"
    @open="handleOpenMenu"
    :close="handleCloseMenu"
    :collapse="isCollapse"
    mode="vertical">
    <sidebar-item v-for="route in permission_routers" :key="route.path" :item="route" :base-path="route.path"/>
  </el-menu>
</template>

<script>
import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    defaultActive () {
      let filterMatched = this.$route.matched.filter(item => item.meta && item.meta.title)
      return filterMatched[filterMatched.length - 1].path
      // return this.$route.path
    },
    isCollapse () {
      return !this.sidebar.opened
    }
  },
  methods: {
    handleOpenMenu () {},
    handleCloseMenu () {}
  },
  components: { SidebarItem }
}
</script>

<style lang="scss">

</style>
