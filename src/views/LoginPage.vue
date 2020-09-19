<template>
    <div class="login-page">
        <div class="login-box-center p-5">
            <form @submit.prevent='login' >
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input v-model='user.email' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input v-model='user.password' type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <div class="login-right-side">
                <img src="../assets/img/spilled-coffee-mug.png" alt="">
                <h1 class="text-logo">Welcome to Kobaja.id!</h1>
            </div>
        </div>
    </div>
</template>

<script>
import KobajaApi from '../api/kobajaApi'

export default {
  name: 'LoginPage',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      KobajaApi({
        url: '/login',
        method: 'POST',
        data: {
          email: this.user.email,
          password: this.user.password
        }
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('access_token', data.token)
          this.$router.push({ name: 'Home' })
        })
        .catch((err) => {
          console.log(err)
          window.confirm(err)

    }
  }
}
</script>

<style>

</style>
