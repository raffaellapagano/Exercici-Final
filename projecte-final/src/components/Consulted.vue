<template>

    <div>
        <div class="card m-3 shadow" style="width: 20rem;">
        <div class="card-body">
            <h5 class="card-title">{{ title }} consulted</h5>
            <div class="albums d-flex align-items-end text-left m-3" v-for="item in items" :key="item.id">
                <div v-if="itemType">
                    {{item.name}}
                </div>
                <div v-else>
                    {{item.title}}
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
        title: String, 
        items: Array,
        numberShow: Number,
        propriedad: String,
        itemType: Boolean
    },
    data(){
        return{
            albums: [],
            users: [],            
            itemMensaje: String
        }
    },
    methods:{
        PonerPropriedad(item){
            let prop = this.propriedad;
            this.itemMensaje = `${item}.${prop}`
        }
    },
    mounted(){
        let vue = this;

        axios.get('http://jsonplaceholder.typicode.com/photos')
        .then( function ( response) { 
            vue.albums = response.data;
         });

         axios.get('http://jsonplaceholder.typicode.com/users')
         .then(function (response2) { 
            vue.users = response2.data;
          });
    }
    
}
</script>