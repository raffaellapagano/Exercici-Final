<template>
    <div>            
                <img class="imgAlbum" :src="album.url" alt="" @click="Show(album.id); SetConsultedPictures(album.title)">
            

        <!-- <div class="card bg-light p-3">
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
        </div> -->
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    name: 'Album',
    props: {
    album: Object
  },
    methods:{
        Anterior(){
            this.$router.go(-1);
        },
        Show(proId){
            this.$router.push(
                {
                    name: 'detailsalbum',
                    params:{
                        Pid:proId
                    }
                }
            )
        },
        ...Vuex.mapMutations(['ShowClients', 'SetConsultedPictures'])
    },
    computed:{
        ...Vuex.mapState(['showClient', 'albums'])
    }
}
</script>

<style scoped>
p{
    text-align: center;
}

.imgAlbum{
    height: 100%;
    width: 100%;
    cursor: pointer;
}
</style>

