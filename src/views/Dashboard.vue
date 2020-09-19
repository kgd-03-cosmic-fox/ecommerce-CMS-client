<template>
  <div>
    <Navbar></Navbar>
    <div class="row" style="height: 100vh">
      <div class="col-3 shadow-lg p-2">
        <h3 style="background-color: silver" class="text-center">
          Product List
        </h3>
        <CMSSidebar></CMSSidebar>
      </div>
      <div class="col-9 shadow-lg p-2">
        <h3 style="background-color: silver" class="text-center">
          Product Info
        </h3>
        <CMSDetail
          v-if="detailComponentDisplay !== null"
          v-bind:productToEdit="detailComponentDisplay"
        ></CMSDetail>
        <CMSEmptyDetail v-else></CMSEmptyDetail>
      </div>
    </div>
  </div>
</template>

<script>
import CMSSidebar from "../components/CMSSidebar";
import CMSDetail from "../components/CMSDetail";
import Navbar from "../components/Navbar";
import CMSEmptyDetail from "../components/CMSEmptyDetail";

export default {
  name: "Dashboard",
  components: { CMSSidebar, CMSDetail, Navbar, CMSEmptyDetail },
  computed: {
    detailComponentDisplay() {
      return this.$store.state.currentEdit;
    },
  },
  created() {
    if (!localStorage.getItem("access_token")) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>
