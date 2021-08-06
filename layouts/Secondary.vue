<template>
  <div class='w-full h-full lg:pl-6 lg:pr-6 bg-green'>

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
  // data() {
  //   return {
  //     offset: 0,
  //   }
  // },
  // computed: {
  //   calculateHeightOffset() {
  //     return `padding-top: ${this.offset}px`
  //   }
  // },
  // mounted() {
  //   this.$nextTick(function () {
  //     // Code that will run only after the
  //     // entire view has been rendered
  //     this.matchHeight()
  //   })
  // },
  // methods: {
  //   matchHeight() {
  //     const height = this.$refs.navbar.clientHeight
  //     this.offset = height.clientHeight + 12
  //     console.log(this.offset)
  //   }
  // }
}
</script>

<style scoped>

</style>
