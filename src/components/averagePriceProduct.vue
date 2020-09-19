<template>
  <b-card
    title="Average Price"
    class="col-3 mr-3 shadow p-3 mb-5 bg-white"
    style="title.background-color:red"
  >
    <b-card-text>Average Price : {{avgPrice}}</b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'AveragePriceCard',
  props: ['avgPrice']
}
</script>

<style>

</style>
