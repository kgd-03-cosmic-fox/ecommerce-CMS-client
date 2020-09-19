<template>
  <div class="">
    <NavBar/>
    <div class="container  update-box">
      <div class="col-sm border border-secondary product-list-box pt-4">
      <img :src="getProduct.imgUrl" class="card-img-top" alt="..." style="height:auto">
      <div class="card-body">
        <h5 class="card-title" >{{getProduct.name}}</h5>
        <p class="card-text">Rp. {{getProduct.price}}</p>
        <p class="card-text">Stock {{getProduct.stock}}</p>
        <button @click="uhhAkuTerpanggil" class="btn btn-sm btn-outline-danger">Pencet aku</button>
      </div>
    </div>
      <div class="col-sm py-4 border border-secondary">
        <h3>Update product</h3>
        <form @submit.prevent="editProduct">
          <label for="product-name-input">Name</label>
          <input v-model="product.name" id="product-name-input" class="form-control" type="text" placeholder="Latina machine grinder">
          <label for="category">Choose Category:</label><br>
          <select v-model="product.category" name="" id="category">
            <option value="manual-brewers">Manual Brewers</option>
            <option value="coffee-machines">Coffee Machines</option>
            <option value="coffees">Coffees</option>
          </select><br>
          <label for="product-price-input">Price</label>
          <input v-model="product.price" id="product-price-input" class="form-control" type="number" placeholder="1200000">
          <label for="product-stock-input">Stock Amount</label>
          <input v-model="product.stock" id="product-stock-input" class="form-control" type="number" placeholder="50"><br>
           <label for="product-url-input">Image Url</label>
          <input v-model="product.imgUrl" id="product-url-input" class="form-control" type="text" placeholder="http://<img-url>"><br>
        <button class="btn btn-sm btn-primary">Update</button>
        </form>
      </div>
      </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar'
import kobajaApi from '../api/kobajaApi'

export default {
  name: 'CategoryPage',
  data () {
    return {
      product: {
        name: '',
        category: '',
        price: 0,
        stock: 0,
        imgUrl: ''
      },
      getProduct: {
        name: '',
        price: 0,
        stock: 0,
        imgUrl: ''
      }
    }
  },
  components: {
    NavBar
  },
  methods: {
    editProduct () {
      kobajaApi({
        url: `/product/${this.$route.params.id}`,
        method: 'PUT',
        data: {
          name: this.product.name,
          category: this.product.category,
          price: this.product.price,
          stock: this.product.stock,
          imgUrl: this.product.imgUrl
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          window.confirm(data.message)
        })
        .catch((err) => {
          window.confirm(err)
          console.log(err)
        })
    },
    fetchProductById () {
      kobajaApi({
        url: `/product/${this.$route.params.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          this.getProduct.name = data.product.name
          this.getProduct.price = data.product.price
          this.getProduct.stock = data.product.stock
          this.getProduct.imgUrl = data.product.imgUrl
        })
        .catch(err => {
          console.log(err)
        })
    },
    delete (id) {
    },
    uhhAkuTerpanggil () {
      const answer = window.confirm('Are you sure you want to delete this product?')
      if (answer) {
        kobajaApi({
          url: `product/${this.$route.params.id}`,
          method: 'DELETE',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(data => {
            window.confirm('Product has been deleted')
            this.$router.push({ name: 'CategoryPage' })
          })
          .catch(_ => {
            console.log('Error :(')
          })
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
      next()
    } else {
      next(false)
    }
  },
  created () {
    this.fetchProductById()
  }
}
</script>

<style>
.update-box{
  display: flex;
  flex-direction: row;
}
</style>
