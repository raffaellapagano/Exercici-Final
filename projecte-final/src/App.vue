<template>
  <div id="app">

    <Header></Header>

    <Fade>
      <router-view/>
    </Fade>
   
    <Footer ></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Consulted from './components/Consulted'
import Vuex from 'vuex'
import Fade from './components/Animations/FadeIn.vue'


export default {
  name: 'Home',
  components: {
    Header,
    Consulted,
    Footer,
    Fade
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
    mounted () {
        this.$store.dispatch('loadUsers')
        this.$store.dispatch('loadAlbums')
    },
    computed:{
        ...Vuex.mapState(['users', 'albums'])
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
