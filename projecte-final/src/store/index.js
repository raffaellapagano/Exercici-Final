import Vue from 'vue'
import Vuex from 'vuex'
import users from './../assets/users.json'
import albums from './../assets/albums.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    albums: albums,
    users: users
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
