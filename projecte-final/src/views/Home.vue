<template>
  <div class="home">

      <div class="d-flex row justify-content-center" v-if="filter.length == 0">
      <Consulted :title="'Users'" :arrayConsulted="consultedUsers" class="col-lg-4"></Consulted>
      <Consulted :title="'Pictures'" :arrayConsulted="consultedAlbums" class="col-lg-4"></Consulted>
      </div>

      <div v-else>
        <ShowClient/>
      </div>
    
  </div>
</template>

<script>
import Header from '.././components/Header'
import Footer from '.././components/Footer'
import Consulted from '.././components/Consulted'
import Vuex from 'vuex'
import ShowClient from '../components/ShowClient.vue'


export default {
  name: 'Home',
  components: {
    Header,
    Consulted,
    Footer,
    ShowClient
  },
  data(){
        return{
            numberShow: 0
        }
    },
    methods:{
        ShowProduct(){
            numberShow++
        },
        ...Vuex.mapMutations(['SetConsulted'])
    },
    computed:{
        ...Vuex.mapState(['albums', 'users', 'consultedUsers', 'consultedAlbums', 'filter'])
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.btn{
    background: rgb(12, 214, 147); 
}

.home{
  height: 100%;
}

.has-search .form-control {
    padding-left: 1rem;
}
 
.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}
</style>
