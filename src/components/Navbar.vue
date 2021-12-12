<template>
  <div class="h-0 sticky bg-black top-0 z-50">
    <nav 
      class="flex py-6 items-center justify-between flex-wrap px-14 lg:px-32"
      :class="changeBg()">
      <!-- BRAND LOGO -->
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <router-link to="#">
          <img class="h-12" :src="changeLogo()" alt="Logo Arta">
        </router-link>
      </div>

      <!-- MOBILE COLLAPSE ICON -->
      <div class="block lg:hidden" @click="setExpand()">
        <button class="flex items-center">
          <MenuIcon class="w-10" :class="changeMenuColor()"/>
        </button>
      </div>

      <!-- NAVBAR CONTENT -->
      <div class="w-full lg:flex lg:items-center lg:w-auto" :class="isExpand ? 'static' : 'hidden'">
        <div class="text-base lg:flex-grow">
          <router-link to="/" 
            class="navbar-content navbar-content-hover" 
            :class="[active == 'home' ? activeText() : '', changeText()]">
            Home
          </router-link>
          <router-link to="#" 
            class="navbar-content navbar-content-hover" 
            :class="[active == 'about' ? activeText() : '', changeText()]">
            About
          </router-link>
          <router-link to="#" 
            class="navbar-content navbar-content-hover" 
            :class="[active == 'products' ? activeText() : '', changeText()]">
            Products
          </router-link>
          <router-link to="#" 
            class="navbar-content navbar-content-hover" 
            :class="[active == 'news' ? activeText() : '', changeText()]">
            News
          </router-link>
          <router-link to="#" 
            class="navbar-content navbar-content-hover" 
            :class="[active == 'contact' ? activeText() : '', changeText()]">
            Contact
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { MenuIcon } from '@heroicons/vue/solid'

export default {
  name: 'Navbar',
  components: { MenuIcon },
  props: { active: String },
  data() {
    return {
      scrollPosition: null,
      isExpand: false
    }
  },
  methods: {
    // Update window scroll position
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    // Change navbar background when scrolling
    changeBg() {
      if(this.scrollPosition <= 100 && this.isExpand == false) return 'bg-transparent transition ease-in duration-200'
      else return 'bg-white transition ease-in duration-200'
    },
    // Change navbar logo when scrolling
    changeLogo() {
      if(this.scrollPosition <= 100 && this.isExpand == false) return require('../assets/images/logo-white.png')
      else return require('../assets/images/logo-black.png')
    },
    // Change navbar text when scrolling
    changeText() {
      if(this.scrollPosition <= 100 && this.isExpand == false) return 'transition ease-in duration-200 text-white text-opacity-70 hover:text-white hover:text-opacity-100 hover:border-white'
      else return 'transition ease-in duration-200 text-black text-opacity-70 hover:text-black hover:text-opacity-100 hover:border-black'
    },
    // Change mobile menu color
    changeMenuColor() {
      if(this.scrollPosition <= 100 && this.isExpand == false) return 'transition ease-in duration-200 text-white'
      else return 'transition ease-in duration-200 text-black'
    },
    // Set style for active route
    activeText() {
      if(this.scrollPosition <= 100 && this.isExpand == false) return 'transition ease-in duration-200 text-opacity-100 border-white'
      else return 'transition ease-in duration-200 text-opacity-100 border-black'
    },
    setExpand() {
      this.isExpand = !this.isExpand
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.updateScroll);
  }
}
</script>

<style>
  .navbar-content {
    @apply block mt-4 mx-10 font-medium lg:mx-0 lg:ml-10 lg:inline-block lg:mt-0;
  }

  .navbar-content-hover {
    @apply transition ease-in duration-200 border-b-4 border-transparent;
  }
</style>