<template>
    <div>
        
         <div class="card bg-light p-3">
            <h5 class="mt-3">{{ users[id].name | uppercaseName }}</h5>
            <hr>
            <div class="card-body">
                <p><span class="font-weight-bold">Id:</span> {{  users[id].id }}</p>
                <p><span class="font-weight-bold">Username:</span> {{  users[id].username }}</p>
                <p><span class="font-weight-bold">Email:</span> {{  users[id].email }}</p>
                <p><span class="font-weight-bold">Address:</span> {{  users[id].address.street }}, {{ users[id].address.suite }} {{ users[id].address.zipcode}}-{{ users[id].address.city}}
                </p>
                <p><span class="font-weight-bold">Tel:</span> {{ users[id].phone }}</p>
                <p><span class="font-weight-bold">Webside:</span> {{ users[id].website }}</p>
                <p><span class="font-weight-bold">Company:</span> {{ users[id].company.name }}</p>
                <button @click="Anterior()" type="button" class="btn btn-primary">Back</button>
            </div>
        </div>

    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    data(){
        return{
            id: parseInt(this.$route.params.Pid)-1
        }
    },
    methods:{
        Anterior(){
            this.$router.go(-1);
        }
    },
    computed:{
        ...Vuex.mapState(['showClient', 'users'])
    },
    filters:{
      uppercaseName: function(value){
          return value.toString().toUpperCase(); 
      }
    }
}
</script>
