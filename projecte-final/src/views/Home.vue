<template>
  <div>

    <div class="body d-flex justify-content-center">
    <Consulted :title="'Users'" :itemType="true" :items="users" :numberShow="0"></Consulted>
    <Consulted :title="'Picture'" :itemType="false" :items="albums" :numberShow="0"></Consulted>
    </div>    
    
  </div>
</template>

<script>
import Header from '.././components/Header'
import Footer from '.././components/Footer'
import Consulted from '.././components/Consulted'
import Vuex from 'vuex'
import axios from 'axios'


export default {
  name: 'Home',
  components: {
    Header,
    Consulted,
    Footer
  },
  data(){
        return{
            numberShow: 0
        }
    },
    methods:{
        ShowProduct(){
            numberShow++
        }
    },
    computed:{
        ...Vuex.mapState(['albums', 'users'])
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
