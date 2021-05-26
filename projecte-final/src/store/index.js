import Vue from 'vue'
import Vuex from 'vuex'
import users from './../assets/users.json'
import albums from './../assets/albums.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    albums: albums,
    users: users,
    showModal: false,
    showClient: false,
  },
  mutations: {
    SetShowModal (state, value) {
      state.showModal = value;
    },
    ShowClients(state, value){
      state.showClient = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
