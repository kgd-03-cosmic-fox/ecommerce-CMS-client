<template>
  <div class="home">
    <NavBar/>
    <h1>Selamat datang, {{name}} </h1>
    <Products
    @fetchData='fetchData'
    :products="products"
    ></Products>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import kobajaApi from '../api/kobajaApi'
import Products from '../components/Products.vue'

export default {
  name: 'Home',
  components: {
    NavBar, Products
  },
  methods: {
    incrementCoba () {
    }
  },
  computed: {
    name () {
      return this.$store.state.user.name
    },
    products () {
      return this.$store.state.products
    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('access_token')) {
      next()
    } else {
      next('/login')
    }
  },
  methods: {
    fetchData () {
      kobajaApi({
        url: '/product',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          this.$store.dispatch('fetchDataProducts', data.products)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchData()

  }
}
</script>
