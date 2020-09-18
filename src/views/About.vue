<template>
  <div class="about">
    <h1>This is About</h1>
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('access_token')) {
      next()
    } else {
      next('/login')
    }
  }
}
</script>

<style>

</style>
