<template>
  <favProduct>
    <h1>{{ favProduct.title }}</h1>
    <p>{{ favProduct.description }}</p>
<!--    <img :src='require(`~/assets/images/${favProduct.img}`)' :alt='favProduct.alt' />-->
    <nuxt-content :document='favProduct' />
  </favProduct>
</template>

<script>
// This class is responsible for getting all the products from the /content/products/favourites
export default {
  async asyncData({ $content, params }) {
    // fetch our product here
    const favProduct = await $content('products', params.slug).fetch()

    return { favProduct }
  }
}
</script>

<style scoped>

</style>
