<template>
    <div>
        <div class="row d-flex justify-content-center" v-if="users.length > 0">
            <User :user="user" v-for="user in users" :key="user.id" class="col-sm-3 mt-3"></User>
        </div>
        <div v-else class="alert alert-danger">No hay usuarios</div>
    </div>
</template>

<script>
import User from './ClientComponent.vue'
import {mapGetters} from 'vuex'


export default ({
    components: {
        User
    },
    computed:{
        ...mapGetters({
            users: 'FilteredUser'
        })
    }
})
</script>