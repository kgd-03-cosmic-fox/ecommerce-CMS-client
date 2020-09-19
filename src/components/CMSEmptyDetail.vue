<template>
  <div class="container">
    <div>
      <h2>Welcome to PleiStore Content Management System</h2>
      <br />
      <h4>
        You can browse the items put on sale on the sidebar to the left.
        <br />
        Press the "Edit" button to check its details, where you can update
        and/or delete the item.
      </h4>
    </div>
    <SysMsgSpace></SysMsgSpace>
  </div>
</template>

<script>
import SysMsgSpace from "./SysMsgSpace.vue";
export default {
  components: { SysMsgSpace },
};
</script>

<style>
</style>