<template>
  <div>
    <div class="box-button">
      <b-button href="#" variant="primary"  class="button-add-product box-rounding">Add Product</b-button>
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
  }
}
</script>

<style>

</style>
