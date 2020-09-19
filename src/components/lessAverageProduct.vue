<template>
  <b-card
    title="Below Average Price"
    class="col-3 mr-3 ml-auto shadow p-3 mb-5 bg-white"
  >
    <b-card-text>Below Average Price : {{belowAvgPrice}} Products</b-card-text>
    <b-button variant="primary"  class="box-rounding" v-on:click.prevent="belowPriceProduct">See Product</b-button>
  </b-card>
</template>

<script>
export default {
  name: 'BelowAveragePrice',
  props: ['belowAvgPrice'],
  methods: {
    belowPriceProduct () {
      this.$store.commit('SET_VALIDATE_OPERATOR', { validate: 'price', operator: 'below' })
      this.$router.push({ name: 'Product' })
    }
  }
}
</script>

<style>

</style>
