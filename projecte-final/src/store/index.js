import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    albums: [],
    users: [],
    modal: false,
    filteredUsers: [],
    consultedUsers: [],
    consultedAlbums: [],
    arrayConsulted: []
  },
  mutations: {
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
      state.modal= false;
      let verify = false;
      let newUser = {
        name: "",
        view: 0
      };

      for (let i = 0; i < state.users.length; i++) {
        if(userName == state.users[i].name){
          state.modal= true;
            if(state.consultedUsers.length == 0){
            newUser.name = userName;
            newUser.view = 1;
            state.consultedUsers.push(newUser);
            verify = true;
          }else{
            for (let user = 0; user < state.consultedUsers.length; user++) {
              if(userName ===  state.consultedUsers[user].name){
                state.consultedUsers[user].view = state.consultedUsers[user].view + 1;
                verify = true;
                }
              }
              if(verify === false){
                newUser.name = userName;
                newUser.view = 1;
                state.consultedUsers.push(newUser);
              }
            } 
          }
        } 

        if(!state.modal){
          alert('No users');  
          state.modal=true;
        }
          
    },
    SetConsultedPictures (state, albumName) {
      let verify = false;
      let newAlbum = {
        name: "",
        view: 0
      };

      if(state.consultedAlbums.length == 0){
        newAlbum.name = albumName;
        newAlbum.view = 1;
        state.consultedAlbums.push(newAlbum);
        verify = true;
      }else{
        for (let i = 0; i < state.consultedAlbums.length; i++) {
          if(albumName ===  state.consultedAlbums[i].name){
            state.consultedAlbums[i].view = state.consultedAlbums[i].view + 1;
            verify = true;
            }
          }
          if(verify === false){
            newAlbum.name = albumName;
            newAlbum.view = 1;
            state.consultedAlbums.push(newAlbum);
          }
        }      
    },
    FilterUsers(state){
      state.filteredUsers = state.users


      // state.filteredUsers = state.users.filter(user => {
      //   return user.toLowerCase().startsWith(state.search.toLowerCase());
      // })
    },
    setState(state, user){
      state.user = user;
      state.modal = false;
    },
    SetModal(state, value){
      state.modal = value;
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
  getters: {
    GetUsers: state => {
        return state.users;
    },
    GetAlbums: state => {
      return state.albums;
    }
  },
  modules: {
  }
})
