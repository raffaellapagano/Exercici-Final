<template>
    <div>
        <div class="card bg-light p-3">
            <h5 class="mt-3">{{ client.name }}</h5>
            <hr>
            <div class="card-body">
                <p><span class="font-weight-bold">Id:</span> {{ client.id }}</p>
                <p><span class="font-weight-bold">Username:</span> {{ client.username }}</p>
                <p><span class="font-weight-bold">Email:</span> {{ client.email }}</p>
                <p><span class="font-weight-bold">Address:</span> {{ client.address.street }}, {{ client.address.suite }} {{ client.address.zipcode}}-{{ client.address.city}}
                </p>
                <p><span class="font-weight-bold">Tel:</span> {{ client.phone }}</p>
                <p><span class="font-weight-bold">Webside:</span> {{ client.website }}</p>
                <p><span class="font-weight-bold">Company:</span> {{ client.company.name }}</p>
                <p><span class="font-weight-bold">View:</span> {{ views }}</p>
                <button @click="ShowClients(false); SetUser(client.name )" 
                type="button" class="btn btn-primary">Back to List</button>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    name: 'Cliente',
    props: {
    client: Object
  },
    methods:{
        Anterior(){
            this.$router.go(-1);
        },
        ...Vuex.mapMutations(['ShowClients', 'SetUser'])
    },
    computed:{
        ...Vuex.mapState(['showClient'])
    }
}
</script>

<style>
p{
    text-align: left;
}
</style>

