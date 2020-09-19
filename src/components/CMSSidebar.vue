<template>
  <div>
    <table class="table">
      <thead>
        <tr class="row">
          <th class="col-1"></th>
          <th scope="col" class="col-4" style="word-wrap: break-word">Name</th>
          <th scope="col" class="col-4" style="word-wrap: break-word">Price</th>
          <th scope="col" class="col-1"></th>
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