<template>
  <div class="home-page">
    <Navbar></Navbar>
    <div class="main-content">
      <div class="container-fluid">
        <div class="row">
          <!-- sidebar -->
          <SideBar></SideBar>
          <!-- main contain menu -->
          <!-- <ListOfItem></ListOfItem> -->
          <!-- <AddItem></AddItem> -->
          <!-- <ListOfEmpty></ListOfEmpty> -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import instanceAPI from '../api/instanceAPI.js'
import SideBar from '../components/SideBar.vue'
import Navbar from '../components/Navbar.vue'
export default {
  name: 'Home',
  data () {
    return {
      item: []
    }
  },
  components: {
    SideBar,
    Navbar
  },
  methods: {
    fetchItem () {
      instanceAPI({
        method: 'get',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          this.item = data
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
