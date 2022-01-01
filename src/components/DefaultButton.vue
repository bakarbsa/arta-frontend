<template>
  <!-- PROPS 'type == blue' FOR CHANGE THE COLOR -->
  <router-link :to="to">
    <button class="rounded-sm py-1.5 text-sm" :class="[changeColor(), px]">
      <!-- Replace text -->
      <slot/>
    </button>
  </router-link>
</template>

<script>
export default {
  name: 'Default Button',
  props: {
    to: {
      type: String,
      default: '/',
      required: true
    },
    type: String,
    px: {
      type: String,
      default: 'px-3.5'
    }
  },
  methods: {
    // Change button color when props 'type == blue'
    changeColor() {
      if(this.type == 'blue') return 'bg-blue-100 text-white transition duration-200 ease-in hover:bg-white hover:text-blue-100'
      else return 'bg-green text-white transition duration-200 ease-in hover:bg-white hover:text-green'
    }
  }
}
</script>

<style>

</style>