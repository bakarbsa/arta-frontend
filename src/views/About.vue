<template>
  <div>
    <!-- CALL NAVBAR -->
    <Navbar active="about" fixedStyle/>

    <!-- ABOUT SECTION -->
    <div class="flex justify-center mt-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 py-10 md:py-20">
        <!-- Grid 1 -->
          <!-- Card -->
          <div class="relative flex flex-col items-center md:items-end w-96">
            <!-- Card Image -->
            <div class="card-about h-96 w-80 text-artaGreen rounded-md overflow-hidden">
              <img 
                class="bg-about" 
                src="../assets/images/bg-about.jpg" 
                alt="About Arta">
            </div>
            <!-- Tag Line -->
            <div class="absolute -bottom-9 md:right-10 w-60 bg-artaBlue-100 py-4 px-6 rounded-2xl">
               <p class="text-white text-2xl text-left stick-no-bills">Grow Together</p>
                <p class="text-white text-2xl text-right stick-no-bills font-bold">Respect Each Other</p>
            </div>
          </div>

        <!-- Grid 2 -->
        <div class="flex flex-col w-96 justify-center px-4 md:px-0">
          <Header title="Kami hadir dengan segala inovasi" subtitle="our introduction"/>
          <p class="text-artaBlue-300 text-sm my-4">Mewujudkan pertanian Indonesia yang lebih maju</p>
          <p class="text-artaGray text-sm">Startup agribisnis yang fokus terhadap dunia pertanian dan memiliki dedikasi tinggi untuk berkontribusi dalam pertanian Indonesia.</p>
          <ul class="text-artaBlue-300 mt-4">
            <li class="bullet pl-7 mb-2">Menjadi perusahaan agribisnis berbasis teknologi.</li>
            <li class="bullet pl-7 my-2">Menjaga kredibilitas dan kepuasan konsumen.</li>
            <li class="bullet pl-7 my-2">Mewujudkan lingkup kerja yang efisien dan flexibel</li>
            <li class="bullet pl-7 my-2">Menjunjung tinggi integritas</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Quality Card -->
    <div class="flex justify-center mb-20">
      <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div v-for="asset in qualityAssets" :key="[asset.src, asset.title, asset.content]">
          <AboutCard :src="asset.src" :content="asset.content">{{ asset.title }}</AboutCard>
        </div>
      </div>
    </div>

    <!-- CALL FOOTER -->
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import AboutCard from '@/components/home/AboutCard'
import Footer from '@/components/Footer'

export default {
  name: 'About',
  components: { Navbar, Header, AboutCard, Footer },
  data() {
    return {
      qualityAssets: [
        {
          src: require('../assets/images/img-efficient.jpg'),
          title: 'Efficient',
          content: 'Arta selalu bekerja secara efektif sehingga hasil yang didapat akan selalu maksimal dan tepat sasaran.'
        },
        {
          src: require('../assets/images/img-innovative.jpg'),
          title: 'Innovative',
          content: 'Arta bergerak dibidang pertanian Indonesia sehingga dibutuhkan ide yang inovasi agar dapat memaksimalkan potensi pertanian Indonesia.'
        },
        {
          src: require('../assets/images/img-customer-friendly.jpg'),
          title: 'Customer Friendly',
          content: 'Arta menjunjung tinggi attitude, kami akan melayani setiap customer dengan profesional sesuai SOP yang berlaku.'
        }
      ],
    }
  }
}
</script>

<style>

</style>