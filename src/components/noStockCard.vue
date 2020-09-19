<template>
   <b-card
    title="No Stock"
    class="col-3 mr-3 ml-auto shadow p-3 mb-5 bg-white"
  >
    <b-card-text>Product : {{noStock}}</b-card-text>
    <b-button href="#" variant="primary"  class="box-rounding button-card" v-on:click.prevent="noStockProductPage">Restock Product</b-button>
  </b-card>

</template>

<script>
export default {
  name: 'NoStockCard',
  props: ['noStock'],
  methods: {
    noStockProductPage () {
      this.$store.commit('SET_VALIDATE_OPERATOR', { validate: 'stock', operator: 'no' })
      this.$router.push({ name: 'Product' })
    }
  }
}
</script>

<style>

</style>
