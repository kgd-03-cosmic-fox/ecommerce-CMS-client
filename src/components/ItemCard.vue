<template>
  <div class="col-3 my-2">
    <div class="card" style="width: 18rem;  height: 25rem;">
      <img class="card-img-top" :src="item.image_url" width="100px" height="200px">
      <div class="card-body">
        <p class="card-text h3">{{ item.name }}</p>
        <p class="h5">Price : {{ price }}</p>
        <p class="h5">Stock Left : {{ item.stock }}</p>
      </div>
      <div class="card-button">
        <button type="button" class="btn btn-danger" @click="delItem(item.id)">Delete</button>
        <router-link :to="`/details/${item.id}`"><button type="button" class="btn btn-warning">Details</button></router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ItemCard',
  props: ['item'],
  methods: {
    delItem (id) {
      const agreement = confirm('Are you sure to delete this item?')
      if (agreement === true) {
        this.$store.dispatch('deleteItem', { id: id })
      }
    }
  },
  computed: {
    price () {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'IDR' }).format(this.item.price)
    }
  }
}
</script>
