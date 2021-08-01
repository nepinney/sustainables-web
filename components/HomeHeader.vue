<template>
  <header class='relative'>
    <img src='~assets/images/trees.jpeg'>
    <Navbar />
    <h1 class='absolute w-3/5 left-5 sm:left-10 text-2xl top-1/2 sm:top-2/3 md:text-4xl lg:left-14 xl:text-6xl 2xl:w-1/2 text-gray-light'>A place for environmentally conscious products.</h1>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader',
}
</script>

<style scoped>

h1 {
  z-index: 0;
  font-family: "Roboto Condensed", sans-serif;
}

</style>
