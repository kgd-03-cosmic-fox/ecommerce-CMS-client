<template>
  <div class="col-9">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Name</th>
          <th scope="col">Image Url</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <TableItem></TableItem>
        <TableItem></TableItem>
        <TableItem></TableItem>
        <TableItem></TableItem>
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
  }
}
</script>
