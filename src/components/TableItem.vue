<template>
  <tr>
    <th scope="row">{{ item.name }}</th>
    <td>{{ item.stock }}</td>
    <td>{{ item.price }}</td>
    <td><router-link :to="`/edit/${item.id}`"><button type="button" class="btn btn-warning">Restock/Edit</button></router-link></td>
  </tr>
</template>
<script>
export default {
  props: ['item'],
  name: 'TableItem'
}
</script>
