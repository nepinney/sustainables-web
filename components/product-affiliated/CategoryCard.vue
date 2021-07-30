<template>
  <div class='category-container flex justify-center items-end'>
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
  }
}
</script>

<style scoped>

@media (min-width: 1450px) {
  .category-container {
    border: solid 1px #707070;
    max-width: 16vw;
    max-height: 16vw;
    min-height: 16vw;
  }
}

@media (min-width: 950px) and (max-width: 1450px) {
  .category-container {
    border: solid 1px #707070;
    max-width: 16vw;
    max-height: 16vw;
    min-height: 210px;
    min-width: 210px;
  }
}

@media (max-width: 950px) {
  .category-container {
    border: solid 1px #707070;
    max-width: 16vw;
    max-height: 16vw;
    min-height: 182px;
    min-width: 182px;
  }
}

  .category-heading {
    font-family: "Roboto Condensed", sans-serif;
    color: #707070;
    font-weight: 400;
    /*margin-top: 25%;*/
  }
</style>
