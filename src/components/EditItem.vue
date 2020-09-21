<template>
  <div class="col-9">
    <div class="container">
      {{ editedItem }}
      <h2>Edit Your Item Here ({{ editedItem.name }})</h2>
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
      console.log(this.$route.params.id)
      this.$store.dispatch('editItem', { id: id, item: this.item })
      this.$router.push({ path: '/products' })
    }
  },
  created () {
    this.$store.dispatch('fetchDetailItem', { id: this.$route.params.id })
    this.item.name = this.editedItem.name
    this.item.price = this.editedItem.price
    this.item.stock = this.editedItem.stock
  },
  computed: {
    editedItem () {
      return this.$store.state.detail
    }
  }
}
</script>
