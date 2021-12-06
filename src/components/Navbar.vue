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
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>

      <!-- NAVBAR CONTENT -->
      <div class="w-full hidden lg:flex lg:items-center lg:w-auto">
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
export default {
  name: 'Navbar',
  props: { active: String },
  data() {
    return {
      scrollPosition: null,
    }
  },
  methods: {
    // Update window scroll position
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    // Change navbar background when scrolling
    changeBg() {
      if(this.scrollPosition <= 100) return 'bg-transparent transition ease-in duration-200'
      else return 'bg-white transition ease-in duration-200'
    },
    // Change navbar logo when scrolling
    changeLogo() {
      if(this.scrollPosition <= 100) return require('../assets/images/logo-white.png')
      else return require('../assets/images/logo-black.png')
    },
    // Change navbar text when scrolling
    changeText() {
      if(this.scrollPosition <= 100) return 'text-white text-opacity-70 hover:text-white hover:text-opacity-100 hover:border-white'
      else return 'text-black text-opacity-70 hover:text-black hover:text-opacity-100 hover:border-black'
    },
    // Set style for active route
    activeText() {
      if(this.scrollPosition <= 100) return 'text-opacity-100 border-white'
      else return 'text-opacity-100 border-black'
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
    @apply block mt-4 ml-10 font-medium lg:inline-block lg:mt-0;
  }

  .navbar-content-hover {
    @apply transition ease-in duration-200 border-b-4 border-transparent;
  }
</style>