<template>
  <div class="row">
    <div class="card col-4" style="">
      <img
        class="card-img-top"
        v-bind:src="productToEdit.image_url"
        alt="Card image cap"
      />
    </div>
    <div class="col-8 container">
      <h1>{{ productToEdit.name }}</h1>
      <form @submit.prevent="initiateUpdateProductDetail">
        <table class="table" id="edit-detail-table">
          <thead>
            <tr class="row">
              <th class="col-2"></th>
              <th class="col-5" style="word-wrap: break-word">Current</th>
              <th class="col-4">New</th>
            </tr>
          </thead>
          <tbody>
            <tr class="row">
              <th class="col-2">Item Name</th>
              <td class="col-5" style="word-wrap: break-word">
                {{ productToEdit.name }}
              </td>
              <td class="col-4">
                <input
                  type="text"
                  class="form-control"
                  id="editname"
                  v-model="editproduct.name"
                />
              </td>
            </tr>
            <tr class="row">
              <th class="col-2">Image URL</th>
              <td class="col-5" style="word-wrap: break-word">
                {{ productToEdit.image_url }}
              </td>
              <td class="col-4">
                <input
                  type="text"
                  class="form-control"
                  id="editURL"
                  v-model="editproduct.image_url"
                />
              </td>
            </tr>
            <tr class="row">
              <th class="col-2">Price</th>
              <td class="col-5" style="word-wrap: break-word">
                {{ productToEdit.price }}
              </td>
              <td class="col-4">
                <input
                  type="number"
                  class="form-control"
                  id="editprice"
                  v-model="editproduct.price"
                />
              </td>
            </tr>
            <tr class="row">
              <th class="col-2">Stock</th>
              <td class="col-5" style="word-wrap: break-word">
                {{ productToEdit.stock }}
              </td>
              <td class="col-4">
                <input
                  type="number"
                  class="form-control"
                  id="editstock"
                  v-model="editproduct.stock"
                />
              </td>
            </tr>
            <tr class="row">
              <td class="col-2">
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="initiateProductDelete"
                >
                  Delete Item
                </button>
              </td>
              <td class="col-5" style="word-wrap: break-word"></td>
              <td class="col-4">
                <button type="submit" class="btn btn-success">
                  Edit Product Info
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailComponent",
  data() {
    return {
      editproduct: {
        name: "",
        price: "",
        stock: "",
        image_url: "",
      },
    };
  },
  methods: {
    initiateUpdateProductDetail() {
      this.$store.dispatch("editProductOnDb", {
        id: this.productToEdit.id,
        name: this.editproduct.name,
        price: this.editproduct.price,
        stock: this.editproduct.stock,
        image_url: this.editproduct.image_url,
      });
    },
    initiateProductDelete() {
      this.$store.dispatch("deleteProductOnDb", this.productToEdit.id);
    },
  },
  computed: {},
  props: ["productToEdit"],
};
</script>

<style>
</style>