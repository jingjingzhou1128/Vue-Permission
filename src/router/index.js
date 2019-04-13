import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout/index'

Vue.use(Router)

export const constRouterMap = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/dashboard',
    component: Layout,
    children: [
      {
        name: 'Dashboard',
        path: '',
        component: () => import('@/views/dashboard/index')
      }
    ]
  },
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   component: () => import('@/views/dashboard/index')
  // },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/error/401')
  }
]

export const asyncRouterMap = []

export default new Router({
  mode: 'hash', // hash
  routes: constRouterMap
})
