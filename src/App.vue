<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div id="nav" class="col-2 bg-primary">
          <div class="d-flex flex-column">
            <router-link to="/" class="router">Home</router-link>
            <router-link to="/about" class="router">About</router-link>
            <router-link to="/login" class="router">Login</router-link>
            <router-link to="/products" class="router">Product</router-link>
            <a href="#" class="router" v-on:click.prevent="Logout">Logout</a>
          </div>
        </div>
        <div class="col-10 view-side">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    Logout () {
      localStorage.clear()
      this.$store.commit('SET_PRODUCTS', [])
    }
  }
}
</script>
