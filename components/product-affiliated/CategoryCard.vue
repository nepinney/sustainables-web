<template>
  <div class='relative w-full'>
    <div class='card-container w-full flex justify-center'
         :class="{'active': getActiveCategory === categoryName}"
         @mouseover='hoverStyle()'
         @mouseleave='defaultStyle()'
         @click='activateCategory()'
    >
  <!--  h-full  -->
      <div class='flex w-full'>

        <img v-if='getActiveCategory === categoryName' :src='require(`~/assets/images/${svgActive}`)'>
        <img v-else-if='hovering === false && getActiveCategory !== categoryName' :src='require(`~/assets/images/${svg}`)'>
        <img v-else :src='require(`~/assets/images/${svgHover}`)'>
<!--        <img v-else='hovering === true && getActiveCategory !== categoryName' :src='require(`~/assets/images/${svgHover}`)'>-->
<!--        <img v-else :src='require(`~/assets/images/${svgActive}`)'>-->
  <!--      <div class='flex items-end h-1/2'>-->
  <!--        <div :style='imageStyle' v-html='svgHTML'></div>-->
  <!--      </div>-->

        <div class='text-wrapper absolute top-3/4 left-1/2'>
          <p
            class='font-custom font-extralight text-gray text-base text-center tracking-wider'
            :class="{'text-beige' : (hovering === true && getActiveCategory !== categoryName) || getActiveCategory === categoryName }"
          >
            {{ categoryName }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: {
    svg: String(),
    svgHover: String(),
    svgActive: String(),
    categoryName: String(),
  },
  data() {
    return {
      hovering: false
    }
  },
  computed: {
    getActiveCategory() {
      return this.$store.state.activeCategory;
    }
  },
  methods: {
    hoverStyle() {
      this.hovering = true
    },
    defaultStyle() {
      this.hovering = false
    },
    activateCategory() {
      this.hovering = false
      this.$store.commit('setActiveCategory', this.categoryName)
    }
  }
}
</script>

<style scoped>

.category-container {
  max-width: 30vw;
  max-height: 30vw;
  min-height: 110px;
  min-width: 110px;
}

/*@media (min-width: 400px) {*/
/*  .category-container {*/
/*    max-width: 30vw;*/
/*    max-height: 30vw;*/
/*    min-height: 140px;*/
/*    min-width: 140px;*/
/*  }*/
/*}*/

/*@media (min-width: 500px) {*/
/*  .category-container {*/
/*    max-width: 16vw;*/
/*    max-height: 16vw;*/
/*    min-height: 180px;*/
/*    min-width: 180px;*/
/*  }*/
/*}*/


/*@media (min-width: 595px) {*/
/*  .category-container {*/
/*    max-width: 16vw;*/
/*    max-height: 16vw;*/
/*    min-height: 200px;*/
/*    min-width: 200px;*/
/*  }*/
/*}*/
/*@media (min-width: 760px) {*/
/*  .category-container {*/
/*    max-width: 16vw;*/
/*    max-height: 16vw;*/
/*    min-height: 185px;*/
/*    min-width: 185px;*/
/*  }*/
/*}*/

/*@media (min-width: 950px) {*/
/*  .category-container {*/
/*    max-width: 16vw;*/
/*    max-height: 16vw;*/
/*    min-height: 210px;*/
/*    min-width: 210px;*/
/*  }*/
/*}*/

/*@media (min-width: 1450px) {*/
/*  .category-container {*/
/*    max-width: 16vw;*/
/*    max-height: 16vw;*/
/*    min-height: 230px;*/
/*    min-width: 210px;*/
/*  }*/
/*}*/

/*.category-heading {*/
/*  font-family: "Roboto Condensed", sans-serif;*/
/*  !*color: #707070;*!*/
/*  font-weight: 400;*/
/*}*/

.card-container {
  opacity: 100;
  border: solid 1px #707070;
  background-color: transparent;
  color: #707070;
  border-radius: 5%;
  z-index: 10;
  /*transition: all 3s;*/
}

.card-container:hover{
  /*border-color: #47745b;*/
  background-color: #47745B;
  cursor: pointer;
}

.card-container.active{
  cursor: default;
  background-color: #3a5d4a;
  /*position: absolute;*/
  /*left: 110px;*/
  /*opacity: 0;*/
  /*transform: translate(50%, 100%);*/
  /*z-index: -1;*/
}

img {
  /*border: solid 1px #707070;*/
  border-radius: 5%;
}

.text-wrapper {
  transform: translate(-50%, 0);
}


/*.card:active {*/
/*  border-color: #47745b;*/
/*  background-color: #47745b;*/
/*  color: #F6F6F6;*/
/*  stroke: #f6f6f6;*/
/*}*/

</style>
