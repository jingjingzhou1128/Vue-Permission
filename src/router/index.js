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
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/error/401')
  }
]

export const asyncRouterMap = [
  // {
  //   path: '/dashboard',
  //   component: Layout,
  //   meta: {
  //     roles: ['admin', 'editor'],
  //     // rootShow: true,
  //     title: 'Permission',
  //     icon: 'icon-user',
  //     hidden: true
  //   },
  //   children: [
  //     {
  //       name: 'Dashboard',
  //       path: '',
  //       component: () => import('@/views/dashboard/index')
  //     }
  //   ]
  // },
  {
    path: '/permission',
    component: Layout,
    meta: {
      roles: ['admin', 'editor'],
      rootShow: true,
      title: 'permission',
      icon: 'icon-user'
    },
    children: [
      {
        name: 'Permission',
        path: '',
        component: () => import('@/views/permission/index')
      }
    ]
  },
  {
    path: '/nest',
    component: Layout,
    meta: {
      roles: ['admin', 'editor'],
      title: 'nestRouter',
      icon: 'icon-zhuti'
    },
    children: [
      {
        name: 'Menu1',
        path: 'menu1',
        component: () => import('@/views/nest/menu1/index'),
        redirect: {name: 'Menu1-menu1'},
        meta: {
          roles: ['admin', 'editor'],
          title: 'menu1'
        },
        children: [
          {
            name: 'Menu1-menu1',
            path: 'menu1',
            component: () => import('@/views/nest/menu1/menu1/index'),
            meta: {
              title: 'menu1-1'
            }
          },
          {
            name: 'Menu1-menu2',
            path: 'menu2',
            component: () => import('@/views/nest/menu1/menu2/index'),
            meta: {
              title: 'menu1-2'
            }
          }
        ]
      },
      {
        name: 'Menu2',
        path: 'menu2',
        component: () => import('@/views/nest/menu2/index'),
        meta: {
          title: 'menu2'
        },
        children: [
          {
            name: 'Menu2-menu1',
            path: 'menu1',
            meta: {
              title: 'menu2-1'
            },
            component: () => import('@/views/nest/menu2/menu1/index')
          },
          {
            name: 'Menu2-menu2',
            path: 'menu2',
            meta: {
              rootShow: true,
              title: 'menu2-2'
            },
            component: () => import('@/views/nest/menu2/menu2/index'),
            children: [
              {
                name: 'Menu2-menu2-menu1',
                path: 'menu1',
                component: () => import('@/views/nest/menu2/menu2/menu1')
              },
              {
                name: 'Menu2-menu2-menu2',
                path: 'menu2',
                component: () => import('@/views/nest/menu2/menu2/menu2')
              }
            ]
          }
        ]
      }
    ]
  }
]

export default new Router({
  mode: 'hash', // hash
  routes: constRouterMap
})
