<template>
  <div class='w-full'>
    <div class='2xl:grid 2xl:grid-cols-7 pb-phone lg:pb-laptop'>
      <div class='2xl:col-span-4 flex-col'>
        <p class='font-custom font-bold text-sm text-center pb-phone lg:pb-laptop text-gray tracking-wider'>OUR FAVOURITES</p>

        <ProductCarousel :products='getProducts' />
      </div>


    <div class='2xl:col-span-3 flex-col'>
      <p class='font-custom font-bold text-sm text-center pb-phone lg:pb-laptop text-gray tracking-wider'>CATEGORIES</p>

      <!--    Categories pl-0 pr-0 md:pl-14 md:pr-14 lg:pl-20 lg:pr-20 -->
      <div class='w-11/12 m-auto'>
        <!--     md:grid-cols-3 md:grid-rows-1 gap-y-10 md:gap-y-12 -->
        <div class='cards grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-2 grid-auto-rows gap-y-4 gap-x-4'>
          <div v-for='category in categories' :key='category.title' class='flex'>
            <CategoryCard
              :svg='category.svgFile'
              :svg-hover='category.svgHoverFile'
              :svg-active='category.svgActiveFile'
              :category-name='category.name'
              :apply-transformation='category.translateSVG'></CategoryCard>
          </div>
        </div>
      </div>
    </div>
  </div>

    <p
      v-if='getActiveCategoryUpperCase !== null'
      class='font-custom font-bold text-sm text-center pb-phone lg:pb-laptop text-gray tracking-wider'
    >
      {{ getActiveCategoryUpperCase }}
    </p>

    <ProductList :products='getActiveCategoryProducts' />
  </div>
</template>

<script>
import CategoryCard from '../components/product-affiliated/CategoryCard'
import ProductCarousel from '../components/ProductCarousel'
import ProductList from '../components/ProductList'
export default {
  components: { ProductList, ProductCarousel, CategoryCard },
  layout: 'Secondary',
  async asyncData({ $content, store }) {
    const products = await $content('products').fetch()

    const favouriteProducts = []
    await products.forEach(product => {
      if (product.tags.includes('favourite'))
        favouriteProducts.push(product)
    })
    const categories = await $content('categories')
      .sortBy('order', 'asc')
      .fetch()
    store.commit('setProductList', await products)
    return {
      favouriteProducts,
      categories,
      products
    }
  },
  head() {
    return {
      title: 'Sustainables - Shop',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  },
  computed: {
    getProducts() {
      return this.$store.getters.getFavourites
    },
    getActiveCategoryUpperCase() {
      if (this.$store.state.activeCategory === null)
        return null
      else
        return this.$store.state.activeCategory.toUpperCase()
    },
    getActiveCategoryProducts() {
      if (this.getActiveCategoryUpperCase === null)
          return null
      else
        return this.$store.getters.getCategoryProducts
    },
  },
  mounted() {
    if (this.$store.state.activeProduct === 0) {
      if (this.$store.getters.getFavourites.length > 0) {
        this.$store.commit('setActiveProduct', (this.$store.getters.getFavourites)[0])

      }
    }
  },
}
</script>

<style scoped>

h1 {
  font-weight: 700;
}

@media (min-width: 1536px) {
  .cards {
    margin-top: calc(2rem + 12px)
  }
}


</style>
