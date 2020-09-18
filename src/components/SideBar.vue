<template>
  <div class="col-3">
    <div class="col">
      <div class="my-3">
        <router-link to="/products">List Product</router-link>
      </div>
      <div class="my-3">
        <router-link to="/add-item">Add Product</router-link>
      </div>
      <div class="my-3">
        Restock Product
      </div>
      <div class="my-3">
        <router-link to="/outstock-list">List of Empty Product</router-link>
      </div>
      <div class="my-3">
        Logout
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SideBar'
}
</script>
