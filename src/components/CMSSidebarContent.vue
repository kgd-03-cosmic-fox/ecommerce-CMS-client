<template>
  <tr class="row">
    <th class="col-1"></th>
    <th class="col-4" scope="row" style="word-wrap: break-word">
      {{ product.name }}
    </th>
    <td class="col-4" style="word-wrap: break-word">
      {{
        new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "IDR",
        }).format(product.price)
      }}
    </td>
    <td class="col-1">
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