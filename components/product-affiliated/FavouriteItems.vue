<template>
  <section class='w-full'>
      <h1 class='text-center pb-6'>OUR FAVOURITES</h1>

    <div class='grid grid-cols-6 items-center'>

      <div class='flex col-span-1 justify-start' @click='prevProduct()'>
        <svg class='ml-11 mr-11' viewBox="0 0 11 23" height='4rem' width='2rem'>
          <g id="arrowImage">
            <polyline class="arrow" points="10.77 0.54 0.23 10.91 10.77 21.46"/>
          </g>
        </svg>
      </div>

      <div class='flex col-span-4 justify-center'>
        <LargeItem />
      </div>

      <div class='flex col-span-1 justify-end' @click='nextProduct()'>
        <svg class='mr-11 ml-11' viewBox="0 0 11 23" height='4rem' width='2rem'>
          <g id="arrowImage">
            <polyline class="arrow" points="0.23 21.46 10.77 11.09 0.23 0.54"/>
          </g>
        </svg>
      </div>

    </div>
  </section>
</template>

<script>
import LargeItem from './LargeItem'
export default {
  name: 'FavouriteItems',
  components: { LargeItem },
  data() {
    return {
      activeProductNumber: 0
    }
  },
  computed: {
    getActiveProduct() {
      return this.$store.state.activeProduct
    }
  },
  methods: {
    nextProduct() {
      if (this.activeProductNumber === this.$store.getters.getFavourites.length - 1) {
        this.activeProductNumber = 0
      }
      else
        this.activeProductNumber++
      this.$store.commit('setActiveProduct', this.$store.getters.getFavourites[this.activeProductNumber])
    },
    prevProduct() {
      if (this.activeProductNumber === 0) {
        this.activeProductNumber = this.$store.getters.getFavourites.length - 1
        // console.log("length is: ", this.$store.getters.getFavourites.length)
      }
      else
        this.activeProductNumber--
      this.$store.commit('setActiveProduct', this.$store.getters.getFavourites[this.activeProductNumber])
    },
  }
}
</script>

<style scoped>

h1 {
  font-family: "Roboto Condensed", sans-serif;
  color: #707070;
  font-weight: 700;
}

.arrow {
  fill:none;
  stroke:#707070;
  stroke-linecap:round;
  stroke-linejoin:round;
  stroke-width:0.6px;
}

</style>
