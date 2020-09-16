<template>
<tr>
<th scope="row"><img v-bind:src="product.image_url" alt="desk"></th>
<td>{{product.name}}</td>
<td>{{product.price}}</td>
<td>{{product.stock}}</td>
<td>
<img class="bi" src="../assets/pencil.png" alt="pencil">
|
<img class="bi" src="../assets/trashcan.png" alt="trash">
</td>
</tr>
</template>

<script>
export default {
  name: 'Product',
  props: ['product']
}
</script>

<style>

</style>
