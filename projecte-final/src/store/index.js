import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    albums: [],
    users: [],
    showClient: false,
    consulted:{
      users: "",
      views: 1
    },
    consultedUsers: [],
    consultedAlbums: []
  },
  getters: {
    GetUsers: state => {
        return state.users;
    },
    GetAlbums: state => {
      return state.albums;
    }
  },
  mutations: {
    ShowClients(state, value){
      state.showClient = value;
    },
    SetUsers (state, users) {
      state.users = users
    },
    SetAlbums (state, albums) {
      state.albums = albums
    },
    SetUser(state, value){
      state.consulted.users = value;
    },
    SetConsulted (state, userName) {
      if(state.consultedUsers.length == 0){
        state.consulted.users = userName;
        state.consulted.view = 1;
        state.consultedUsers.push(state.consulted);
      }else{
        for (let user = 0; user <= state.consultedUsers.length; user++) {
          if(userName ===  state.consultedUsers[user].users){
            state.consulted.users = userName;
            state.consultedUsers[user].views = state.consultedUsers[user].views + 1;
          }else{
            state.consulted.users = userName;
            state.consulted.view = 1;
            state.consultedUsers.push(state.consulted);
          }
        }
      }
    }
  },
  actions: {
    loadUsers ({ commit }) {
        axios
            .get('http://jsonplaceholder.typicode.com/users', {
                headers: {
                    'Ocp-Apim-Subscription-Key': 'your key',
                }
            })
            .then(response => response.data)
            .then(users => {
            commit('SetUsers', users)
        })
    },
    loadAlbums ({ commit }) {
      axios
          .get('http://jsonplaceholder.typicode.com/photos', {
              headers: {
                  'Ocp-Apim-Subscription-Key': 'your key',
              }
          })
          .then(response => response.data)
          .then(albums => {
          commit('SetAlbums', albums)
      })
    }
  },
  modules: {
  }
})
