<template>
    <div>
        <div class="card bg-light p-3">
            <p class="text-center">{{ user.name }} </p>
            <button class="btn btn-primary" @click="Show(user.id); SetConsulted(user.name)">Info</button>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    name: 'Cliente',
    props: {
    user: Object
  },
    methods:{
        Anterior(){
            this.$router.go(-1);
        },
        Show(proId){
            this.$router.push(
                {
                    name: 'details',
                    params:{
                        Pid:proId
                    }
                }
            )
        },
        ...Vuex.mapMutations(['ShowClients', 'SetConsulted'])
    },
    computed:{
        ...Vuex.mapState(['showClient', 'users', 'consultedUsers'])
    }
}
</script>

<style>
p{
    text-align: left;
}
</style>

