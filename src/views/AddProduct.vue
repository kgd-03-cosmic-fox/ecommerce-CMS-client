<template>
    <div class="text-center">
      <b-alert variant="danger" show v-if="errorMessage">{{errorMessage}}</b-alert>
      <div class="box-add bg-color-success">
        <div class="form-add shadow-lg p-3 bg-white rounded">
          <h1>Add Product</h1>
          <form method="post">
            <div>
              <input type="text"
              name="add.image_url"
              id="add.image_url"
              v-model="add.image_url"
              placeholder="image_url">
            </div>
            <div>
              <input type="text"
              name="add.name"
              id="add.name"
              v-model="add.name"
              placeholder="name">
            </div>
            <div>
              <input type="number"
              name="add.price"
              id="add.price"
              v-model="add.price"
              min="0"
              placeholder="price">
            </div>
            <div>
              <input type="number"
              name="add.stock"
              id="add.stock"
              v-model="add.stock"
              min="0"
              placeholder="stock">
            </div>
            <div>
              <button type="button"
              class="btn btn-primary"
              v-on:click="addProduct"
              >
              Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      add: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProducts', this.add)
      if (this.status === 'success') {
        this.$router.push({ name: 'Product' })
        this.$store.commit('SET_STATUS_ADD', '')
      } else {
        this.errorHandling()
      }
    },
    errorHandling () {
      setTimeout(() => {
        this.$store.commit('SET_MESSAGE_ERROR', '')
      }, 3500)
    }
  },
  computed: {
    status () {
      return this.$store.state.statusAdd
    },
    errorMessage () {
      return this.$store.state.messageError
    }
  },
  beforeRouteEnter (to, from, next) {
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
