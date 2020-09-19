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
      const product = this.$store.state.products
      let avgPrice = 0
      let totalPrice = 0
      for (let i = 0; i < product.length; i++) {
        totalPrice += product[i].price
      }
      avgPrice = totalPrice / product.length
      if (this.validate === 'price' && this.operator === 'below') {
        return this.$store.state.products.filter(el => el.price < avgPrice)
      } else if (this.validate === 'price' && this.operator === 'above') {
        return this.$store.state.products.filter(el => el.price >= avgPrice)
      } else if (this.validate === 'stock' && this.operator === 'no') {
        return this.$store.state.products.filter(el => el.stock === 0)
      } else if (this.validate === 'stock' && this.operator === 'ready') {
        return this.$store.state.products.filter(el => el.stock > 0)
      } else {
        return this.$store.state.products
      }
    },
    validate () {
      return this.$store.state.validate
    },
    operator () {
      return this.$store.state.operator
    }
  },
  components: {
    Product
  }
}
</script>

<style>

</style>
