<template>
  <div class="home-page">
    <Navbar></Navbar>
    <div class="alert alert-success" role="alert" v-if="this.$store.state.notification">
      {{ this.$store.state.notification }}
    </div>
    <div class="main-content">
      <div class="container-fluid">
        <div class="row">
          <!-- sidebar -->
          <SideBar></SideBar>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from '../components/SideBar.vue'
import Navbar from '../components/Navbar.vue'
export default {
  name: 'Home',
  components: {
    SideBar,
    Navbar
  },
  methods: {
  },
  created () {
    if (localStorage.access_token) {
      this.$store.dispatch('fetchItem', { message: '' })
    } else {
      this.$router.push({ path: '/login' })
    }
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
