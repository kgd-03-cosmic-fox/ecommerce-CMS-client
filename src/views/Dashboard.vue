<template>
  <div>
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#addProductModal"
    >Add Product</button>
    <addNewProduct
      class="modal fade"
      id="addProductModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addProductModal"
      aria-hidden="true"
    ></addNewProduct>
    <div class="row" style="height:100vh;">
      <div class="col-4 shadow-lg p-2">
        <h3 style="background-color:silver">Product List</h3>
        <CMSSidebar></CMSSidebar>
      </div>
      <div class="col-8 shadow-lg p-2">
        <h3 style="background-color:silver">Product Info</h3>
      </div>
    </div>
  </div>
</template>

<script>
import CMSSidebar from "../components/CMSSidebar";
import AddNewProduct from "../components/AddNewProduct";
export default {
  name: "Dashboard",
  components: { CMSSidebar, AddNewProduct },
};
</script>
