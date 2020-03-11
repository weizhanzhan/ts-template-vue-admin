import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/Layout/index.vue'
Vue.use(VueRouter)
export const asyncRoutes = []
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'dashBoard',
    meta: {
      firstChildName: 'dashBoardIndex'
    },
    children: [{
      path: 'dashboard',
      name: 'dashBoardIndex',
      component: () => import('../views/About.vue'),
      meta: {
        title: 'dashboard'
      }
    }]
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes
})

export default router
