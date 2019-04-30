<template>
  <el-header class="navbar" height="70px">
    <!-- navbar menu -->
    <el-menu :default-active="defaultActive" mode="horizontal" menu-trigger="hover">
      <!-- navbar brand -->
      <router-link :to="{name: 'Home'}" class="nav-brand">Single Window</router-link>
      <nav-item v-for="(item, index) in menus" :key="index" :menu="item" :basePath="item.path"></nav-item>
    </el-menu>
    <!-- navbar right -->
    <ul class="nav-right">
      <li>
        <change-lang></change-lang>
      </li>
      <li>
        <change-theme></change-theme>
      </li>
    </ul>
  </el-header>
</template>

<script>
import NavItem from './NavItem'
import ChangeLang from './ChangeLang'
import ChangeTheme from './ChangeTheme'
export default {
  name: 'Navbar',
  data () {
    return {
      menus: [
        {
          label: 'Home',
          path: '/home'
        },
        {
          label: 'Agencies',
          path: '/agencies',
          children: [
            {
              label: 'Ministries',
              path: 'ministries',
              children: [
                {
                  label: 'Ministry of Finance',
                  path: 'finance'
                },
                {
                  label: 'The Ministry of Commerce',
                  path: 'commerce'
                },
                {
                  label: 'The Ministry of Health',
                  path: 'health'
                },
                {
                  label: 'The Ministry of Transport',
                  path: 'transport'
                }
              ]
            },
            {
              label: 'National Organizations',
              path: 'national'
            }
          ]
        },
        {
          label: 'Service',
          path: '/services',
          children: [
            {
              label: 'Specifications',
              path: 'spec',
              children: [
                {
                  label: 'Business Processes Analysis Guidelines for Trade Facilitation',
                  path: 'business'
                },
                {
                  label: 'Guidelines for Data Harmony and Modeling',
                  path: 'guide'
                },
                {
                  label: 'Single Window Planing and Implementation Guidelines',
                  path: 'plan'
                }
              ]
            },
            {
              label: 'Regulations and Policies',
              path: 'regulate'
            },
            {
              label: 'Explore Trade Processes',
              path: 'explore'
            },
            {
              label: 'Assistance',
              path: 'assistance',
              children: [
                {
                  label: 'Tariff Finder',
                  path: 'tariff/home'
                },
                {
                  label: 'Customs Exchange Rates',
                  path: 'exchangeRate'
                },
                {
                  label: 'User Manual',
                  path: 'userManual'
                },
                {
                  label: 'Code List',
                  path: 'codeList'
                },
                {
                  label: 'Quick Links',
                  path: 'quickLinks'
                },
                {
                  label: 'List of Prohibited imports, and goods subject to the special import regime',
                  path: 'listProhibite'
                },
                {
                  label: 'List of Export prohibitions and restrictions',
                  path: 'listExport'
                }
              ]
            }
          ]
        },
        {
          label: 'Support',
          path: '/support',
          children: [
            {
              label: 'Helps',
              path: 'helps'
            },
            {
              label: 'FAQ',
              path: 'faq'
            },
            {
              label: 'Traning Online',
              path: 'traning'
            }
          ]
        },
        {
          label: 'Downloads',
          path: '/downloads'
        }
      ]
    }
  },
  computed: {
    defaultActive () {
      return this.$route.path
    }
  },
  components: { NavItem, ChangeLang, ChangeTheme }
}
</script>

<style lang="scss" scoped>

</style>
