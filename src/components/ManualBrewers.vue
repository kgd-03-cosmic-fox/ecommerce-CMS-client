<template>
  <div class="container">
  <div class="product-list-box">
    <div v-for="product in products" :key="product.id" class="card" style="width: 18rem;">
      <img :src="product.imgUrl" class="card-img-top" alt="..." style="width:250px">
      <div class="card-body">
        <h5 class="card-title" >{{product.name}}</h5>
        <p class="card-text">Rp.{{product.price}}</p>
        <router-link :to="`/product/${product.id}`" class="btn btn-primary">Update Product</router-link>
        <p class="card-text">Stock: {{product.stock}}</p>
        <button @click='deleteProduct(product.id)' class="btn btn-sm btn-outline-danger">Delete products</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import kobajaApi from '../api/kobajaApi'

export default {
  name: 'ManualBrewers',
  computed: {
    products () {
      return this.$store.state.manualBrewers
    }
  },
  methods: {
    deleteProduct (id) {
      const answer = window.confirm('Do you really want to delete this product?')
      if (answer) {
        kobajaApi({
          url: `/product/${id}`,
          method: 'DELETE',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(data => {
            this.fetchData()
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    fetchData () {
      if (localStorage.getItem('access_token')) {
        kobajaApi({
          url: '/category/manual-brewers',
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(({ data }) => {
            console.log(data.products)
            this.$store.dispatch('fetchDataManualBrewers', data.products)
          })
      }
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style>
  .product-list-box{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
  .card-body{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
