<template>
  <div class="navbar">
    <!-- navbar left -->
    <ul class="nav-left">
      <li>
        <hamburger :isShrink="!sidebar.opened" :toggleClick="toggleSidebar"></hamburger>
      </li>
    </ul>
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

export default {
  name: 'navbar',
  data () {
    return {
      avatar: require('@/assets/images/user/avatar.jpg')
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  methods: {
    logOut () {
      this.$store.dispatch('LogOut').then(response => {
        if (response.data && response.data.type === 'success') {
          this.$message({
            message: response.data.message,
            type: 'success',
            duration: 5 * 1000
          })
          this.$router.push({name: 'Login'})
        }
      }).catch(error => {
        console.log(error)
      })
    },
    toggleSidebar () {
      this.$store.dispatch('ToggleSidebar')
    }
  },
  components: { Hamburger, ChangeLang, ChangeTheme }
}
</script>

<style lang="scss">
.navbar {
  height: 50px;
  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  .nav-left {
    line-height: 50px;
    .iconfont {
      font-size: 24px;
      cursor: pointer;
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
