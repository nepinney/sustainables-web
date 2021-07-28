<template>
  <section class='w-full'>
      <h1 class='text-center pb-6'>OUR FAVOURITES</h1>

    <div class='flex justify-between items-center'>

        <svg class='ml-11 mr-11' viewBox="0 0 11 23" height='4rem' width='2rem'>
          <g id="arrowImage">
            <polyline class="arrow" points="10.77 0.54 0.23 10.91 10.77 21.46"/>
          </g>
        </svg>

<!--        <div>-->
<!--          <img src='~/assets/images/allBird.png'>-->
<!--        </div>-->

        <svg class='mr-11 ml-11' viewBox="0 0 11 23" height='4rem' width='2rem'>
          <g id="arrowImage">
            <polyline class="arrow" points="0.23 21.46 10.77 11.09 0.23 0.54"/>
          </g>
        </svg>


      </div>
  </section>
</template>

<script>
export default {
  name: 'FavouriteItems'
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
