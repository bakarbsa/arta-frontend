<template>
  <div class="relative h-96 w-52 rounded-md overflow-hidden flex flex-col items-center shadow-bottom">
    <!-- Background image -->
    <div class="h-32 w-full overflow-hidden">
      <img class="object-cover" :src="bgSrc" alt="Background Product">
    </div>
    
    <!-- Logo image -->
    <div class="absolute top-20 h-20 w-20 flex items-center justify-center overflow-hidden rounded-full bg-white">
      <div class="w-14">
        <img :src="logoImgSrc" alt="Logo Product">
      </div>
    </div>
    
    <!-- Content -->
    <div class="flex mt-9 h-48 flex-col justify-between items-center">
      <!-- Logo text -->
      <div class="w-24">
        <img :src="logoTextSrc" alt="Logo Product">
      </div>
      <!-- Description -->
      <div class="px-7 -mt-3">
        <p class="text-center text-gray text-xs">Franchise yang menjual berbagai sayur dan lauk pilihan dengan harga terjangkau dan stabil, serta produk berkualitas</p>
      </div>
      <DefaultButton>Learn More</DefaultButton>
    </div>
  </div>
</template>

<script>
import DefaultButton from '@/components/DefaultButton'

export default {
  name: 'Product Card',
  components: { DefaultButton },
  props: {
    bgSrc: String,
    logoImgSrc: String,
    logoTextSrc: String
  }
}
</script>

<style>

</style>