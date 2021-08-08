<template>
  <div class='w-full h-full lg:pl-16 lg:pr-16 2xl:pl-6 2xl:pr-6 bg-green'>

    <Navbar />

<!--  Use this padding top for equalness of headings to navbar -- 2xl:pt-30  -->
    <main class='flex w-full pt-24 2xl:pt-44 bg-gray-light' >
      <Nuxt/>
    </main>

    <AppFooter />

  </div>
</template>

<script>
export default {
  name: 'Secondary',
}
</script>

<style scoped>

</style>
