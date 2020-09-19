<template>
  <div>
    <button type="button" class="btn btn-primary" @click="toAddProductPage">
      Add Product
    </button>
  </div>
</template>

<script>
export default {
  name: "addProductButton",
  methods: {
    toAddProductPage() {
      this.$router.push({ name: "AddNewProduct" });
    },
  },
};
</script>

<style>
</style>