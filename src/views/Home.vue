<template>
  <div class="home-page">
    <Navbar></Navbar>
    <div class="main-content">
      <div class="container-fluid">
        <div class="row">
          <!-- sidebar -->
          <SideBar></SideBar>
          <!-- main contain menu -->
          <ListOfItem></ListOfItem>
          <!-- <AddItem></AddItem> -->
          <!-- <ListOfEmpty></ListOfEmpty> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ListOfItem from '../components/ListOfItem.vue'
import SideBar from '../components/SideBar.vue'
// import ListOfEmpty from '../components/ListEmpty'
// import AddItem from '../components/AddItem.vue'
import Navbar from '../components/Navbar.vue'
export default {
  name: 'Home',
  components: {
    SideBar,
    Navbar,
    ListOfItem
    // AddItem,
    // ListOfEmpty
  }
}
</script>
