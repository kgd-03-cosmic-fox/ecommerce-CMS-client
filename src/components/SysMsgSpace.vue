<template>
  <div>
    <ErrorMessage v-if="errorMsg !== null" v-bind:msg="errorMsg"></ErrorMessage>
  </div>
</template>

<script>
import ErrorMessage from "./ErrorMessage.vue";
export default {
  computed: {
    errorMsg() {
      return this.$store.state.errorMessage;
    },
  },
  components: { ErrorMessage },
};
</script>

<style>
</style>