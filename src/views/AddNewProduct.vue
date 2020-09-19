<template>
  <div>
    <h1>TESTING</h1>
    <SysMsgSpace></SysMsgSpace>
    <form @submit.prevent="addNewProductToDatabase()" class="container">
      <div class="modal-body">
        <label for="newprod-name" class="label">
          <h4>Product Name</h4>
        </label>
        <input
          type="text"
          class="form-control"
          id="newprod-name"
          v-model="newProd.name"
        />
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
        <input
          type="text"
          class="form-control"
          id="newprod-name"
          v-model="newProd.price"
        />
        <label for="newprod-name" class="label">
          <h4>Stock</h4>
        </label>
        <input
          type="text"
          class="form-control"
          id="newprod-name"
          v-model="newProd.stock"
        />
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-dismiss="modal"
          @click="backToDashboard"
        >
          Cancel
        </button>
        <button type="submit" class="btn btn-primary">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import cmsAPI from "../api/cms-api.js";
import SysMsgSpace from "../components/SysMsgSpace";
export default {
  name: "Home",
  components: { SysMsgSpace },
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
    backToDashboard() {
      this.$store.commit("updateCurrentEdit", null);
      this.$router.push({ name: "Dashboard" });
    },
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
          this.$store.dispatch("fetchProductDatas");
          this.$store.commit("updateCurrentEdit", null);
          this.$store.commit("updateErrorMsg", null);
          this.$router.push({ name: "Dashboard" });
        })
        .catch((err) => {
          this.$store.commit("updateErrorMsg", `${err}: Invalid Input`);
        })
        .finally(() => {
          this.newProd.name = "";
          this.newProd.image_url = "";
          this.newProd.price = "";
          this.newProd.stock = "";
        });
    },
    created() {
      if (!localStorage.getItem("access_token")) {
        this.$router.push({ name: "Login" });
      }
    },
  },
};
</script>
