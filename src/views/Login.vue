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
                    class="btn btn-primary"
                    v-on:click="Login"
                    >
                    Login
                    </button>
                  </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import ProductsAPI from '../api/productsAPI'
export default {
  name: 'Login',
  data () {
    return {
      login: {
        email: 'admin@email.com',
        password: '1234'
      }
    }
  },
  methods: {
    Login () {
      ProductsAPI({
        method: 'post',
        url: 'login',
        data: {
          email: this.login.email,
          password: this.login.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$store.dispatch('fetchProducts')
          this.$store.commit('SET_MESSAGE_ERROR', '')
          this.$router.push({ name: 'Home' })
          localStorage.setItem('email', data.email)
          this.$emit('changeLoginStatus', true)
        })
        .catch(err => {
          this.$store.commit('SET_MESSAGE_ERROR', err.messages)
        })
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    },
    dataProducts () {
      return this.$store.state.products
    }
  }
}
</script>

<style>

</style>
