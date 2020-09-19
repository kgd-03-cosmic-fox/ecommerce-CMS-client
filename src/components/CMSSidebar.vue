<template>
  <div>
    <table class="table">
      <thead>
        <tr style>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <CMSSidebarContent
          v-for="product in productList"
          v-bind:key="product.id"
          v-bind:product="product"
        >
        </CMSSidebarContent>
      </tbody>
    </table>
  </div>
</template>

<script>
import CMSSidebarContent from "./CMSSidebarContent";
export default {
  components: { CMSSidebarContent },
  computed: {
    productList() {
      return this.$store.state.products;
    },
  },
  methods: {},
  created() {
    this.$store.dispatch("fetchProductDatas");
  },
};
</script>

<style>
</style>