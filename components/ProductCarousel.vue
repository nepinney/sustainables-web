<template>
  <div class='carousel-wrapper'>

    <div class='carousel_markers flex flex-row justify-center items-center pb-phone'>
      <div
        v-for='i in products.length'
        :key='i'
        class='marker'
        :class="{'active': i === active+1}"
        @click='next(i-1)'
      >
      </div>
    </div>

    <div class='carousel flex flex-col pb-phone'>

      <div
        v-for='(product, i) in products'
        :key='product.title'
        class='carousel_item flex flex-col'
        :class="{'initial active': i === active}"
      >
        <img class='carousel_photo' :src='require(`~/assets/images/${product.img}`)' :alt='product.alt'>

        <div class='product_information '>
          <div class='grid grid-cols-2'>
            <div class='inline justify-start'>
              <h1>{{ product.title }}</h1>
              <p>{{ product.description }}</p>
            </div>
            <div>
              <h1 class='text-right'>{{ product.price }}</h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCarousel',
  props: {
    products: Array,
  },
  data() {
    return {
      active: 0
    }
  },
  methods: {
    next(index) {
      this.active = index
      console.log('Hi', index)
    },
    swiped() {
      console.log("I was sooo swiped bitch")
    }
  },
}
</script>

<style scoped>
  .carousel-wrapper {
    overflow: hidden;
    width: 98%;
    margin: auto;
  }
  .carousel-wrapper * {
    box-sizing: border-box;
  }
  .marker {
    border: solid 1px #707070;
    background-color: transparent;
    border-radius: 100%;
    width: 12px;
    height: 12px;
    margin: 3px;
    cursor: pointer;
    transition: background-color .5s;
  }
  .marker.active {
    background-color: #47745B;
  }
  .carousel {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
  .carousel_item {
    border: solid 1px black;
    opacity: 0;
    position: absolute;
    top:0;
    width: 100%;
    margin: auto;
    z-index: 100;
    transition: transform .5s, opacity .5s, z-index .5s;
  }
  .carousel_item.initial {
    opacity: 1;
    position: relative;
    z-index: 900;
  }
  .carousel__photo.prev,
  .carousel__photo.next {
    z-index: 800;
  }
  /* Translate previous item to the left */
  .carousel__photo.prev {
    transform: translateX(-100%);
  }
  /* Translate next item to the right */
  .carousel__photo.next {
    transform: translateX(100%);
  }

</style>
