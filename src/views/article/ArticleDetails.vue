<template>
  <div>
    <!-- CALL NAVBAR -->
    <Navbar active="articles" fixedStyle/>

    <!-- ARTICLE IMAGE -->
    <div class="w-4/6 h-96 mx-auto bg-black">

    </div>

    <div>
      <!-- Title -->
      <div>
        <p class="mt-28 flex justify-center text-gray text-opacity-70 text-sm">Published 22 January 2021</p>
        <h1></h1>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'Article Details',
  components: { Navbar }
}
</script>

<style>

</style>