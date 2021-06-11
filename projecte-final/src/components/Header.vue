<template>
    <div id="nav">

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#"><img src="../assets/IT logo.png" width="150" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
              
        <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
              <router-link class="nav-link" to="/">Home</router-link>     
              <router-link class="nav-link" to="/users">Users</router-link>
              <router-link class="nav-link" to="/pictures">Picture</router-link>
        </div>

        <div id="search">
          <ejs-autocomplete :dataSource='users' :fields='dataFields'
          placeholder="Select a game" popupWidth="250px" popupHeigth="400px"
          style="background:white">
          </ejs-autocomplete>
        </div>

        <!-- <div class=" col-12 col-lg-4 d-flex align-items-center row ">
          <form class="form-inline my-2 d-flex justify-content-center flex-nowrap">
            <input type="text" v-model="search" autocomplete="on" @input="FilterUsers" @focus="SetModal('true')"
            class="form-control" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" placeholder="Search">
            <div class="input-group-append">
              <button class="btn btn-secondary" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </button>
            </div>

            <div v-if="filteredUsers && modal" class="bg-white" >
              <ul>
                <li v-for="filteredUser in filteredUsers" :key="filteredUser.id" @click="setState(filterUsers); SetModal('false')" class="dropdown-item">{{ filteredUser }}</li>
              </ul>
            </div>
          
          </form> -->

          

          

          <!-- <form class="form-inline my-2 d-flex justify-content-center">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          </button>
        </form>      -->
        
       
        
      </nav>

      

    </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import {AutoCompletePlugin} from '@syncfusion/ej2-vue-dropdowns'
Vue.use(AutoCompletePlugin);

export default {
  data: function(){
    return {
      dataFields:{value:'name'}
    }
  },
  methods:{
    
  },
  computed:{
        ...Vuex.mapState(['modal', 'users', 'filteredUsers']),
        ...Vuex.mapMutations(['setState', 'FilterUsers','SetModal']),
        search: {
        get() {
         return this.$store.state.user;
        },
        set(value) {
            this.$store.commit('SetFilter', value)
        }
    }
    }
}



</script>

<style lang="scss">

@import url(https://cdn.syncfusion.com/ej2/material.css);
#search{
  margin: 10% 25%;
}

#nav{
  padding: 30px;

  a {
    font-weight: bold;
    color: #f9fbfc;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>