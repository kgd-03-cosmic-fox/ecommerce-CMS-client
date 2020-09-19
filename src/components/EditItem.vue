<template>
  <div class="col-9">
    <div class="container">
      <h2>Edit Your Item Here</h2>
      <form class="form-horizontal">
        <div class="form-group">
          <label class="control-label col-sm-2" for="email">Name:</label>
          <div class="col-sm-10">
            <input v-model="item.name" type="text" class="form-control" id="item" placeholder="Update Item Name" name="name">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="image_url">Image Url:</label>
          <div class="col-sm-10">
            <input v-model="item.image_url" type="text" class="form-control" id="item" placeholder="Update Item Name" name="image_url">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="pwd">Price:</label>
          <div class="col-sm-10">
            <input v-model="item.price" type="text" class="form-control" id="pwd" placeholder="Update Price" name="price">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="pwd">Stock:</label>
          <div class="col-sm-10">
            <input v-model="item.stock" type="text" class="form-control" id="pwd" placeholder="Update Stock" name="stock">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-primary" @click="editMyItem(this.$route.params.id)">Edit Item</button>
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
        id: this.$route.params.id,
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    editMyItem (id) {
      console.log('Kepanggil')
      this.$store.dispatch('editItem', this.item)
      this.router.push({ path: '/products' })
    }
  }
}
</script>
