<template>
    <div>
       <button class="btn btn-primary" @click="Anterior()">Back</button>
       <h1 class="font-weight-bold mt-3">Users</h1>
        
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
import Fade from '../components/Animations/FadeIn.vue'

export default {
    components: {
        Cliente,
        Fade
    },
    computed:{
        ...Vuex.mapState(['users', 'consulted', 'consultedUsers'])
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

