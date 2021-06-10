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

        <div class=" col-12 col-lg-4 d-flex align-items-center row">
          <form class="form-inline my-2 d-flex justify-content-center flex-nowrap">
            <input type="text" v-model="state" autocomplete="on" @input="filterStates" class="form-control dropdown" placeholder="Search">
            <div class="input-group-append">
              <button class="btn btn-secondary" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </button>
            </div>
          </form>

            <div v-if="filteredStates" class="bg-white" >
              <ul>
                <li v-for="filteredState in filteredStates" :key="filteredState.id" @click="setState(filteredState)" class="dropdown-item">{{ filteredState }}</li>
              </ul>
            </div>

          

          

          <!-- <form class="form-inline my-2 d-flex justify-content-center">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          </button>
        </form>      -->
        
        </div>
        
      </nav>

      

    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
  data: function () {
    return{
      state: '', 
      states: ['Florida', 'Alabama', 'Texas'],
      filteredStates: [],
    }
  },
  methods:{
    filterStates(){
      this.filteredStates = this.states.filter(state => {
        return state.toLowerCase().startsWith(this.state.toLowerCase());
      })
    },
    setState(state){
      this.state = state;
      this.filteredStates = [];
    }
  },
  computed:{
        ...Vuex.mapState(['showClient', 'filter', 'users']),
        ...Vuex.mapMutations(['SetFilter']),
        search: {
        get() {
         return this.$store.state.filter;
        },
        set(value) {
            this.$store.commit('SetFilter', value)
        }
    }
    }
}


</script>

<style lang="scss">

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