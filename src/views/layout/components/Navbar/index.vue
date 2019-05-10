<template>
  <div class="navbar">
    <!-- navbar left -->
    <div class="nav-left">
      <hamburger :isShrink="!sidebar.opened" :toggleClick="toggleSidebar"></hamburger>
      <bread-crumb :breadOption="breadOption"></bread-crumb>
    </div>
    <!-- navbar right -->
    <ul class="nav-right">
      <li>
        <change-lang></change-lang>
      </li>
      <li>
        <change-theme></change-theme>
      </li>
      <li class="user-info">
        <el-dropdown trigger="click">
          <div class="el-dropdown-link">
            <img :src="avatar" alt="avatar" class="user-avatar"/>
            <i class="el-icon-caret-bottom el-icon-right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Profile</el-dropdown-item>
            <el-dropdown-item divided>
              <span @click="logOut">Log Out</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import Hamburger from '@/components/Hamburger'
import ChangeLang from '@/components/ChangeLang'
import ChangeTheme from '@/components/ChangeTheme'
import BreadCrumb from '@/components/BreadCrumb'

import {generateTitle} from '@/utils/i18n'

export default {
  name: 'Navbar',
  data () {
    return {
      avatar: require('@/assets/images/user/avatar.jpg'),
      // i18n path
      i18nPath: 'vueFrame.route.',
      // 面包屑导航
      breadOption: {
        // separator: '',
        separatorClass: 'el-icon-arrow-right',
        // class: '',
        items: []
      }
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  methods: {
    // 国际化
    generateTitle,
    logOut () {
      this.$store.dispatch('LogOut').then(response => {
        if (response.data && response.data.type === 'success') {
          this.$message({
            message: response.data.message,
            type: 'success',
            duration: 5 * 1000
          })
          // this.$router.push({name: 'Login'})
          location.reload() // In order to re-instantiate the vue-router object to avoid bugs
        }
      }).catch(error => {
        console.log(error)
      })
    },
    toggleSidebar () {
      this.$store.dispatch('ToggleSidebar')
    },
    // 获取breadCrumb数据
    getBreadCrumb () {
      let match = this.$route.matched.filter(item => item.meta && item.meta.title)
      let breadList = match.map(item => {
        return {
          path: item.path,
          label: item.meta.title,
          isNoRedirect: item.redirect === 'noRedirect'
        }
      })
      if (breadList[0].label.trim().toLowerCase() !== 'dashboard') {
        breadList = [{path: '/dashboard', label: 'dashboard'}].concat(breadList)
      }
      return breadList
    }
  },
  components: { Hamburger, ChangeLang, ChangeTheme, BreadCrumb },
  watch: {
    $route (to, from) {
      this.breadOption.items = this.getBreadCrumb()
    }
  },
  created () {
    this.breadOption.items = this.getBreadCrumb()
  }
}
</script>

<style lang="scss">
.navbar {
  height: 50px;
  // box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  .nav-left {
    // line-height: 50px;
    display: flex;
    align-items: center;
    .iconfont {
      font-size: 24px;
      cursor: pointer;
    }
    .bread-crumb {
      margin-left: 15px;
    }
  }
  .nav-right {
    margin: 0;
    list-style: none;
    flex-grow: 0;
    padding-left: 0;
    > li {
      display: inline-block;
      cursor: pointer;
      & + li {
        margin-left: 15px;
      }
      &.user-info {
        .user-avatar {
          height: 35px;
          width: auto;
          border-radius: 50%;
          margin-top: 7px;
          vertical-align: text-bottom;
        }
      }
      .el-dropdown-link {
        font-size: 16px;
        > .iconfont {
          font-size: 24px;
        }
        .el-icon-caret-bottom {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
