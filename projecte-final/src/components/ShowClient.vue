<template>
    <div>
        
         <div class="card bg-light p-3">
            <h5 class="mt-3">{{ users[this.$route.params.Pid].name }}</h5>
            <hr>
            <div class="card-body">
                <p><span class="font-weight-bold">Id:</span> {{  users[this.$route.params.Pid].id }}</p>
                <p><span class="font-weight-bold">Username:</span> {{  users[this.$route.params.Pid].username }}</p>
                <p><span class="font-weight-bold">Email:</span> {{  users[this.$route.params.Pid].email }}</p>
                <p><span class="font-weight-bold">Address:</span> {{  users[this.$route.params.Pid].address.street }}, {{ users[this.$route.params.Pid].address.suite }} {{ users[this.$route.params.Pid].address.zipcode}}-{{ users[this.$route.params.Pid].address.city}}
                </p>
                <p><span class="font-weight-bold">Tel:</span> {{ users[this.$route.params.Pid].phone }}</p>
                <p><span class="font-weight-bold">Webside:</span> {{ users[this.$route.params.Pid].website }}</p>
                <p><span class="font-weight-bold">Company:</span> {{ users[this.$route.params.Pid].company.name }}</p>
                <button @click="Anterior()" type="button" class="btn btn-primary">Back to List</button>
            </div>
        </div>

    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    data(){
        return{
            client: users[this.$route.params.Pid]
        }
    },
    methods:{
        Anterior(){
            this.$router.go(-1);
        }
    },
    computed:{
        ...Vuex.mapState(['showClient', 'users'])
    }
}
</script>
