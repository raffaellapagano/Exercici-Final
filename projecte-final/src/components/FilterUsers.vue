<template>
    <div>
        <div class="row d-flex justify-content-center" v-if="userFil.length != 0">
            <User :user="user" v-for="user in userFil" :key="user.id" class="m-3"></User>
        </div>
        <div v-else class="alert alert-danger">No hay usuarios</div>
    </div>
</template>

<script>
import User from './ClientComponent.vue'
import {mapGetters} from 'vuex'


export default ({
    computed:{
        ...mapGetters({
            userFil: 'FilteredUser'
        })
    },
    components: {
        User
    }
})
</script>