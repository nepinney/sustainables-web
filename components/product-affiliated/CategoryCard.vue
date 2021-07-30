<template>
  <div class='card category-container flex justify-center items-end'>
    <div class='flex-col w-1/2 h-full'>

      <div class='flex items-end h-1/2'>
        <div :style='imageStyle' v-html='svgHTML'></div>
      </div>

      <div class='flex justify-center items-center h-1/2'>
        <h1 class='category-heading text-center'>{{ categoryName }}</h1>
      </div>

    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'CategoryCard',
  props: {
    svgHTML: String(),
    categoryName: String(),
    applyTransformation: Boolean(false),
  },
  computed: {
    imageStyle() {
      return `transform: ${this.applyTransformation ? "translate(0, 25%)" : "none"}`
    }
  },
  methods: {
    applyOtherStyles() {
      const iconSelector = this.categoryName.toLowerCase()
      console.log(iconSelector)
      $( iconSelector ).css('stroke', '#F6F6F6')
    }
  }
}
</script>

<style scoped>

.category-container {
  border: solid 1px #707070;
  max-width: 30vw;
  max-height: 30vw;
  min-height: 30vw;
}

@media (min-width: 500px) {
  .category-container {
    border: solid 1px red;
    max-width: 25vw;
    max-height: 25vw;
    min-height: 25vw;
  }
}

@media (min-width: 950px) {
  .category-container {
    border: solid 1px greenyellow;
    max-width: 16vw;
    max-height: 16vw;
    min-height: 210px;
    min-width: 210px;
  }
}

@media (min-width: 1450px) {
  .category-container {
    border: solid 1px #707070;
    max-width: 16vw;
    max-height: 16vw;
    min-height: 230px;
    min-width: 210px;
  }
}



.category-heading {
  font-family: "Roboto Condensed", sans-serif;
  /*color: #707070;*/
  font-weight: 400;
}

.card {
  background-color: transparent;
  color: #707070;
  stroke: #47745b;
}

.card:hover {
  border-color: #47745b;
  background-color: #47745b;
  color: #F6F6F6;
  stroke: #f6f6f6;
  cursor: pointer;
}

.card:active {
  border-color: #47745b;
  background-color: #47745b;
  color: #F6F6F6;
  stroke: #f6f6f6;
}

</style>
