<template>
    <div>
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
                <button @click="ShowClients(false); Anterior(); SetConsulted(album.title)" type="button" class="btn btn-primary">Back to List</button>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    name: 'Cliente',
    props: {
    album: Object
  },
    methods:{
        Anterior(){
            this.$router.go(-1);
        },
        ...Vuex.mapMutations(['ShowClients']),
        ...Vuex.mapMutations(['SetConsulted'])
    },
    computed:{
        ...Vuex.mapState(['showClient'])
    }
}
</script>

<style>
p{
    text-align: center;
}

.imgAlbum{
    height: 400px;
    width: 400px;
}
</style>

