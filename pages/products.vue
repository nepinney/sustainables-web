<template>
  <div class='w-full'>
    <FavouriteItems />

<!--    Categories -->
    <section class='w-full pl-0 pr-0 md:pl-14 md:pr-14 lg:pl-20 lg:pr-20'>
      <h1 class='text-center pt-10 pb-10'>CATEGORIES</h1>
      <div class='pl-6 pr-6 md:pl-12 md:pr-12 md:p-0 grid grid-cols-2 grid-auto-rows md:grid-cols-3 md:grid-rows-1 gap-y-10 md:gap-y-12'>
<!--      <div class='grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 md:flex-row md:justify-evenly'>-->
        <div v-for='category in categories' :key='category.title' class='flex justify-center'>
          <CategoryCard
            :svg-h-t-m-l='category.svg'
            :category-name='category.name'
            :apply-transformation='category.translateSVG'></CategoryCard>
        </div>


<!--        <div class='flex justify-center'><CategoryCard :svg-h-t-m-l="getGlassesSVG" category-name='Accessories'></CategoryCard></div>-->
<!--        <div class='flex justify-center'><CategoryCard :svg-h-t-m-l="getShoeSVG" apply-transformation='true' category-name='Shoes'></CategoryCard></div>-->
<!--        <div class='flex justify-center'><CategoryCard :svg-h-t-m-l="getShirtSVG" apply-transformation='true' category-name='Clothes'></CategoryCard></div>-->
      </div>
    </section>
  </div>

</template>

<script>
import FavouriteItems from '../components/product-affiliated/FavouriteItems'
import CategoryCard from '../components/product-affiliated/CategoryCard'
export default {
  components: { CategoryCard, FavouriteItems },
  layout: 'Secondary',
  async asyncData({ $content, store }) {
    const products = await $content('products').fetch()
    const categories = await $content('categories')
      .sortBy('order', 'asc')
      .fetch()
    // eslint-disable-next-line nuxt/no-this-in-fetch-data
    store.commit('setProductList', await products)
    // console.log('In product.vue: ', await products)
    return {
      categories
    }
  },
  computed: {
    getProducts() {
      return this.$store.getters.getFavourites()
    }
  },
  mounted() {
    if (this.$store.state.activeProduct === 0) {
      if (this.$store.getters.getFavourites.length > 0) {
        this.$store.commit('setActiveProduct', (this.$store.getters.getFavourites)[0])

      }
      // console.log('Favourites: ', this.$store.getters.getFavourites)
      // console.log('Active: ', this.$store.state.activeProduct.img)
    }
  }
}
</script>

<style scoped>

h1 {
  font-family: "Roboto Condensed", sans-serif;
  color: #707070;
  font-weight: 700;
}

</style>
