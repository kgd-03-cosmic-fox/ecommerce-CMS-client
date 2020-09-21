<template>
  <tr>
    <th scope="row">{{ item.name }}</th>
    <td>{{ item.stock }}</td>
    <td>{{ item.price }}</td>
    <td><button type="button" class="btn btn-warning" @click='loadItem(item.id)'>Restock/Edit</button></td>
  </tr>
</template>
<script>
export default {
  props: ['item'],
  name: 'TableItem',
  methods: {
    loadItem (id) {
      console.log('kepanggil')
      this.$store.dispatch('fetchDetailItem', { id: id })
      this.$router.push({ path: `/edit/${id}` })
    }
  }
}
</script>
