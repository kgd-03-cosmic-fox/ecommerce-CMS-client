<template>
    <div class="text-center">
        <div class="box-login bg-color-success">
            <div class="form-login shadow-lg p-3 mb-5 bg-white rounded">
                <h1>Login</h1>
                <form method="post">
                  <div>
                    <input type="text"
                    name="login.email"
                    id="login.email"
                    v-model="login.email"
                    placeholder="email">
                  </div>
                  <div>
                    <input type="password"
                    name="login.password"
                    id="login.password"
                    v-model="login.password"
                    placeholder="password">
                  </div>
                  <div>
                    <button type="button"
                    class="btn btn-primary">
                    Login
                    </button>
                  </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style>

</style>
