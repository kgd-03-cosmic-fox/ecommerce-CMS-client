<template>
   <b-card
    title="Above Average Price"
    class="col-3 mr-auto shadow p-3 mb-5 bg-white"
  >
    <b-card-text>Above Average Price: {{aboveAvgPrice}} Products</b-card-text>
    <b-button variant="primary"  class="box-rounding button-card" v-on:click.prevent="abovePriceProduct">See Product</b-button>
  </b-card>
</template>

<script>
export default {
  name: 'AboveAveragePriceCard',
  props: ['aboveAvgPrice'],
  methods: {
    abovePriceProduct () {
      this.$store.commit('SET_VALIDATE_OPERATOR', { validate: 'price', operator: 'above' })
      this.$router.push({ name: 'Product' })
    }
  }
}
</script>

<style>

</style>
