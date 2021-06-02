<template>
    <div>
        
         <div class="card bg-light p-3">
            <div class="card bg-light p-3">
            <h5 class="mt-3">{{ albums[id].title }}</h5>
            <hr>
            <div class="card-body">
                <div class="mb-2">
                    <img class="imgAlbum" :src="albums[id].url" alt="">
                </div>
                <p><span class="font-weight-bold">AlbumId:</span> {{ albums[id].albumId }}</p>
                <p><span class="font-weight-bold">Id:</span> {{ albums[id].id }}</p>
                <p><span class="font-weight-bold">Title:</span> {{ albums[id].title }}</p>
                <button @click="Anterior()" type="button" class="btn btn-primary">Back to List</button>
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
    }
}
</script>
