<template>
  <div class="flex flex-col items-center justify-center pt-16 pb-5 w-full bg-artaDark">
    <div class="grid grid-cols-1 md:grid-cols-3 md:gap-10 w-3/4">
      <!-- LOGO & CONTACT -->
      <div class="flex flex-col mx-auto mb-5 md:mb-0">
        <div class="w-14 mb-5">
          <img src="../assets/images/logo-white.png" alt="Arta Logo">
        </div>
        <a href="mailto: artasebuku@gmail.com">
          <div class="flex flex-row mb-2">
            <MailIcon class="w-4 text-white mr-2"/>
            <p class="text-white text-sm font-extralight">artasebuku@gmail.com</p>
          </div>
        </a>
        <a href="tel:+62859106525016">
          <div class="flex flex-row">
            <PhoneIcon class="w-4 text-white mr-2"/>
            <p class="text-white text-sm font-extralight">+62859106525016</p>
          </div>
        </a>
      </div>

      <!-- NAVBAR -->
      <div class="flex flex-col mx-auto mb-5 md:mb-0">
        <router-link to="/">
          <p class="text-white font-semibold mb-2">HOME</p>
        </router-link>
        <router-link to="/about">
          <p class="text-white font-semibold mb-2">ABOUT</p>
        </router-link>
        <p class="text-white font-semibold mb-1">PRODUCTS</p>
        <router-link to="/artamart">
          <ul class="list-disc ml-7 mb-2">
            <li class="text-white text-sm font-extralight">Artamart</li>
          </ul>
        </router-link>
        <router-link to="/news">
          <p class="text-white font-semibold mb-2">NEWS</p>
        </router-link>
      </div>

      <!-- NEWSLETTER -->
      <div class="flex flex-col mx-auto">
        <!-- Input Eemail -->
        <div class="mb-3">
          <input 
            class="focus:outline-none py-1 px-3 rounded-sm" 
            v-model="modelValue" 
            type = 'Email'
            placeholder ='Email'
          >
        </div>

        <!-- Button -->
        <router-link to="/">
          <div class="border group border-white rounded-sm w-min px-3 py-1 hover:bg-white">
            <p class="text-xs text-white group-hover:text-black font-extralight">Subscribe</p>
          </div>
        </router-link>
        
        <div class="mt-6">
          <p class="text-white font-semibold">FOLLOW US</p>
        </div>
      </div>
    </div>
    <div class="w-5/6 h-0.5 mt-8 mb-5 bg-white"/>
    <p class="text-sm text-white font-bold"><span class="font-extralight">© 2021 -</span>&nbsp;CV ARTA GROW PERSADA</p>
  </div>
</template>

<script>
import { PhoneIcon, MailIcon } from '@heroicons/vue/solid'
export default {
  name: 'Footer',
  components: { PhoneIcon, MailIcon },
  data () {
    return {
      modelValue: ''
    }
  }
}
</script>

<style>

</style>