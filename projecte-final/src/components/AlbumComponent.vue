<template>

    <div>            
        <img class="imgAlbum" :src="album.url" alt="" @click="Show(album.id); SetConsultedPictures(album.title)">    
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

