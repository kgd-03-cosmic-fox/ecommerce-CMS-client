<template>
  <div class="container-fluid">
      <form class="my-5">
        <div class="form-group" style="width:50%">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group" style="width:50%">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="form-group form-check" style="width:50%">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
        <router-link to="/register">
          <button class="btn btn-primary">Register</button>
        </router-link>
      </form>
  </div>
</template>
<script>
export default {
  name: 'Login'
}
</script>
<style>

</style>
