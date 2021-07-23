<template>
  <div class='relative'>

      <div class='flex flex-col pl-10 pr-10 w-full xl:w-1/2'>

        <div class='text-container flex p-8 lg:p-16'>
          <p class='text-2xl lg:text-3xl'>FEEL GOOD ABOUT WHAT YOU BUY.</p>
        </div>

        <div class='text-container flex p-8 lg:p-16 border-t-0'>
          <p class='text-xl lg:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div class='flex justify-end pt-8 lg:pt-12 lg:pb-16'>
          <svg class='box-content' viewBox="0 0 22.8 22.8" width='3rem' height='3rem'>
            <defs><style>.fb-vectors{fill:#47745b;}</style></defs>
            <g id="fb-stroke">
              <path class="fb-vectors" d="M18.45.41H4.33A3.93,3.93,0,0,0,.39,4.35V18.47a3.93,3.93,0,0,0,3.94,3.94h7.06V14H8.7V10.41h2.69V8.74a4.37,4.37,0,0,1,4.37-4.37h2.69V8H15.69a.9.9,0,0,0-.9.9v1.56h3.66V14H14.79v8.42h3.66a3.93,3.93,0,0,0,3.94-3.94V4.35A3.93,3.93,0,0,0,18.45.41Z"/>
            </g>
          </svg>
          <svg class='pl-4 box-content' viewBox="0 0 22.7 22.7" width='3rem' height='3rem'>
            <g id="insta-stroke">
              <path class="instaVectors" d="M16,22.2H6.41A6.21,6.21,0,0,1,.2,16V6.41A6.22,6.22,0,0,1,6.41.2H16a6.21,6.21,0,0,1,6.2,6.21V16A6.21,6.21,0,0,1,16,22.2ZM6.41,2.2A4.22,4.22,0,0,0,2.2,6.41V16a4.21,4.21,0,0,0,4.21,4.2H16A4.2,4.2,0,0,0,20.2,16V6.41A4.21,4.21,0,0,0,16,2.2Z"/>
              <path class="instaVectors" d="M11.2,17A5.78,5.78,0,1,1,17,11.2,5.79,5.79,0,0,1,11.2,17Zm0-9.56A3.78,3.78,0,1,0,15,11.2,3.79,3.79,0,0,0,11.2,7.42Z"/>
              <circle class="instaVectors" cx="17" cy="5.14" r="1.25"/>
            </g>
          </svg>
        </div>

      </div>

      <div class='flex flex-col w-1/2 hidden xl:block'></div>
      <video class='hidden absolute overflow-x-hidden xl:block xl:max-w-7xl 2xl:max-w-6xl' autoplay loop>
        <source class='overflow-x-hidden' src='~/assets/videos/waves.mp4' type='video/mp4'>
      </video>

<!--    </main>-->

<!--    <NuxtLink to='/Products'>Products</NuxtLink>-->
  </div>
</template>

<script>
// import Navbar from '../components/Navbar'
export default {
  layout: 'MainLayout'
  // components: { Navbar }
}
</script>

<style scoped>

.text-container {
  border: 1px solid #707070;
  font-family: "Roboto Condensed", "sans-serif";
}

video {
  left: calc(50% + 2.5rem);
  top: 0;
}

.instaVectors {
  fill:#47745b;
}

</style>

