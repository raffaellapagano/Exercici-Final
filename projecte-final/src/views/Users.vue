<template>
    <div>
       <button v-show="!showClient" class="btn btn-primary" @click="Anterior()">Back</button>
            
            <div class="row p-3 d-flex justify-content-center">
                    <router-link :to="{ name: 'users', params: {id: user.id} }" 
                    v-for="(user, index) of users" :key="index" class="col-lg-4">
                      
                        <div v-show="!showClient">
                            <div class="card m-3 bg-light ">
                              <div class="card-body mb-2 px-2">
                                  <h4 class="card-title" >{{user.name}}</h4>
                                     <hr>
                                    <button type="button" class="btn btn-outline-primary btn-sm" 
                                    @click="ShowClients(true); clienteId= user; SetConsulted(user.name);">
                                        info
                                    </button>
                                </div>
                            </div>       
                        </div> 
                     
                    </router-link>

            <div class="col-lg-10 text-center mt-3">
            
            <Cliente v-show="showClient" :client="clienteId"></Cliente>

            </div>

            </div>
        </div>
</template>

<script>
import Vuex from 'vuex'
import Cliente from '../components/ClientComponent'

export default {
    components: {
        Cliente
    },
    computed:{
        ...Vuex.mapState(['users', 'showClient', 'consulted', 'consultedUsers'])
    },
    data(){
        return{
            clienteId: {
                type: Object,
                required: true
            }
        }
    },
    methods:{
        Anterior(){
            this.$router.go(-1);
        },
        ...Vuex.mapMutations(['ShowClients', 'SetConsulted'])
    }
}
</script>

