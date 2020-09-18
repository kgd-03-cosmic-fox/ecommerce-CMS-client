<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div id="nav" class="col-2 bg-primary">
          <div class="d-flex flex-column">
            <router-link to="/" class="router"  v-show="loginStatus">Home</router-link>
            <router-link to="/about" class="router"  v-show="loginStatus">About</router-link>
            <router-link to="/products" class="router"  v-show="loginStatus">Product</router-link>
            <a href="#" class="router" v-on:click.prevent="Logout" v-show="loginStatus">Logout</a>
          </div>
        </div>
        <div class="col-10 view-side">
          <router-view
          v-on:changeLoginStatus="changeStatus"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginStatus: ''
    }
  },
  methods: {
    Logout () {
      localStorage.clear()
      this.$store.commit('SET_PRODUCTS', [])
      this.$router.push({ name: 'Login' })
      this.changeStatus(false)
    },
    changeStatus (param) {
      this.loginStatus = param
    }
  },
  computed: {
    token () {
      return localStorage.getItem('access_token')
    }
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.$router.push({ name: 'Home' })
      this.$store.dispatch('fetchProducts')
      this.changeStatus(true)
    } else {
      this.$router.push({ name: 'Login' })
      this.changeStatus(false)
    }
  }
}
</script>
