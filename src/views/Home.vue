<template>
  <div class="home">
    <h1 class="welcome-message">Welcome, <strong>{{email}}</strong></h1>
    <div class="container-fluid align-content-center">
      <div class="row">
        <div class="container col-9">
          <div class="row">
            <NoStockCard
            v-bind:noStock="noStock"
            ></NoStockCard>
            <AllStockCard
            v-bind:dataProducts="dataProducts"
            v-bind:productsStock="productsStock"
            ></AllStockCard>
            <ReadyStockCard
            v-bind:readyStock="readyStock"
            ></ReadyStockCard>
          </div>
        </div>
        <div class="container col-9 mt-5">
          <div class="row">
            <LessAverageCard
            v-bind:belowAvgPrice="belowAvgPrice"
            ></LessAverageCard>
            <AveragePriceCard
            v-bind:avgPrice="avgPrice"
            ></AveragePriceCard>
           <AboveAverageCard
           v-bind:aboveAvgPrice="aboveAvgPrice"
           ></AboveAverageCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NoStockCard from '../components/noStockCard'
import AllStockCard from '../components/allProduct'
import ReadyStockCard from '../components/readyProduct'
import LessAverageCard from '../components/lessAverageProduct'
import AveragePriceCard from '../components/averagePriceProduct'
import AboveAverageCard from '../components/aboveAverageProduct'

export default {
  name: 'Home',
  components: {
    NoStockCard,
    AllStockCard,
    ReadyStockCard,
    LessAverageCard,
    AveragePriceCard,
    AboveAverageCard
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
    this.$store.commit('SET_VALIDATE_OPERATOR', { validate: '', operator: '' })
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
