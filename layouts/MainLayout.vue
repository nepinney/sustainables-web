<template>
  <div class='w-full h-full lg:pl-16 lg:pr-16 bg-green'>

    <HomeHeader />

    <main class='flex flex-row pt-16 xl:pt-28 bg-gray-light'>
      <Nuxt/>
    </main>

    <AppFooter />

  </div>
</template>

<script>
export default {
  name: 'MainLayout',
}
</script>

<style>
  * {
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden !important;
  }

  /*#page {*/
  /*  background-color: #47745B;*/
  /*}*/

  /*main{*/
  /*  background-color: #f6f6f6;*/
  /*}*/
</style>
