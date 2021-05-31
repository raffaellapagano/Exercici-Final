import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ShowClient from '../components/ShowClient'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "clients/:id" */ '../views/Users.vue')
  },
  {
    path: '/users/:Pid',
    name: 'details',
    component: ShowClient
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
