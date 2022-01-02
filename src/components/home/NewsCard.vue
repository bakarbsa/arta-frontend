<template>
  <div class="h-72  rounded-md shadow-bottom overflow-hidden">
    <!-- BACKGROUND -->
    <div class="relative h-40 w-full flex justify-center items-center overflow-hidden bg-blue-100">
      <img class="object-cover w-full h-full" :src=src alt="News Image">
      <!-- DATE -->
      <div class="absolute bottom-0 left-9 rounded-t-md flex items-center h-5 px-2 py-3 bg-green">
        <p class="text-xs text-blue-200">{{ createdAt }}</p>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="flex flex-col mx-9 mt-3 mb-5">
      <!-- AUTHOR & VIEWS -->
      <div class="flex flex-row mb-2 text-blue-100">
        <div class="flex flex-row mr-3 items-center">
          <UserCircleIcon class="h-4 w-4 mr-1"/>
          <p class="text-xs">{{ author }}</p>
        </div>
        <div class="flex flex-row items-center">
          <EyeIcon class="h-4 w-4 mr-1"/>
          <p class="text-xs">{{ views }}</p>
        </div>
      </div>

      <!-- TITLE -->
      <h1 class="text-blue-200 text-lg leading-6 line-clamp-3 font-bold">
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<script>
import{ UserCircleIcon, EyeIcon } from '@heroicons/vue/outline'
export default {
  name: 'News Card',
  components: { UserCircleIcon, EyeIcon },
  props: {
    src: String,
    createdAt: String,
    author: String,
    views: Number,
    title: String
  }
}
</script>

<style>

</style>