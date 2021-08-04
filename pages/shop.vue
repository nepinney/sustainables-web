<template>
  <div class='w-full'>
    <p class='font-custom font-bold text-sm text-center pb-phone text-gray tracking-wider'>OUR FAVOURITES</p>

    <ProductCarousel :products='favouriteProducts' />
<!--    <FavouriteItems />-->

<!--    Categories -->
    <p class='font-custom font-bold text-sm text-center pb-phone text-gray tracking-wider'>CATEGORIES</p>

    <section class='w-full pb-phone pl-0 pr-0 md:pl-14 md:pr-14 lg:pl-20 lg:pr-20'>
      <div class='grid grid-cols-2 grid-auto-rows md:grid-cols-3 md:grid-rows-1 gap-y-10 md:gap-y-12'>
        <div v-for='category in categories' :key='category.title' class='flex justify-center'>
          <CategoryCard
            :svg-h-t-m-l='category.svg'
            :category-name='category.name'
            :apply-transformation='category.translateSVG'></CategoryCard>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
// import FavouriteItems from '../components/product-affiliated/FavouriteItems'
import CategoryCard from '../components/product-affiliated/CategoryCard'
import ProductCarousel from '../components/ProductCarousel'
export default {
  components: { ProductCarousel, CategoryCard },
  layout: 'Secondary',
  async asyncData({ $content, store }) {
    const products = await $content('products').fetch()
    const favouriteProducts = []
    await products.forEach(product => {
      if (product.tags.includes('favourite'))
        favouriteProducts.push(product)
    })
    // console.log('Favs:', favouriteProducts)
    const categories = await $content('categories')
      .sortBy('order', 'asc')
      .fetch()
    // eslint-disable-next-line nuxt/no-this-in-fetch-data
    store.commit('setProductList', await products)
    // console.log('In product.vue: ', await products)
    return {
      favouriteProducts,
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
  font-weight: 700;
}

</style>
