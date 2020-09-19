<template>
  <tr>
    <th scope="row">{{ product.name }}</th>
    <td>{{ product.price }}</td>
    <td>
      <button @click.prevent="editItem">Edit</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    editItem() {
      this.$store.commit("updateCurrentEdit", this.product);
    },
  },
};
</script>

<style>
</style>