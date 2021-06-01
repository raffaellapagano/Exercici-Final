<template>
    <div>
       <button v-show="!showClient" class="btn btn-primary" @click="Anterior()">Back</button>


            <div class="row p-3 d-flex justify-content-center">
        
            <Album v-for="album in albums"
            :album="album"
            :key="album.id"
            class="col-sm-3 mt-3"></Album>

            </div>
            
            <!-- <div class="row p-3 d-flex justify-content-center">
                    <router-link style="text-decoration: none" :to="{ name: 'pictures', params: {id: album.id} }" 
                    v-for="(album, index) of albums" :key="index" class="col-lg-4">
                      
                        <div v-show="!showClient">
                            <div class="card m-3 bg-light ">
                              <div class="card-body mb-2 px-2">
                                  <h4 class="card-title" >{{album.title}}</h4>
                                     <hr>
                                    <button type="button" class="btn btn-outline-primary btn-sm" 
                                    @click="ShowClients(true); albumId= album">
                                        info
                                    </button>
                                </div>
                            </div>       
                        </div> 
                     
                    </router-link>
            </div> -->
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
        ...Vuex.mapState(['albums', 'showClient'])
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

<style>
a{
    text-decoration: none;
}
</style>

