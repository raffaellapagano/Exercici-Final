<template>
    <div class="col-lg-3 mb-3">

        <div class="card bg-light" >
            <h6 class="mt-3">{{ client.name }}</h6>
            <hr>
            <div class="card-body">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Ver
                </button>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">{{ client.name }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p> Username: {{ client.username }}</p>
                <p>Email: {{ client.email }}</p>
                <p>Address: </p>
                   <p>{{ client.address.street }} {{ client.address.suite }}</p>
                    <p>{{ client.address.city }} - {{ client.address.zipcode }}</p>
                <p>Geo:</p>
                   <p>Lat: {{ client.address.geo.lat }} Long: {{ client.address.geo.lng }}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Cliente',
    props: {
    client: Object
  }
}
</script>

<style scoped>

.hTitle{
    min-height: fit-content;
    height: 100px
}
.hCard{
    min-height: fit-content;
    height: 100px
}

p{
    text-align: left;
}

</style>