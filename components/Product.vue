<template>
 <div>
   <img class='pb-4' :src='require(`~/assets/images/${product.img}`)' :alt='product.alt'>

   <div class='product_information'>
     <div class='grid grid-cols-2'>

      <div class='grid grid-rows-2'>
        <div>
          <p class='font-custom font-extrabold text-gray pb-4 text-lg'>{{ product.title }}</p>
        </div>

        <div class='flex items-center'>
          <p class='font-custom text-gray text-base'>{{ product.description }}</p>
        </div>
      </div>

       <div class='grid grid-rows-2 justify-items-end'>
         <div>
           <h1 class='font-custom font-extrabold text-right text-lg text-gray'>{{ product.price }}</h1>
         </div>

         <a class='block flex justify-center items-center bg-green rounded-full lg:rounded-3xl w-2/5 h-5/6' :href='product.link' target='_blank'>
           <p class='font-custom text-center text-gray-light text-xs md:text-base'>BUY NOW</p>
         </a>
      </div>




<!--       </div>-->
<!--       <div class='grid grid-cols-1 justify-items-end'>-->
<!--         <h1 class='font-custom font-extrabold text-right text-lg text-gray'>{{ product.price }}</h1>-->
<!--         -->
<!--       </div>-->
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: Object()
  },
  methods: {
    goToBuy() {
      window.location.href = this.product.link
    }
  }
}
</script>

<style scoped>
a {
  min-width: 75px;
}
</style>
