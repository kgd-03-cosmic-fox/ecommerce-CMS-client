<template>
    <div class="text-center">
        <div class="box-edit bg-color-success">
            <div class="form-edit shadow-lg p-3 bg-white rounded">
                <h1>Edit Product</h1>
                <form method="post">
                  <div>
                    <input type="text"
                    name="edit.image_url"
                    id="edit.image_url"
                    v-model="edit.image_url"
                    placeholder="image_url"
                    >
                  </div>
                  <div>
                    <input type="text"
                    name="edit.name"
                    id="edit.name"
                    v-model="edit.name"
                    placeholder="name"
                    >
                  </div>
                  <div>
                    <input type="number"
                    name="edit.price"
                    id="edit.price"
                    v-model="edit.price"
                    min="0"
                    placeholder="price"
                    >
                  </div>
                  <div>
                    <input type="number"
                    name="edit.stock"
                    id="edit.stock"
                    v-model="edit.stock"
                    min="0"
                    placeholder="stock"
                    >
                  </div>
                  <div>
                    <button type="button"
                    class="btn btn-primary"
                    v-on:click="editProduct"
                    >
                    Edit
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
  name: 'EditProduct',
  data () {
    return {
      edit: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    editProduct () {
      const dataEdit = this.edit
      const id = this.id
      this.$store.dispatch('editProducts', { dataEdit, id })
      if (this.status === 'success') {
        this.$router.push({ name: 'Product' })
        this.$store.commit('SET_STATUS_EDIT', '')
      }
    },
    fetchDataId () {
      ProductsAPI({
        method: 'get',
        url: `/products/${this.$route.params.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          this.edit.name = data.name
          this.edit.image_url = data.image_url
          this.edit.price = data.price
          this.edit.stock = data.stock
        })
        .catch(err => {
          console.log(err)
        })
    }

  },
  computed: {
    status () {
      return this.$store.state.statusEdit
    },
    id () {
      return this.$route.params.id
    }
  },
  created () {
    this.fetchDataId()
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
