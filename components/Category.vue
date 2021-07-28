<template>
  <div class='category-container flex justify-center items-end'>
    <div class='flex-col w-1/2 h-full'>

      <div class='flex items-end h-1/2'>
        <div v-html='svgHTML'></div>
      </div>

      <div class='flex justify-center items-center h-full'>
        <h1 class='category-heading text-center'>{{ categoryName }}</h1>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
    svgHTML: String(),
    categoryName: String(),
  }
}
</script>

<style scoped>
  .category-container {
    border: solid 1px #707070;
    max-width: 16vw;
    max-height: 16vw;
    min-height: 16vw;
  }

  .category-heading {
    font-family: "Roboto Condensed", sans-serif;
    color: #707070;
    font-weight: 400;
    /*margin-top: 25%;*/
  }
</style>
