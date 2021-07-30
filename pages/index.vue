<template>
  <div class='relative'>

      <div class='flex flex-col pl-4 pr-4 md:pl-10 md:pr-10 w-full xl:w-1/2'>

        <div class='text-container header flex p-8 lg:p-16'>
          <p class='text-2xl lg:text-3xl text-gray'>FEEL GOOD ABOUT WHAT YOU BUY.</p>
        </div>

        <div class='text-container flex p-8 lg:p-16'>
          <p class='text-xl lg:text-2xl text-gray'><nuxt-content :document="page" /></p>
        </div>


        <div class='flex justify-end pt-8 lg:pt-12 lg:pb-16'>
          <FacebookIcon color='#47745b' width='3rem' height='3rem' />
          <InstagramIcon class='pl-4' color='#47745b' width='3rem' height='3rem'/>
        </div>

      </div>

      <div class='flex flex-col w-1/2 hidden xl:block'></div>
      <video class='hidden absolute overflow-x-hidden xl:block xl:max-w-7xl 2xl:max-w-6xl' autoplay loop>
        <source class='overflow-x-hidden' src='~/assets/videos/waves.mp4' type='video/mp4'>
      </video>

  </div>
</template>

<script>
import InstagramIcon from '../components/icons/InstagramIcon'
import FacebookIcon from '../components/icons/FacebookIcon'
export default {
  components: { FacebookIcon, InstagramIcon },
  layout: 'MainLayout',
  async asyncData ({ $content }) {
    const page = await $content('home').fetch();
    return { page };
  },
  // mounted() {
  //   if (this.$store.state.allProducts.length === 0)
  //     this.$store.dispatch('fetchAllProducts')
  // }
}
</script>

<style scoped>

.text-container {
  border: solid 1px #707070;
  /*font-family: "Roboto Condensed", "sans-serif";*/
}

p {
  font-family: "Roboto Condensed";
  /*color: #707070;*/
}

.header, .header p {
  font-weight: 700;
  letter-spacing: 1px;
  border-bottom: none;
}

video {
  left: calc(50% + 2.5rem);
  top: 0;
}

.instaVectors {
  fill:#47745b;
}

</style>

