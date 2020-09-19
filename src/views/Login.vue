<template>
  <div class="container-fluid">
      <form class="my-5" @submit.prevent="login">
        <div class="form-group" style="width:50%">
          <label for="email">Email address</label>
          <input type="email" v-model="user.email" class="form-control" id="login-email" aria-describedby="emailHelp">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group" style="width:50%">
          <label for="login-password">Password</label>
          <input type="password" v-model="user.password" class="form-control" id="exampleInputPassword1">
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
import instanceAPI from '../api/instanceAPI.js'
export default {
  name: 'Login',
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
      instanceAPI({
        method: 'POST',
        url: 'http://localhost:3007/login',
        data: {
          email: this.user.email,
          password: this.user.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$router.push({ path: '/products' })
        })
        .catch(err => {
          console.log(err.message)
        })
        .finally(_ => {
          this.user.email = ''
          this.user.password = ''
        })
    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('access_token')) {
      next('/products')
    } else {
      next('/login')
    }
  },
  beforeRouteLeave (to, from, next) {
    if (localStorage.getItem('access_token')) {
      next()
    } else {
      next('/login')
    }
  }
}
</script>
<style>

</style>
