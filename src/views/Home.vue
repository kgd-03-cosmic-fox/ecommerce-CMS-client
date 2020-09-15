<template>
  <div class="home">
    <div class="container-fluid align-content-center">
      <div class="row">
        <div class="container col-9">
          <div class="row">
            <b-card
              title="No Stock"
              class="col-3 mr-3 ml-auto shadow p-3 mb-5 bg-white rounded"
            >
              <b-card-text>Product : ProductValue (with stock = 0)</b-card-text>
              <b-button href="#" variant="primary">Restock Product</b-button>
            </b-card>

            <b-card
              title="All Stock"
              class="col-3 mr-3 shadow p-3 mb-5 bg-white rounded"
              style="title.background-color:red"
            >
                <b-card-text>Product : AllProductValue | All Stock : StockValue</b-card-text>
              <b-button href="#" variant="primary">See All Product</b-button>
            </b-card>

            <b-card
              title="Ready Stock"
              class="col-3 mr-auto shadow p-3 mb-5 bg-white rounded"
            >
              <b-card-text>Product : ProductValue (with stock > 0)</b-card-text>
              <b-button href="#" variant="primary">See Product</b-button>
            </b-card>

          </div>
        </div>

        <div class="container col-9 mt-3">
          <div class="row">
            <b-card
              title="Less Than Average"
              class="col-3 mr-3 ml-auto shadow p-3 mb-5 bg-white rounded"
            >
              <b-card-text>Less Than Average : Value Products</b-card-text>
              <b-button href="#" variant="primary">See Product</b-button>
            </b-card>

            <b-card
              title="Average Price"
              class="col-3 mr-3 shadow p-3 mb-5 bg-white rounded"
              style="title.background-color:red"
            >
              <b-card-text>Average Price : AverageValue</b-card-text>
            </b-card>

            <b-card
              title="Greater Than Average"
              class="col-3 mr-auto shadow p-3 mb-5 bg-white rounded"
            >
              <b-card-text>Greater Than Average : Value Products</b-card-text>
              <b-button href="#" variant="primary">See Product</b-button>
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
  name: 'Home'
}
</script>
