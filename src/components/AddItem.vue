<template>
<div class="col-9">
  <div class="container">
  <h2>Add Your Item Here</h2>
  <form class="form-horizontal">
    <div class="form-group">
      <label class="control-label col-sm-2" for="email">Name:</label>
      <div class="col-sm-10">
        <input v-model="item.name" type="text" class="form-control" id="item" placeholder="Enter Item Name" name="name">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="pwd">Image Url:</label>
      <div class="col-sm-10">
        <input v-model="item.image_url" type="text" class="form-control" id="pwd" placeholder="Enter Url" name="image_url">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="pwd">Price:</label>
      <div class="col-sm-10">
        <input v-model="item.price" type="text" class="form-control" id="pwd" placeholder="Enter Price" name="image_url">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="pwd">Stock:</label>
      <div class="col-sm-10">
        <input v-model="item.stock" type="text" class="form-control" id="pwd" placeholder="Enter Stock" name="image_url">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary" @click="addItem">Add Item</button>
      </div>
    </div>
  </form>
  </div>
</div>
</template>
<script>
export default {
  name: 'AddItem',
  data () {
    return {
      item: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    addItem () {
      this.$store.dispatch('addItems', this.item)
      this.item.name = ''
      this.item.image_url = ''
      this.item.price = ''
      this.item.stock = ''
      this.$router.push({ path: '/products' })
    }
  }
}
</script>
