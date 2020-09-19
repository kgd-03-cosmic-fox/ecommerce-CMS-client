<template>
  <div class="row">
    <div class="card col-4" style="">
      <img class="card-img-top" src="" alt="Card image cap" />
    </div>
    <div class="col-8 container">
      <h1>{{ productToEdit.name }}</h1>
      <form @submit.prevent="initiateUpdateProductDetail">
        <table class="table">
          <thead>
            <th></th>
            <th>Current</th>
            <th>New</th>
          </thead>
          <tbody>
            <tr>
              <th>Item Name</th>
              <td>{{ productToEdit.name }}</td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  id="editname"
                  v-model="editproduct.name"
                />
              </td>
            </tr>
            <tr>
              <th>Image URL</th>
              <td>{{ productToEdit.image_url }}</td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  id="editURL"
                  v-model="editproduct.image_url"
                />
              </td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{{ productToEdit.price }}</td>
              <td>
                <input
                  type="number"
                  class="form-control"
                  id="editprice"
                  v-model="editproduct.price"
                />
              </td>
            </tr>
            <tr>
              <th>Stock</th>
              <td>{{ productToEdit.stock }}</td>
              <td>
                <input
                  type="number"
                  class="form-control"
                  id="editstock"
                  v-model="editproduct.stock"
                />
              </td>
            </tr>
            <tr>
              <td>
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="initiateProductDelete"
                >
                  Delete Item
                </button>
              </td>
              <td></td>
              <td>
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