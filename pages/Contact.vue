<template>
  <div class='w-full'>
    <section class='mt-20 grid grid-cols-5 gap-4'>
      <div class='flex flex-col col-span-2 pl-8'>
        <input class='w-full' placeholder='Name'>
        <input class='w-full' placeholder='Email'>
        <textarea class='w-full' placeholder='Message'></textarea>
        <Button>SEND</Button>
      </div>
      <div class='flex col-span-1 justify-center items-center'>
        <p>OR</p>
      </div>
      <div class='flex flex-col col-span-2 items-center'>
        <p class='text-left'>Send us a direct message on Instagram or Facebook.</p>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  layout: 'Secondary'
}
</script>

<style scoped>

  input, textarea {
    padding: 1rem;
    border: solid 1px #707070;
    margin-bottom: 1rem;
  }

  textarea {
    min-height: 24rem;
  }

  button {
    border: solid 1px #707070;
    background-color: #47745B;
    width: 10rem;
    color: white;
    padding: 0.5rem;
    border-radius: 4rem;
  }

</style>
