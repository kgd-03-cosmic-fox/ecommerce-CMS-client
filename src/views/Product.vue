<template>
  <div>
    <div class="box-button">
      <b-button href="#" variant="primary"  class="button-add-product box-rounding" v-on:click.prevent="addPage">Add Product</b-button>
    </div>
    <div>
        <h1>Table Of Product</h1>
    </div>
    <div class='table-of-products'>
        <TableProduct></TableProduct>
    </div>
  </div>
</template>

<script>

import TableProduct from '../components/Table-Product.vue'

export default {
  components: {
    TableProduct
  },
  methods: {
    addPage () {
      this.$router.push({ name: 'AddProduct' })
    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('access_token')) {
      next()
    } else {
      next('/login')
    }
  }
}
</script>

<style>

</style>
