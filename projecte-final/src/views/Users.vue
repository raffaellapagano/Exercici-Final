<template>
    <div>
       <button v-show="!showClient" class="btn btn-primary" @click="Anterior()">Back</button>
            
            <div class="row p-3 d-flex justify-content-center">
        
            <Cliente v-for="user in users"
            :user="user"
            :key="user.id"
            class="col-sm-3 mt-3"></Cliente>

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
        Prueba(value){
            return value;
        },
        ...Vuex.mapMutations(['ShowClients', 'SetConsulted'])
    }
}
</script>

