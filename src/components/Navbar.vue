<template>
  <section id="navbar-section">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <h2 class="navbar-brand">Shop Content Management System</h2>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <h5 class="nav-link"></h5>
        </li>
        <li class="nav-item">
          <AddProductButton></AddProductButton>
        </li>
      </ul>
      <button
        class="btn btn-outline-danger my-2 my-sm-0"
        type="button"
        @click.prevent="logout"
      >
        Log out
      </button>
    </nav>
  </section>
</template>

<script>
import AddProductButton from "./AddProductButton.vue";
export default {
  components: { AddProductButton },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style>
</style>