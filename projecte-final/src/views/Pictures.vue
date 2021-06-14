<template>
    <div>
       <button class="btn btn-primary" @click="Anterior()">Back</button>

       <h1 class="font-weight-bold mt-3">Albums</h1> 

                <div class="row p-3 d-flex justify-content-center">   
                    <Album v-for="album in albums.slice(num1, num2)"
                    :album="album"
                    :key="album.id"
                    class="col-lg-3 mt-3"></Album>
                </div>
                
                <span class="paginas" v-for="pagina in paginas.slice(num3, num4)" :key="pagina.id" @click="num2=pagina*10; num1=num2-10">{{pagina}}> </span>
                <span class="paginas" @click="num3=num3+10; num4= num3 +10"> ... </span>
                
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
            },
            paginas: [],
            showMore: false,
            num1: 0,
            num2: 10,
            num3: 0,
            num4: 10
        }
    },
    methods:{
       Anterior(){
            this.$router.go(-1);
        },
        ...Vuex.mapMutations(['ShowClients'])
    },
    created () {
        let pag = 0;
         for (let index = 0; index < this.albums.length; index=index+10) {
                pag = pag+1;
                this.paginas.push(pag);       
            }
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

.paginas{
    cursor: pointer;
}
</style>

