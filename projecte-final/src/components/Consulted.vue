<template>

    <div>
        <div class="card m-3 shadow" style="width: 20rem;">
        <div class="card-body">
            <h5 class="card-title">{{ title }} consulted</h5>
            <div class="albums d-flex justify-content-between align-items-end m-3" v-for="item in consultedUsers" :key="item.id">
                <div>
                    {{item.users}}
                </div>
                <div>
                    {{ item.view }}
                </div>
            </div>
        </div>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
import Vuex from 'vuex'

export default {
    props:{
        title: String
    },
    data(){
        return{
        }
    },
    methods:{
        PonerPropriedad(item){
            let prop = this.propriedad;
            this.itemMensaje = `${item}.${prop}`
        }
    },
    computed:{
        ...Vuex.mapState(['consultedUsers'])
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