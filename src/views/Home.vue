<template>
  <div class="home">
    <h1 class="welcome-message">Welcome, <strong>{{email}}</strong></h1>
    <div class="container-fluid align-content-center">
      <div class="row">
        <div class="container col-9">
          <div class="row">
            <b-card
              title="No Stock"
              class="col-3 mr-3 ml-auto shadow p-3 mb-5 bg-white"
            >
              <b-card-text>Product : {{noStock}}</b-card-text>
              <b-button href="#" variant="primary"  class="box-rounding button-card">Restock Product</b-button>
            </b-card>

            <b-card
              title="All Stock"
              class="col-3 mr-3 shadow p-3 mb-5 bg-white"
              style="title.background-color:red"
            >
                <b-card-text>Product : {{dataProducts.length}} | All Stock : {{productsStock}}</b-card-text>
              <b-button variant="primary"  class="box-rounding button-card" v-on:click.prevent="productPage">See All Product</b-button>
            </b-card>

            <b-card
              title="Ready Stock"
              class="col-3 mr-auto shadow p-3 mb-5 bg-black"
            >
              <b-card-text>Product : {{readyStock}}</b-card-text>
              <b-button variant="primary"  class="box-rounding button-card">See Product</b-button>
            </b-card>

          </div>
        </div>

        <div class="container col-9 mt-5">
          <div class="row">
            <b-card
              title="Less Than Average"
              class="col-3 mr-3 ml-auto shadow p-3 mb-5 bg-white"
            >
              <b-card-text>Below Average Price : {{belowAvgPrice}} Products</b-card-text>
              <b-button variant="primary"  class="box-rounding">See Product</b-button>
            </b-card>

            <b-card
              title="Average Price"
              class="col-3 mr-3 shadow p-3 mb-5 bg-white"
              style="title.background-color:red"
            >
              <b-card-text>Average Price : {{avgPrice}}</b-card-text>
            </b-card>

            <b-card
              title="Greater Than Average"
              class="col-3 mr-auto shadow p-3 mb-5 bg-white"
            >
              <b-card-text>Above Average Price: {{aboveAvgPrice}} Products</b-card-text>
              <b-button variant="primary"  class="box-rounding button-card">See Product</b-button>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    productPage () {
      this.$router.push({ name: 'Product' })
    }
  },
  computed: {
    dataProducts () {
      return this.$store.state.products
    },
    productsStock () {
      let totalStocks = 0
      for (let i = 0; i < this.dataProducts.length; i++) {
        totalStocks += this.dataProducts[i].stock
      }
      return totalStocks
    },
    readyStock () {
      let productReady = 0

      for (let i = 0; i < this.dataProducts.length; i++) {
        if (this.dataProducts[i].stock > 0) {
          productReady += 1
        }
      }
      return productReady
    },
    noStock () {
      let productNoReady = 0

      for (let i = 0; i < this.dataProducts.length; i++) {
        if (this.dataProducts[i].stock === 0) {
          productNoReady += 1
        }
      }
      return productNoReady
    },
    avgPrice () {
      let averagePrice = 0
      let totalPrice = 0
      for (let i = 0; i < this.dataProducts.length; i++) {
        totalPrice += this.dataProducts[i].price
      }

      averagePrice = (totalPrice / this.dataProducts.length).toFixed(2)
      return averagePrice
    },
    belowAvgPrice () {
      let belowProduct = 0

      for (let i = 0; i < this.dataProducts.length; i++) {
        if (this.dataProducts[i].price < this.avgPrice) {
          belowProduct += 1
        }
      }

      return belowProduct
    },
    aboveAvgPrice () {
      let aboveProduct = 0

      for (let i = 0; i < this.dataProducts.length; i++) {
        if (this.dataProducts[i].price >= this.avgPrice) {
          aboveProduct += 1
        }
      }

      return aboveProduct
    },
    email () {
      return localStorage.getItem('email')
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
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
