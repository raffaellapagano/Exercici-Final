<template>

    <div>
        <div class="card m-3 shadow" style="width: 20rem;">
        <div class="card-body">
            <h5 class="card-title">{{ title }} consulted</h5>
            <div class="albums d-flex align-items-end text-left m-3" v-for="album in albums" :key="album.id">
                <div>
                    {{album.title}}
                </div>
                <div>
                    {{ numberShow }}
                </div>
            </div>
        </div>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'

export default {
    props:{
        title: String
    },
    data(){
        return{
            albums: [],
            numberShow: 0
        }
    },
    methods:{
        ShowProduct(){
            numberShow++
        }
    },
    mounted(){
        let vue = this;
        axios.get('http://jsonplaceholder.typicode.com/photos')
        .then( function ( response) { 
            vue.albums = response.data;
         })
    }
    
}
</script>