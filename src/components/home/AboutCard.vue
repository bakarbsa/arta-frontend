<template>
  <div class="flip relative h-64 w-56 rounded-md overflow-hidden">
    <div class="flip-content h-full w-full">
      <!-- FRONT CARD -->
      <div class="flip-front absolute h-full w-full">
        <div class=" flex flex-col">
          <div class="h-full w-full">
            <img :src="src" alt="Quality Image">
          </div>
          <div class="absolute flex items-center justify-center h-14 w-3/4 px-5 py-3 text-xs text-blue-200 font-medium bg-white rounded-t-md bottom-0 right-7">
            <slot/>
          </div>
        </div>
      </div>
      <!-- BACK CARD -->
      <div class="flip-back absolute h-full w-full">
        <div class="flex flex-col justify-center items-center h-full w-full px-5 py-2 bg-green">
          <h1 class="text-blue-200 text-3xl mb-5">Want to Know More?</h1>
          <DefaultButton type="blue">About Us</DefaultButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultButton from '@/components/DefaultButton'

export default {
  name: 'About Card',
  components: { DefaultButton },
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
  .flip { 
    text-align: center;
    perspective: 600px;  
  }

  .flip-content {
    transition: transform 0.4s;
    transform-style: preserve-3d;
  }

  .flip:hover .flip-content {
    transform: rotateY(180deg);
    transition: transform 0.3s;
  }

  .flip-front, .flip-back {
    backface-visibility: hidden;
  }

  .flip-back {
    transform: rotateY(180deg);
  }

</style>