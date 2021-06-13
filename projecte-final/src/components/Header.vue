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

        <div class=" col-12 col-lg-4 d-flex align-items-center row justify-content-center">
          <form class="form-inline my-2 d-flex justify-content-center flex-nowrap align-items-center">
          <div id="search" class="bg-white rounded-lg">
            <ejs-autocomplete :dataSource='users' :fields='dataFields' :highlight="true"
            placeholder="Select user" id="inputSearch" v-model="search">
            </ejs-autocomplete>
          </div>
            <div class="input-group-append">
              <button class="btn btn-secondary" type="button" id="buttonSearch" @click="Show(SearchIdUser(search)); if(verify){SetConsulted(search)}; search=''">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </button>
            </div>
          </form>
        </div>  
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
      search: "",
       verify: false,
      dataFields:{value:'name'}     
    }
  },
  methods:{
    SearchIdUser(nameUser){
      for (let i = 0; i < this.users.length; i++) {
        if(nameUser == this.users[i].name){
          return this.users[i].id;
        }
      }
    },
    Show(proId){
      for (let index = 0; index < this.users.length; index++) {
        if(this.search == this.users[index])
            this.$router.push(
                {
                    name: 'details',
                    params:{
                        Pid:proId
                    }
                }
            );
          this.verify = true;
        }
      if(this.verify == false){
        this.$router.push('/');
      }
    },
    StringInput(){
      this.search = this.search.$data.search
    },
    ...Vuex.mapMutations(['FilterUsers', 'SetConsulted')  
  },
  computed:{
        ...Vuex.mapState(['users', 'filteredUsers', 'consultedUsers']),
    }
    }




</script>

<style lang="scss">

@import url(https://cdn.syncfusion.com/ej2/material.css);

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

#inputSearch{
  width: 200px;
  height: 20px;
  margin: 2px;
  background: white;
  border-radius: 5px;
}

#buttonSearch{
  height: 40px;
}

</style>