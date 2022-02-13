<template>
  <div>
    <!-- CALL NAVBAR -->
    <Navbar active="articles" fixedStyle/>
    <div class="mt-28 mb-16 flex flex-col justify-center items-center">
      <Header class="center" title="News & Article" subtitle="WHAT’S GOING ON?"/>
      <ArticleCarousel/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import ArticleCarousel from '@/components/ArticleCarousel'
import Footer from '@/components/Footer'

export default {
  name: 'Article',
  components: { Navbar, Header, ArticleCarousel, Footer }
}
</script>

<style>

</style>