export const state = () => ({
  allProducts: [],
  activeProduct: 0,
})

export const mutations = {
  setProductList(state, products) {
    state.allProducts = products
  },
  setActiveProduct(state, product) {
    // if (product === null) {
    //   console.log('GETTING FAVS:', this.$store.getters.getFavourites)
    //   state.activeProduct = (this.$store.getters.getFavourites)[0]
    // }
    // else
    state.activeProduct = product
  },
}

export const actions = {
  async fetchAllProducts(context, $content) {
    const products = await $content('products').fetch()
    context.commit('setProductList', await products)
    console.log(await products)
    // if (products.length > 0)
    //   context.commit('setActiveProduct', products[0])
  }
}

export const getters = {
  getFavourites(state) {
    const favourites = []
    state.allProducts.forEach(product => {
      if (product.tags.includes('favourite'))
        favourites.push(product)
    })
    return favourites
  }
}
