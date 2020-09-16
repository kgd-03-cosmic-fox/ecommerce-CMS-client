<template>
  <div>
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
export default {
  name: "Dashboard",
  components: { CMSSidebar },
};
</script>
