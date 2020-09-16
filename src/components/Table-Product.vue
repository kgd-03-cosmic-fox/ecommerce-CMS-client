<template>
  <div class="table-box">
    <table class="table table-product">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody >
           <Product v-for="product in listProducts"
           v-bind:key="product.id"
           v-bind:product="product"
           ></Product>
        </tbody>
    </table>
  </div>
</template>

<script>
import Product from './Product'

export default {
  name: 'TableProduct',
  computed: {
    listProducts () {
      return this.$store.state.products
    }
  },
  components: {
    Product
  }
}
</script>

<style>

</style>
