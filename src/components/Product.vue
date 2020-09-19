<template>
<tr>
<th scope="row"><img v-bind:src="product.image_url" alt="desk"></th>
<td>{{product.name}}</td>
<td>{{product.price}}</td>
<td>{{product.stock}}</td>
<td>
  <router-link :to="`/products/${product.id}`"><img class="bi" src="../assets/pencil.png" alt="pencil"></router-link>
|
<img class="bi" src="../assets/trashcan.png" alt="trash" v-on:click.prevent="deleteData(product.id)">
</td>
</tr>
</template>

<script>
export default {
  name: 'Product',
  props: ['product'],
  methods: {
    deleteData (id) {
      const confirmation = confirm('Are You sure want to delete this data?')
      if (confirmation) {
        this.$store.dispatch('deleteProducts', id)
        setTimeout(() => {
          this.$store.commit('SET_MESSAGE_SUCCESS', '')
        }, 2000)
      }
    }
  }
}
</script>

<style>

</style>
