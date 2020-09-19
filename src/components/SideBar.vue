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
        <router-link to="/outstock-list">Edit/Restock Product</router-link>
      </div>
      <div class="my-3">
        <a href="#" @click="logout">Logout</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SideBar',
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push({ path: '/login' })
    }
  }
}
</script>
