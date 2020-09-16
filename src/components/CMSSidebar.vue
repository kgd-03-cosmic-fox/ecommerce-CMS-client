<template>
  <div>
    <table class="table">
      <thead>
        <tr style>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <CMSSidebarContent></CMSSidebarContent>
      </tbody>
    </table>
  </div>
</template>

<script>
import CMSSidebarContent from "./CMSSidebarContent";
export default {
  components: { CMSSidebarContent },
};
</script>

<style>
</style>