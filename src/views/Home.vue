<template>
  <div>
    <!-- CALL NAVBAR -->
    <Navbar active="home"/>

    <!-- HERO SECTION -->
    <div class="h-screen flex justify-items-center items-center bg-black">
      <!-- Background Image -->
      <img class="h-full w-full absolute object-cover opacity-70" src="../assets/images/bg-hero.jpg" alt="Background Hero">
      
      <!-- Content -->
      <div class="mx-auto text-center relative text-white">
        <h1 class="text-5xl md:text-6xl font-bold mx-10">ARTA GROW PERSADA</h1>
        <p class="text-sm w-1/2 mt-2 mx-auto pb-5">Startup in agriculture that have a goal to develop agricultural potential in Indonesia</p>
        <DefaultButton to="/about">Get Started</DefaultButton>
      </div>
    </div>

    <!-- ABOUT SECTION -->
    <div class="flex justify-center">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 py-10 md:py-20">
        <!-- Grid 1 -->
          <!-- Card -->
          <div class="relative flex flex-col items-center md:items-end w-96">
            <!-- Card Image -->
            <div class="card-about h-96 w-80 text-green rounded-md overflow-hidden">
              <img 
                class="bg-about" 
                src="../assets/images/bg-about.jpg" 
                alt="About Arta">
            </div>
            <!-- Tag Line -->
            <div class="absolute -bottom-9 md:right-10 w-60 bg-blue-100 py-4 px-6 rounded-2xl">
               <p class="text-white text-2xl text-left stick-no-bills">Grow Together</p>
                <p class="text-white text-2xl text-right stick-no-bills font-bold">Respect Each Other</p>
            </div>
          </div>

        <!-- Grid 2 -->
        <div class="flex flex-col w-96 justify-center px-4 md:px-0">
          <Header title="Kami hadir dengan segala inovasi" subtitle="our introduction"/>
          <p class="text-blue-300 text-sm my-4">Mewujudkan pertanian Indonesia yang lebih maju</p>
          <p class="text-gray text-sm">Startup agribisnis yang fokus terhadap dunia pertanian dan memiliki dedikasi tinggi untuk berkontribusi dalam pertanian Indonesia.</p>
          <ul class="text-blue-300 mt-4">
            <li class="bullet pl-7 mb-2">Menjadi perusahaan agribisnis berbasis teknologi.</li>
            <li class="bullet pl-7 my-2">Menjaga kredibilitas dan kepuasan konsumen.</li>
            <li class="bullet pl-7 my-2">Mewujudkan lingkup kerja yang efisien dan flexibel</li>
            <li class="bullet pl-7 my-2">Menjunjung tinggi integritas</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Quality Card -->
    <div class="flex justify-center mb-10">
      <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div v-for="asset in qualityAssets" :key="[asset.src, asset.title]">
          <AboutCard :src="asset.src">{{ asset.title }}</AboutCard>
        </div>
      </div>
    </div>

    <!-- Banner 1 -->
    <div class="relative h-80 flex items-center mt-0 md:mt-20">
      <!-- Banner image -->
      <div class="absolute h-full w-full bg-black overflow-hidden"> 
        <img class="opacity-80 h-full w-full object-cover" src="../assets/images/home-banner1.jpg" alt="Arta Banner">
      </div>
      <!-- Content -->
      <div class="z-10 mx-20 flex flex-col items-center text-center md:text-left md:items-start md:mx-56">
        <h1 class="text-4xl text-white font-bold mb-5 md:max-w-md">How do We Make it Happen</h1>
        <DefaultButton to="/about">Discover More</DefaultButton>
      </div>
    </div>

    <!-- PRODUCT SECTION -->
    <div class="flex flex-col justify-center items-center my-16">
      <Header class="center" title="Our Products" subtitle="WHAT WE’RE DOING"/>
      <div class="grid grid-cols-1 mt-7 gap-5">
        <div v-for="asset in productAssets" :key="[asset.bgSrc, asset.logoImgSrc, asset.logoTextSrc]">
          <ProductCard :bgSrc="asset.bgSrc" :logoImgSrc="asset.logoImgSrc" :logoTextSrc="asset.logoTextSrc"/>
        </div>
      </div>
    </div>

    <!-- Banner 2 -->
    <div class="relative bg-green h-24 flex justify-center">
      <img class="h-full opacity-60 w-full object-cover" src="../assets/images/home-banner2.jpg" alt="Arta Banner">
      <div class="absolute h-full w-full bg-gradient-to-b from-green to-transparent  flex justify-center items-center">
        <div class="flex flex-row items-center mx-10">
          <!-- Logo Arta -->
          <img class="w-10 mr-5" src="../assets/images/logo-white.png" alt="Arta Logo">
          <!-- Text -->
          <h1 class="stick-no-bills text-white text-xl md:text-3xl">We Will Be Getting Ahead In Agriculture</h1>
        </div>
      </div>
    </div>

    <!-- NEWS & ARTICLE SECTION -->
    <div class="my-16 flex flex-col justify-center items-center">
      <Header class="center" title="News & Article" subtitle="WHAT’S GOING ON?"/>
      <div class="mt-5 w-5/6">
        <vueper-slides
          class="no-shadow"
          fixed-height="18.3rem"
          :visible-slides="3"
          slide-multiple
          :gap="3"
          :dragging-distance="70"
          :breakpoints="breakpoints"
        >
          <vueper-slide v-for="(asset) in articleList" :key="asset._id">
            <template #content>
              <NewsCard 
                src="https://picsum.photos/600/400.jpg"
                :createdAt="formatDate(asset.createdAt)"
                :author="asset.author"
                :views="asset.views"
                :title="asset.title"
              />
            </template>
          </vueper-slide>
        </vueper-slides>
      </div>
    </div>

    <!-- SUPPORT & NEWSLETTER -->
    <div class="my-16 flex justify-center items-center">
      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-20">
        <!-- Support -->
        <div class="flex flex-col mb-14 md:mb-0">
          <Header title="Support Us" subtitle="HELP US TO IMPORVE QUALITY"/>
          <!-- Form Content -->
          <form class="w-80 mt-5" method="post">
            <DefaultForm v-model:modelValue="fullName" label="Full Name" type='text' placeholder="Abu Bakar Bsa"/>
            <DefaultForm v-model:modelValue="emailSupport" label="Email" type='email' placeholder="example@gmail.com"/>
            <DefaultForm v-model:modelValue="phoneNumber" label="Phone Number" type='text' placeholder="081xxxxxxxxx"/>
            <DefaultForm v-model:modelValue="messages" label="Messages" type='text' placeholder="Your messages"/>
          </form>
          <DefaultButton to="/about" px='px-8'>Submit</DefaultButton>
        </div>

        <!-- Newsletter -->
        <div class="flex flex-col">
          <Header title="Newsletter" subtitle="GET THE LATEST NEWS FROM US"/>
          <!-- Form Content -->
          <form class="w-80 mt-5" method="post">
            <DefaultForm v-model:modelValue="emailNewsLetter" label="Email" type='email' placeholder="example@gmail.com"/>
          </form>
          <DefaultButton to="/about" px='px-8'>Subscribe</DefaultButton>
        </div>
      </div>
    </div>

    <!-- CALL FOOTER -->
    <Footer/>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import Navbar from '@/components/Navbar'
import DefaultButton from '@/components/DefaultButton'
import Header from '@/components/Header'
import AboutCard from '@/components/home/AboutCard'
import ProductCard from '@/components/home/ProductCard'
import NewsCard from '@/components/home/NewsCard'
import DefaultForm from '@/components/DefaultForm'
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  components: { 
    VueperSlides, 
    VueperSlide,
    Navbar, 
    DefaultButton, 
    Header, 
    AboutCard, 
    ProductCard,
    NewsCard,
    DefaultForm,
    Footer 
  },
  data() {
    return {
      // Breakpoints for Vueper Slides
      breakpoints: {
        950: {
          visibleSlides: 2
        },
        600: {
          visibleSlides: 1,
          bulletsOutside: true
        }
      },
      // Array for quality card images
      qualityAssets: [
        {
          src: require('../assets/images/img-efficient.jpg'),
          title: 'Efficient'
        },
        {
          src: require('../assets/images/img-innovative.jpg'),
          title: 'Innovative'
        },
        {
          src: require('../assets/images/img-customer-friendly.jpg'),
          title: 'Customer Friendly'
        }
      ],
      // Products of Arta (Artamart)
      productAssets: [
        {
          bgSrc: require('../assets/images/bg-artamart.jpg'),
          logoImgSrc: require('../assets/images/logo-artamart-img.png'),
          logoTextSrc: require('../assets/images/logo-artamart-text.png'),
          content: 'Menjual berbagai sayur dan lauk pilihan dengan harga terjangkau dan produk berkualitas'
        }
      ],
      articleList: [],
      newsAssets: [
        {
          src: 'https://picsum.photos/600/400.jpg',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus',
          createdAt: '30 Agustus 2021',
          author: 'Rizal Iskan',
          views: 1403
        },
        {
          src: 'https://picsum.photos/600/400.jpg',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus',
          createdAt: '30 Agustus 2021',
          author: 'Rizal Iskan',
          views: 1403
        },
        {
          src: 'https://picsum.photos/600/400.jpg',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus',
          createdAt: '30 Agustus 2021',
          author: 'Rizal Iskan',
          views: 1403
        },
        {
          src: 'https://picsum.photos/600/400.jpg',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus',
          createdAt: '30 Agustus 2021',
          author: 'Rizal Iskan',
          views: 1403
        },
      ],
      // Form Model
      fullName: '',
      emailSupport: '',
      phoneNumber: '',
      messages: '',
      emailNewsLetter: ''
    }
  },
  methods: {
    formatDate(value) {
      moment.locale('id')
      return moment(String(value)).format('DD MMMM YYYY')
    }
  },
  async mounted() {
    const response = await axios.get('http://localhost:3000/article');
    this.articleList = response.data;
  }
}
</script>

<style>
  /* ABOUT SECTION */
  .card-about {
    box-shadow: 15px 15px;
  }
  
  .bg-about {
    transition: transform .5s, filter 1.5s ease-in-out;
  }

  .bg-about:hover {
    filter: grayscale(100);
    transform: scale(1.1);
  }

  .bullet {
    background: url('../assets/images/bullet.png') no-repeat left center;
    font-size: .85em;
  }

  /* Vueper Slide */
  .vueperslides__bullet .default {
    background-color: rgba(0, 0, 0, 0.3);
    border: none;
    box-shadow: none;
    transition: 0.3s;
    width: 16px;
    height: 16px;
  }

  .vueperslides__bullet--active .default {background-color: #01BF71;}

  .vueperslides__bullet span {
    display: block;
    color: #fff;
    font-size: 10px;
    opacity: 0.8;
  }
</style>