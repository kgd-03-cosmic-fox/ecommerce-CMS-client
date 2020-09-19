<template>
  <div class="about">
    <h1>This is About</h1>
    <div>
      <p>
        This Website is made for study purpose <em>(right now)</em>
      </p>
      <p>
        Obviously, the product is all duplicate and taken from google image. The product is real <strong> <em> but all the name , price , stock is only dummy </em> </strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('fetchProducts')
    this.$store.commit('SET_VALIDATE_OPERATOR', { validate: '', operator: '' })
  },
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
