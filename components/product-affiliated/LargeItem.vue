<template>
  <div class='grid grid-cols-1 grid-rows-1'>

    <div v-if='getActiveProduct !== null' class='flex flex-col justify-center'>
      <img v-if='getActiveProduct' :src="activeProductImage" width='100%'>
<!--      <img :src='require(`../../assets/images/${getActiveProduct.img}`)' :alt='getActiveProduct.alt' width='42rem'>-->
<!--      <svg style='border: solid 1px black' viewBox="0 0 130.08 128.69" width='42rem' height='42rem'>-->
<!--        <defs><style>.cls-1,.cls-3{fill:none;}.cls-1{stroke:#47745b;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.3px;}.cls-2{fill:#47745b;}.cls-3{stroke:#000;stroke-miterlimit:10;stroke-width:0.5px;}</style></defs>-->
<!--        <g id="Big_stroke_glasses" data-name="Big stroke glasses">-->
<!--          <circle class="cls-1" cx="52.14" cy="85.27" r="9.8"/>-->
<!--          <line class="cls-1" x1="39.45" y1="85.27" x2="42.34" y2="85.27"/>-->
<!--          <circle class="cls-1" cx="78.74" cy="85.27" r="9.8"/>-->
<!--          <line class="cls-1" x1="91.43" y1="85.27" x2="88.55" y2="85.27"/>-->
<!--          <path class="cls-1" d="M69,84.63a5.88,5.88,0,0,0-3.52-1.76,5.92,5.92,0,0,0-3.52,1.76"/>-->
<!--        </g>-->
<!--        <g id="Shoe_Stroke" data-name="Shoe Stroke">-->
<!--          <path class="cls-1" d="M92.86,54.78c1.92,4.31,6.76,9.78,6.76,9.78,5.74,6.81,8.09,7,10.4,8.37a3.61,3.61,0,0,1,1.65,3.91L109.39,80c-1.49.5-11.2,1.1-18.5-3.46s-25.55-16.5-25.55-16.5l10.3-13.46c.44,1.22,2,6.83,6.53,8.73S92.86,54.78,92.86,54.78Z"/>-->
<!--          <path class="cls-1" d="M93.69,50.52c-1.58,1.49-.83,4.26-.83,4.26"/>-->
<!--          <line class="cls-1" x1="79.39" y1="64.69" x2="67.64" y2="57.07"/>-->
<!--          <path class="cls-1" d="M74.29,51.43c4.27,5.64.61,10.34.61,10.34"/>-->
<!--          <path class="cls-1" d="M82,66.26l11.68,7.37a32.49,32.49,0,0,0,18,3.21"/>-->
<!--          <line class="cls-1" x1="96.82" y1="58.81" x2="92.68" y2="61.46"/>-->
<!--          <line class="cls-1" x1="98.83" y1="61.46" x2="95.07" y2="63.94"/>-->
<!--          <line class="cls-1" x1="100.64" y1="63.94" x2="96.95" y2="66.26"/>-->
<!--        </g>-->
<!--        <g id="All_3" data-name="All 3">-->
<!--          <path class="cls-2" d="M73.23,42.55l-6.5-6h0a.7.7,0,0,0-.16-.1h0l-10-3.89h-.05l-.12,0h-.12a.76.76,0,0,0-.16.06h0a14.71,14.71,0,0,1-3.55,1.52L49.3,31.29V29.51A3.55,3.55,0,1,0,45.23,26a.52.52,0,0,0,1,0,2.53,2.53,0,1,1,2.53,2.53.51.51,0,0,0-.52.51v2.24L45,34.15a14.71,14.71,0,0,1-3.55-1.52h0l-.15-.06h-.13a.45.45,0,0,0-.11,0h0L31,36.47a.59.59,0,0,0-.17.1h0l-6.5,6a.53.53,0,0,0-.12.6l3.46,7.29a.51.51,0,0,0,.58.28l6.38-1.51v23a.51.51,0,0,0,.51.52H62.42a.51.51,0,0,0,.51-.52v-23l6.38,1.51a.51.51,0,0,0,.58-.28l3.45-7.29A.52.52,0,0,0,73.23,42.55ZM55.75,34a10.46,10.46,0,0,1-.68,2.39L53.45,35A15.83,15.83,0,0,0,55.75,34ZM54.6,37.34a6.28,6.28,0,0,1-5.81,3.25A6.28,6.28,0,0,1,43,37.34l2.33-2.05a14.3,14.3,0,0,0,7,0Zm-5.81-5.13,2.52,2.23a12.83,12.83,0,0,1-5,0Zm-6.28,4.18A10.46,10.46,0,0,1,41.83,34a15.83,15.83,0,0,0,2.3,1ZM34.65,48.16l-6.21,1.46-3.11-6.57,5.87-5.39c.92.94,3.45,3.8,3.45,7.08ZM61.9,44.74V71.66H35.68V44.74c0-3.47-2.41-6.4-3.54-7.6l8.62-3.36a12.22,12.22,0,0,0,1.09,3.58.67.67,0,0,0,.1.21h0a7.25,7.25,0,0,0,6.83,4,7.25,7.25,0,0,0,6.83-4h0a.67.67,0,0,0,.1-.21,12.22,12.22,0,0,0,1.09-3.58l8.62,3.36C64.3,38.34,61.9,41.27,61.9,44.74Zm7.24,4.88-6.21-1.46V44.74c0-3.27,2.52-6.14,3.45-7.08l5.87,5.39Z"/>-->
<!--          <rect class="cls-3" x="3.24" y="2.54" width="123.6" height="123.6"/>-->
<!--        </g>-->
<!--      </svg>-->

      <div class='grid grid-cols-2'>
        <div class='inline justify-start'>
          <h1>{{ getActiveProduct.title }}</h1>
          <p>{{ getActiveProduct.description }}</p>
          <p>Star ratings</p>
        </div>
        <div>
          <h1 class='text-right'>{{ getActiveProduct.price }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LargeItem',
  computed: {
    getActiveProduct() {
      // console.log(this.$store.state.activeProduct.img)
      // console.log("In LargeItem:", `~/assets/images/${this.$store.state.activeProduct.img}`)
      return this.$store.state.activeProduct
    },
    activeProductImage() {
      // console.log("here", this.$store.state.activeProduct)
      // console.log("In LargeItem:", `~/assets/images/${this.$store.state.activeProduct.img}`)
      return require(`~/assets/images/${this.$store.state.activeProduct.img}`)
    }
  }
}
</script>

<style scoped>

</style>
