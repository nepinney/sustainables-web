<template>
  <div id="page" class='w-full h-full lg:pl-16 lg:pr-16'>

    <HomeHeader />

    <main class='flex flex-row pt-16 xl:pt-28'>
      <Nuxt/>
    </main>

  </div>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>

<style>
  * {
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden !important;
  }

  #page {
    background-color: #47745B;
  }

  main{
    background-color: white;
  }
</style>
