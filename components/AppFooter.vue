<template>
  <footer>
    <div class='grid grid-cols-3 bg-green pt-phone pb-phone pl-4 pr-4 lg:pb-laptop lg:pt-laptop lg:pr-0 lg:pr-0 '>
      <div class='flex flex-col justify-start items-start'>
        <div class='mt-4 text-center bg-gray-light'>
          <p id='logo' class='text-green-dark text-base sm:text-lg md:text-xl pl-0.5 pr-0.5'>SUSTAINABLES</p>
        </div>
        <div class='flex flex-row mt-4'>
          <FacebookIcon color='#F6F6F6' width='2rem' height='2rem'/>
          <InstagramIcon class='pl-4' color='#F6F6F6' width='2rem' height='2rem'/>
        </div>
      </div>
      <div class='flex justify-center text-center'>
        <ul class='list-none m-0 text-gray-light font-custom'>
          <li class='m-2'><NuxtLink to='/'>Home</NuxtLink></li>
          <li class='m-2'><NuxtLink to='shop'>Shop</NuxtLink></li>
          <li class='m-2'><NuxtLink to='ourStory'>Our Story</NuxtLink></li>
          <li class='m-2'><NuxtLink to='contact'>Contact</NuxtLink></li>
        </ul>
      </div>
      <div class='flex justify-end items-center'>
        <p class='font-custom text-gray-light text-right'>shop.sustainables@gmail.com</p>
      </div>
    </div>
  </footer>
</template>

<script>
import FacebookIcon from './icons/FacebookIcon'
import InstagramIcon from './icons/InstagramIcon'
export default {
  name: 'AppFooter',
  components: { InstagramIcon, FacebookIcon }
}
</script>

<style scoped>

#logo {
  font-family: "Roboto Condensed";
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0;
}

a:hover {
  text-decoration: underline;
}

</style>
