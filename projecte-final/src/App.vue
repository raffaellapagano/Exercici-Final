<template>
  <div id="app">

    <Header></Header>

    <router-view/>
   
    <Footer ></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Consulted from './components/Consulted'
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
            albums: [],
            users: [],
            numberShow: 0
        }
    },
    methods:{
        ShowProduct(){
            numberShow++
        }
    },
    mounted(){
        let vue = this;

        axios.get('http://jsonplaceholder.typicode.com/photos')
        .then( function ( response) { 
            vue.albums = response.data;
         });

         axios.get('http://jsonplaceholder.typicode.com/users')
         .then(function (response2) { 
            vue.users = response2.data;
          });
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
