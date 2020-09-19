<template>
  <b-card
    title="Ready Stock"
    class="col-3 mr-auto shadow p-3 mb-5 bg-black"
  >
    <b-card-text>Product : {{readyStock}}</b-card-text>
    <b-button variant="primary"  class="box-rounding button-card" v-on:click.prevent="readyStockProductPage">See Product</b-button>
  </b-card>
</template>

<script>
export default {
  name: 'ReadyProductCard',
  props: ['readyStock'],
  methods: {
    readyStockProductPage () {
      this.$store.commit('SET_VALIDATE_OPERATOR', { validate: 'stock', operator: 'ready' })
      this.$router.push({ name: 'Product' })
    }
  }
}
</script>

<style>

</style>
