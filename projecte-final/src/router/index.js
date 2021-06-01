import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ShowClient from '../components/ShowClient'
import ShowAlbum from '../components/ShowAlbum'

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
    path: '/pictures',
    name: 'pictures',
    component: () => import(/* webpackChunkName: "clients/:id" */ '../views/Pictures.vue')
  },
  {
    path: '/pictures/:Pid',
    name: 'details',
    component: ShowAlbum
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
