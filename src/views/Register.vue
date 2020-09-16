<template>
  <div class="register-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-9">
              <div class="container col-lg">
                <form class="my-5">
                  <div class="form-group" style="width:50%">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="register-name">
                  </div>
                  <div class="form-group" style="width:50%">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="register-email" aria-describedby="emailHelp">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group" style="width:50%">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="register-password">
                  </div>
                  <div class="form-group form-check" style="width:50%">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" class="btn btn-primary">Register</button>
                </form>
              </div>
        </div>
        <div class="col-3 my-5">
          It's Me Here
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Register'
}
</script>
<style>

</style>
