<template>
    <div class="d-flex justify-content-center ">
        
         <div class="card bg-light p-3">
            <h5 class="mt-3 font-weight-bold">{{ albums[id].title | uppercaseName }}</h5>
            <hr>
            <div class="card-body row">

                <div class="mb-2 col-12 col-md-6">
                    <img class="col-12" :src="albums[id].url" alt="">
                </div>
                
                <div class="col-12 col-md-6">
                    <div class="col-12" >
                        <p><span class="font-weight-bold">AlbumId:</span> {{ albums[id].albumId }}</p>
                        <p><span class="font-weight-bold">Id:</span> {{ albums[id].id }}</p>
                        <p><span class="font-weight-bold">Title:</span> {{ albums[id].title }}</p>
                        <button @click="Anterior()" type="button" class="btn btn-primary">Back to List</button>
                    </div>
                </div>
            </div>
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
        ...Vuex.mapState(['showClient', 'albums'])
    },
    filters:{
      uppercaseName: function(value){
          return value.toString().toUpperCase(); 
      }
    }
}
</script>

<style scoped>
p{
    text-align: left;
}

</style>
