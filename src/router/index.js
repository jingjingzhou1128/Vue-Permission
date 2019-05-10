import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout/index'

Vue.use(Router)

/**
 * hidden: true                          if hidden is true, menu will not show in sidebar(default is false)
 * redirect: 'noRedirect'                if redirect is noRedirect, menu will not redirect in breadcrumb
 * meta: {
 *   rootShow: true,                     if rootShow is true, menu that in children will not show in sidebar
 *   title,                              the name of menu in i18n
 *   icon,                               icon that show in sidebar
 *   roles: Array                        control the permission of router for different roles
 * }
 */

export const constRouterMap = [
  {
    path: '/',
    redirect: '/login',
    hidden: true
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/dashboard',
    component: Layout,
    redirect: {name: 'Dashboard'},
    meta: {
      rootShow: true,
      title: 'dashboard',
      icon: 'icon-dashboard'
    },
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
    name: '401Page',
    component: () => import('@/views/error/401'),
    hidden: true
  },
  {
    path: '/404',
    name: '404Page',
    component: () => import('@/views/error/404'),
    hidden: true
  }
]

export const asyncRouterMap = [
  {
    path: '/permission',
    redirect: 'noRedirect',
    component: Layout,
    meta: {
      roles: ['admin', 'editor'],
      // rootShow: true,
      title: 'permission',
      icon: 'icon-user'
    },
    children: [
      {
        name: 'Admin',
        path: 'admin',
        component: () => import('@/views/permission/admin'),
        meta: {
          roles: ['admin'],
          title: 'admin'
        }
      },
      {
        name: 'Editor',
        path: 'editor',
        component: () => import('@/views/permission/editor'),
        meta: {
          roles: ['editor'],
          title: 'editor'
        }
      }
    ]
  },
  {
    path: '/nest',
    component: Layout,
    redirect: {name: 'Menu1-menu1'},
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
        redirect: {name: 'Menu2-menu1'},
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
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'hash', // hash
  routes: constRouterMap
})
