<template>
  <div>
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#addProductModal"
    >Add Product</button>

    <div
      class="modal fade"
      id="addProductModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addProductModal"
      aria-hidden="true"
    >
      <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addProductModal">Add New Product</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="addNewProductToDatabase()">
              <div class="modal-body">
                <label for="newprod-name" class="label">
                  <h4>Product Name</h4>
                </label>
                <input type="text" class="form-control" id="newprod-name" v-model="newProd.name" />
                <label for="newprod-name" class="label">
                  <h4>Image URL</h4>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="newprod-name"
                  v-model="newProd.image_url"
                />
                <label for="newprod-name" class="label">
                  <h4>Price</h4>
                </label>
                <input type="text" class="form-control" id="newprod-name" v-model="newProd.price" />
                <label for="newprod-name" class="label">
                  <h4>Stock</h4>
                </label>
                <input type="text" class="form-control" id="newprod-name" v-model="newProd.stock" />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cmsAPI from "../api/cms-api.js";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      newProd: {
        name: "",
        image_url: "",
        price: "",
        stock: "",
      },
    };
  },
  methods: {
    addNewProductToDatabase() {
      cmsAPI({
        method: "POST",
        url: "/products",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
        data: {
          name: this.newProd.name,
          image_url: this.newProd.image_url,
          price: this.newProd.price,
          stock: this.newProd.stock,
        },
      })
        .then(() => {
          this.$dispatch("fetchProductDatas");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.newProd.name = "";
          this.newProd.image_url = "";
          this.newProd.price = "";
          this.newProd.stock = "";
        });
    },
  },
};
</script>
