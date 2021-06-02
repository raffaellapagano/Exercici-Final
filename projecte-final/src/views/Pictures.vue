<template>
    <div>
       <button class="btn btn-primary" @click="Anterior()">Back</button>

       <h1 class="font-weight-bold mt-3">Albums</h1>


            <div class="row p-3 d-flex justify-content-center">
        
            <Album v-for="album in albums"
            :album="album"
            :key="album.id"
            class="col-lg-3 mt-3"></Album>

            </div>
            
        </div>
</template>

<script>
import Vuex from 'vuex'
import Album from '../components/AlbumComponent'

export default {
    components: {
        Album
    },
    computed:{
        ...Vuex.mapState(['albums'])
    },
    data(){
        return{
            albumId: {
                type: Object,
                required: true
            }
        }
    },
    methods:{
        Anterior(){
            this.$router.go(-1);
        },
        ...Vuex.mapMutations(['ShowClients'])
    }
}
</script>

<style scoped>
a{
    text-decoration: none;
}

.imgAlbum{
    height: 400px;
    width: 400px;
}
</style>

