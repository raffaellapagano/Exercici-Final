import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users/:id',
    name: 'users',
    component: () => import(/* webpackChunkName: "clients/:id" */ '../views/Users.vue')
  },
  {
    path: '/pictures/:id',
    name: 'pictures',
    component: () => import(/* webpackChunkName: "clients/:id" */ '../views/Pictures.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
