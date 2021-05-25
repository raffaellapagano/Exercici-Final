<template>
  <div class="users">

    <div class="row d-flex justify-content-center">
      <div class="mb-5">
        <button @click="Anterior()" type="button" class="btn btn-success">Anterior</button>
      </div>
    </div>
    <div class="row">
      <div class="d-flex flex-row flex-wrap justify-content-center">
          <Cliente :client="user" v-for="user in users" :key="user.id"></Cliente>
      </div>
    </div>

  </div>
</template>

<script>
import Vuex from 'vuex'
import Cliente from '../components/ClientComponent.vue'

export default {
  data(){
    return{}
    },
  components:{
    Cliente
  },
  computed:{
        ...Vuex.mapState(['users'])
    },
  methods:{
        Anterior(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>

.users{
  padding: 0 30px 0 30px;
}

</style>