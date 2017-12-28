import Vue from 'vue'
import Router from 'vue-router'
const  _import = require('./_import_' + process.env.NODE_ENV)
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  {path:'/login',component:_import('login/index'),hidden:true},
  {
    path:'',
    component:Layout,
    redirect:'dashboard',
    children:[{
      path:'dashboard',
      component:_import('dashboard/index'),
      name:'首页',
      meta: { title: '首页', icon: 'dashboard', noCache: true }
    }]
  }
]
export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    meta: { role: ['admin'] },
    children: [{
      path: 'index',
      component: _import('permission/index'),
      name: 'permission',
      meta: {
        title: '权限',
        icon: 'lock',
        role: ['admin']
      }
    }]
  },
  {
    path: '/charts',
    component: Layout,
    redirect: 'noredirect',
    name: 'charts',
    meta: {
      title: '图表',
      icon: 'chart'
    },
    children: [
      { path: 'line', component: _import('charts/line'), name: 'lineChart', meta: { title: '线图', noCache: true }},
      { path: 'line', component: _import('charts/line'), name: 'lineChart', meta: { title: '线图', noCache: true }}
    ]
  }
  ,
  {
    path: '/theme',
    component: Layout,
    redirect: 'noredirect',
    children: [{ path: 'index', component: _import('theme/index'), name: 'theme', meta: { title: '换肤', icon: 'theme' }}]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table/complex-table',
    name: 'example',
    meta: {
      title: '综合表格',
      icon: 'example'
    },
    children: [
      {
        path: '/example/table',
        component: _import('example/table/index'),
        redirect: '/example/table/complex-table',
        name: 'Table',
        meta: {
          title: '表格演示',
          icon: 'table'
        },
        children: [
          { path: 'inline-edit-table', component: _import('example/table/inlineEditTable'), name: 'inlineEditTable', meta: { title: '内联编辑' }},
          { path: 'complex-table', component: _import('example/table/complexTable'), name: 'complexTable', meta: { title: '综合图表' }}
        ]
      }
    ]
  },
  {
    path: '/components',
    component: Layout,
    redirect: 'noredirect',
    name: 'component-demo',
    meta: {
      title: '组件只演示',
      icon: 'component'
    },
    children:[
      { path: 'tinymce',  component:_import('dashboard/index'), name: 'tinymce-demo', meta: { title: '组件只演示' }},
      { path: 'mixin',  component:_import('dashboard/index'), name: 'componentMixin-demo', meta: { title: '组件只演示' }},
    ]
  },
  {
    path: '/form',
    component: Layout,
    redirect: 'noredirect',
    name: 'form',
    meta: {
      title: '组件只演示',
      icon: 'form'
    },
    children: [
      { path: 'create-form', component:_import('dashboard/index'), name: 'createForm', meta: { title: '组件只演示', icon: 'table' }},
      { path: 'edit-form', component:_import('dashboard/index'), name: 'editForm', meta: { title: '组件只演示', icon: 'table' }}
    ]
  }
]
export default new Router({
  mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
