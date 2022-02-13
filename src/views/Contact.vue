<template>
  <div>
    <!-- CALL NAVBAR -->
    <Navbar active="contact" fixedStyle/>
    <!-- SUPPORT & NEWSLETTER -->
    <div class="mt-28 mb-16 flex justify-center items-center">
      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-20">

        <!-- Support -->
         <div class="flex flex-col mb-14 md:mb-0"> 
          <FeedbackForm/>
        </div>

        <!-- Newsletter -->
        <div class="flex flex-col">
          <NewsletterForm/>
        </div>

      </div>
    </div>

    <!-- CALL FOOTER -->
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import FeedbackForm from '@/components/FeedbackForm'
import NewsletterForm from '@/components/NewsletterForm'
import Footer from '@/components/Footer'

export default {
  name: 'Contact',
  components: { Navbar, FeedbackForm, NewsletterForm, Footer }
}
</script>

<style>

</style>