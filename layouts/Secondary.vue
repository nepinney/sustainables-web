<template>
  <div class='w-full h-full lg:pl-16 lg:pr-16'>

    <Navbar />

    <main class='flex w-full pt-24 lg:pb-8 bg-gray-light' >
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
