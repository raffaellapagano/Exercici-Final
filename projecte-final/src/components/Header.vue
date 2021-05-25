<template>
    <div id="nav">

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#"><img src="../assets/IT logo.png" width="150" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
              <router-link class="nav-link" to="/">Home</router-link>           
              <router-link class="nav-link" to="/users">Users</router-link>
              <router-link class="nav-link" to="/picture">Picture</router-link>
        </div>

        <div class="input-group col-12 col-lg-4">
          <input type="text" class="form-control" placeholder="Search">
          <div class="input-group-append">
            <button class="btn btn-secondary" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
          </div>
        </div>
        
      </nav>

    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">

#nav{
  padding: 30px;

  a {
    font-weight: bold;
    color: #f9fbfc;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>