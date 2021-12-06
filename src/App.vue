<template>
  <div id="app">
    <router-view/>
  </div>  
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Public+Sans:regular,medium,bold,light,italic&subset=latin,latin-ext');
  @import url('https://fonts.googleapis.com/css?family=Stick+No+Bills:regular,bold');

  * {
    font-family: 'Public Sans', sans-serif;
  }

  .stick-no-bills {
    font-family: 'Stick No Bills', sans-serif;
  }
</style>
