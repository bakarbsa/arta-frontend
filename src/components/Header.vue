<template>
  <div class="flex flex-col" v-bind="$attrs" vb>
    <img class="w-5 h-5 mb-3" src="../assets/images/logo-header.png" alt="Arta Logo">
    <p class="font-light text-black text-xs">{{ subtitle.toUpperCase() }}</p>
    <h2 class="font-bold text-3xl mt-1 text-artaBlue-200">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Header',
  inheritAttrs: false,
  props: {
    title :{
      type: String,
      required: true
    },
    subtitle : {
      type: String,
      required: true
    }
  }
}
</script>

<style>
  .center {
    @apply items-center text-center;
  }

  .left {
    @apply items-start text-left;
  }
</style>