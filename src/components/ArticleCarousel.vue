<template>
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
      <vueper-slide v-for="(article) in articleList" :key="article._id">
        <template #content>
          <router-link
            :to="'/articles/' + article._id"
            @click="addViews(article._id, article.views)"
          >
            <ArticleCard 
              :src="article.image"
              :createdAt="formatDate(article.createdAt)"
              :author="article.author"
              :views="article.views"
              :title="article.title"
            />
          </router-link>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import ArticleCard from '@/components/home/ArticleCard'


export default {
  name: 'Article Carousel',
  components: {  VueperSlides, VueperSlide, ArticleCard },
  data() {
    return {
      articleList: [],
      // Breakpoints for Vueper Slides
      breakpoints: {
        950: {
          visibleSlides: 2
        },
        600: {
          visibleSlides: 1,
          bulletsOutside: true
        }
      }
    }
  },
  methods: {
    formatDate(value) {
      moment.locale('id')
      return moment(String(value)).format('DD MMMM YYYY')
    },
    addViews(id, views) {
      const viewCount = views + 1;
      axios.patch('/api/article/' + id, { views: viewCount })
      .then(() => {
        console.log('Views count!');
      })
      .catch((err) => {
        console.log(err);
      });
    }
  },
  async mounted() {
    const resArticleList = await axios.get('/api/article');
    this.articleList = resArticleList.data;
  }
}
</script>

<style>
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