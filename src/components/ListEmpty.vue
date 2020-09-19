<template>
  <div class="col-9">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Stock</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <TableItem v-for="item in filteredItem"
        :key="item.id"
        :item="item"
        ></TableItem>
      </tbody>
    </table>
  </div>
</template>
<script>
import TableItem from './TableItem.vue'
export default {
  name: 'ListOfEmpty',
  components: {
    TableItem
  },
  computed: {
    filteredItem () {
      const filteredItem = this.$store.state.items.filter(item => item.stock < 100)
      return filteredItem
    }
  }
}
</script>
