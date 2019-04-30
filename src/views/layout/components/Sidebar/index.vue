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
    <sidebar-item v-for="route in addRouters" :key="route.path" :item="route" :base-path="route.path"/>
  </el-menu>
</template>

<script>
import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  computed: {
    ...mapGetters([
      'addRouters',
      'sidebar'
    ]),
    defaultActive () {
      return this.$route.path
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
.sidebar-menu {
  width: 260px;
  height: 100%;
  background-color: rgb(48, 65, 86);
  .menu-wrapper {
    text-align: left;
    .el-menu-item:hover,
    .el-menu-item.is-active:hover,
    .el-submenu .el-submenu__title:hover,
    .el-submenu.is-opened .el-submenu__title:hover  {
      background-color: #263445 !important;
    }
    .el-menu-item {
      .menu {
        display: block;
        color: #bfcbd9;
        .menu-icon {
          margin-right: 16px;
          color: inherit;
        }
      }
      &.is-active .menu {
        color: #409EFF;
      }
    }
    .el-submenu {
      .el-menu {
        background-color: #1f2d3d;
        .el-menu-item, .el-menu-item.is-active,
        .el-submenu__title,
        .is-opened.el-submenu__title {
          background-color: #1f2d3d !important;
        }
        .el-menu-item:hover,
        .el-menu-item.is-active:hover,
        .el-submenu__title:hover,
        .is-opened.el-submenu__title:hover {
          background-color: #001528 !important;
        }
      }
      .el-submenu__title {
        color: #bfcbd9;
        .menu-icon {
          margin-right: 16px;
          color: inherit;
        }
      }
      &.is-active > .el-submenu__title {
        color: #fff;
      }
    }
  }

  &.el-menu--collapse {
    width: 50px;
    .menu-wrapper {
      .el-menu-item,
      .el-submenu__title {
        padding: 0 17px;
        padding-left: 17px !important;
      }
      text-align: center;
      .menu {
        .menu-icon {
          margin-right: 0;
        }
        .menu-text {
          display: none;
        }
      }
      .el-submenu__title {
        .menu-icon {
          margin-right: 0;
        }
        .menu-text {
          display: none;
        }
        .el-submenu__icon-arrow {
          display: none;
        }
      }
    }
  }
}
</style>
