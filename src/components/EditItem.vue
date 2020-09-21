<template>
  <div class="col-9">
    <div class="container">
      <h2>Edit Your Item ({{ editedItem.name }}) Here</h2>
      <form class="form-horizontal">
        <div class="form-group">
          <label class="control-label col-sm-2" for="email">Name:</label>
          <div class="col-sm-10">
            <input v-model="item.name" type="text" class="form-control" id="item" placeholder="Update Item Name" name="name" value="'this.item.name'">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="pwd">Price:</label>
          <div class="col-sm-10">
            <input v-model="item.price" type="text" class="form-control" id="pwd" placeholder="Update Price" name="price" value="'this.item.price'">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="pwd">Stock:</label>
          <div class="col-sm-10">
            <input v-model="item.stock" type="text" class="form-control" id="pwd" placeholder="Update Stock" name="stock" value="'this.item.stock'">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-primary" @click.prevent="editMyItem(editedItem.id)">Edit Item</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import instanceAPI from '../api/instanceAPI.js'
export default {
  name: 'EditItem',
  data () {
    return {
      item: {
        name: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    editMyItem (id) {
      this.$store.dispatch('editItem', { id: id, item: this.item })
      this.$router.push({ path: '/products' })
    }
  },
  created () {
    this.$store.dispatch('fetchDetailItem', { id: this.$route.params.id })
    instanceAPI({
      method: 'get',
      url: `https://ecommerge-cms.herokuapp.com/items/${this.$route.params.id}`,
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(({ data }) => {
        this.item.name = data.name
        this.item.price = data.price
        this.item.stock = data.stock
      })
      .catch(err => {
        console.log(err)
      })
  },
  computed: {
    editedItem () {
      return this.$store.state.detail
    }
  }
}
</script>
