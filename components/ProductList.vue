<template>
  <div class='list_wrapper grid grid-cols-1 lg:grid-cols-2 pb-phone lg:pb-laptop lg:pr-phone lg:pl-phone lg:gap-6'>
    <div v-for='product in products' :key='product.title' class='pb-phone'>
      <Product :product='product' />
    </div>
  </div>

</template>

<script>
import Product from './Product'
export default {
  name: 'ProductList',
  components: { Product },
  props: {
    products: Array
  }
}
</script>

<style scoped>

@media (max-width: 1024px) {
  .list_wrapper {
    padding-left: calc((100vw/12)/2);
    padding-right: calc((100vw/12)/2);
  }
}

</style>
