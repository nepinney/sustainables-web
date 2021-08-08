<template>
  <div class='carousel-wrapper'>

    <div class='flex flex-row justify-center items-center pb-phone'>
      <div
        v-for='i in products.length'
        :key='i'
        class='marker'
        :class="{'active': i === active+1}"
        @click='goto(i-1)'
      >
      </div>
    </div>

    <div class='carousel flex flex-col pb-phone'>

      <div
        v-for='(product, i) in products'
        :key='product.title'
        class='carousel_item flex flex-col'
        :class="{'active': i === active, 'prev': i === previousIndex, 'next': i === nextIndex}"
      >
        <img class='carousel_photo' :src='require(`~/assets/images/${product.img}`)' :alt='product.alt'>

        <div class='product_information'>
          <div class='grid grid-cols-2'>
            <div class='inline justify-start'>
              <h1 class='font-custom font-extrabold text-gray text-lg'>{{ product.title }}</h1>
              <p class='font-custom text-gray text-base'>{{ product.description }}</p>
            </div>
            <div class='justify-end'>
              <h1 class='font-custom text-right text-lg text-gray'>{{ product.price }}</h1>
              <Button>BUY NOW</Button>
            </div>
          </div>
        </div>
      </div>

      <div class='arrow_button--prev' @click='previous()'></div>
      <div class='arrow_button--next' @click='next()'></div>

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
      active: 0,
      previousIndex: this.products.length-1,
      nextIndex: 1,
    }
  },
  methods: {
    next() {
      this.active = this.nextIndex
      this.previousIndex = this.getPrevious()
      this.nextIndex = this.getNext()
    },
    previous() {
      this.active = this.previousIndex
      this.previousIndex = this.getPrevious()
      this.nextIndex = this.getNext()
    },
    getPrevious() {
      const firstIndex = 0
      if (this.active === firstIndex)
        return this.products.length - 1
      else
        return this.active - 1
    },
    getNext() {
      const lastIndex = this.products.length - 1
      if (this.active === lastIndex)
        return 0
      else
        return this.active + 1
    },
    goto(index) {
      this.active = index
      this.previousIndex = this.getPrevious()
      this.nextIndex = this.getNext()
    },
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
    /*border: 1px solid red;*/
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
  .carousel_item {
    /*border: solid 1px black;*/
    opacity: 0;
    position: absolute;
    padding: 0rem 4rem;
    top:0;
    width: 100%;
    margin: auto;
    z-index: 100;
    transition: transform .5s, opacity .5s, z-index .5s;
  }
  .carousel_item.initial,
  .carousel_item.active {
    opacity: 1;
    position: relative;
    z-index: 900;
  }
  .carousel_item.prev,
  .carousel_item.next {
    z-index: 800;
  }
  /* Translate previous item to the left */
  .carousel_item.prev {
    transform: translateX(-100%);
  }
  /* Translate next item to the right */
  .carousel_item.next {
    transform: translateX(100%);
  }

  .arrow_button--prev,
  .arrow_button--next{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    /*border:1px solid black;*/
    width: 1.5rem;
    height: 3rem;
    z-index: 1000;
  }

  .arrow_button--prev {
    background-image: url("../assets/images/icons/arrows/light-left.svg");
    background-repeat: no-repeat;
    left: 0;
  }
  .arrow_button--prev:hover {
    background-image: url("../assets/images/icons/arrows/heavy-left.svg");
  }
  .arrow_button--next {
    background-image: url("../assets/images/icons/arrows/light-right.svg");
    background-repeat: no-repeat;
    right: 0;
  }
  .arrow_button--next:hover {
    background-image: url("../assets/images/icons/arrows/heavy-right.svg");
  }
  button {
    border: solid 1px #707070;
    background-color: #47745B;
    width: 10rem;
    color: white;
    padding: 0.5rem;
    border-radius: 4rem;
  }

</style>
