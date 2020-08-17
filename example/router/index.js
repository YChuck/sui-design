import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// export const TEST_ROUTERS = [
//   {
//     path: '/commonParams',
//     name: '组件参数',
//     component: () =>
//       import(/* webpackChunkName: "commonParams" */ '../pages/test.vue'),
//   },
// ]

// export const INFOR_ROUTERS = [
//   {
//     path: '/info/:type',
//     name: '信息',
//     component: () => import(/* webpackChunkName: "info" */ '../pages/info.vue'),
//   },
// ]

export const components = [
  {
    path: '/icon',
    name: 'icon',
    component: () => import(/* webpackChunkName: "icon" */ '../pages/Icon.vue'),
  },
  {
    path: '/button',
    name: 'button',
    component: () =>
      import(/* webpackChunkName: "button" */ '../pages/Button.vue'),
  },
  {
    path: '/notice',
    name: 'notice',
    component: () =>
      import(/* webpackChunkName: "notice" */ '../pages/Notice.vue'),
  },
  {
    path: '/message',
    name: 'message',
    component: () =>
      import(/* webpackChunkName: "message" */ '../pages/Message.vue'),
  },
  {
    path: '/tab',
    name: 'tab',
    component: () => import(/* webpackChunkName: "tab" */ '../pages/Tab.vue'),
  },
  {
    path: '/table',
    name: 'table',
    component: () =>
      import(/* webpackChunkName: "table" */ '../pages/Table.vue'),
  },
  {
    path: '/datepicker',
    name: 'datepicker',
    component: () =>
      import(/* webpackChunkName: "datepicker" */ '../pages/Datepicker.vue'),
  },
  {
    path: '/input',
    name: 'input',
    component: () =>
      import(/* webpackChunkName: "input" */ '../pages/Input.vue'),
  },
  {
    path: '/select',
    name: 'select',
    component: () =>
      import(/* webpackChunkName: "select" */ '../pages/Select.vue'),
  },
  {
    path: '/header',
    name: 'header',
    component: () =>
      import(/* webpackChunkName: "header" */ '../pages/Header.vue'),
  },
  {
    path: '/page',
    name: 'page',
    component: () => import(/* webpackChunkName: "page" */ '../pages/Page.vue'),
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import(/* webpackChunkName: "modal" */ '../pages/Modal.vue'),
  },
]

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue'),
  },
].concat(components)
// .concat(TEST_ROUTERS, INFOR_ROUTERS),

export default new Router({
  mode: 'history',
  routes,
})
