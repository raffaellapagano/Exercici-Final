<template>
    <div>
        
         <div class="card bg-light p-3">
            <h5 class="mt-3">{{ album[id].title }}</h5>
            <hr>
            <div class="card bg-light p-3">
            <h5 class="mt-3">{{ album.title }}</h5>
            <hr>
            <div class="card-body">
                <div class="mb-2">
                    <img class="imgAlbum" :src="album.url" alt="">
                </div>
                <p><span class="font-weight-bold">AlbumId:</span> {{ album.albumId }}</p>
                <p><span class="font-weight-bold">Id:</span> {{ album.id }}</p>
                <p><span class="font-weight-bold">Title:</span> {{ album.title }}</p>
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
