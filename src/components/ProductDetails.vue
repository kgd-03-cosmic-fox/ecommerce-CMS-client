<template>
  <div class="col-9">
    <div class="row">
      <div class="col-4">
        <img :src="itemDetail.image_url" class="img-fluid" alt="Responsive image">
      </div>
      <div class="col-8">
        <ul class="list-group">
          <li class="list-group-item">Item Name: {{ itemDetail.name }} </li>
          <li class="list-group-item">Item Price: {{ price }}</li>
          <li class="list-group-item">Stock : {{ itemDetail.stock }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductDetails',
  computed: {
    itemDetail () {
      return this.$store.state.detail
    },
    price () {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'IDR' }).format(this.itemDetail.price)
    }
  },
  created () {
    this.$store.dispatch('fetchDetailItem', { id: this.$route.params.id })
  }
}
</script>
