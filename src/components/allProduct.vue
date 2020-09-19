<template>
  <b-card
    title="All Stock"
    class="col-3 mr-3 shadow p-3 mb-5 bg-white"
    style="title.background-color:red"
  >
      <b-card-text>Product : {{dataProducts.length}} | All Stock : {{productsStock}}</b-card-text>
    <b-button variant="primary"  class="box-rounding button-card" v-on:click.prevent="productPage">See All Product</b-button>
  </b-card>
</template>

<script>
export default {
  name: 'AllProduct',
  props: ['dataProducts', 'productsStock'],
  methods: {
    productPage () {
      this.$router.push({ name: 'Product' })
    }
  }
}
</script>

<style>

</style>
