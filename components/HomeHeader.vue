<template>
  <header class='relative'>
    <img src='~assets/images/trees.jpeg'>
    <Navbar />
<!--    TODO: Fix the h1 when screen size is really small! -->
    <h1 class='roboto-header absolute w-3/5 left-10 text-3xl top-2/3 md:text-4xl lg:left-14 lg:text-5xl xl:text-6xl 2xl:w-1/2 text-white'>A place for environmentally conscious products.</h1>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style scoped>

h1.roboto-header {
  font-family: "Roboto Condensed", sans-serif;
}

</style>
