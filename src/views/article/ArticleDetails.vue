<template>
  <div>
    <!-- CALL NAVBAR -->
    <Navbar active="articles" fixedStyle/>

    <!-- ARTICLE IMAGE -->
    <div class="mt-28 flex justify-center items-center w-4/6 max-h-96 mx-auto overflow-hidden bg-black">
      <img class="w-full h-full object-cover" src="https://picsum.photos/600/400.jpg" alt="">
    </div>

    <div class="flex justify-center mx-auto w-4/6">
      <div class="mx-5 md:mx-10">
        <!-- Title -->
        <div class="mt-14">
          <h1 class="text-artaBlue-200 text-3xl md:text-5xl leading-tight font-bold">{{ article.title }}</h1>
        </div>
        <!-- Author -->
        <div class="mt-4 mb-2 w-full flex flex-row justify-between">
          <p class=" text-artaGray text-opacity-70 text-sm">By {{ article.author }}</p>
          <div class="flex flex-col justify-end">
            <p class="text-artaGray text-opacity-70 text-sm">Published {{ formatDate(article.createdAt) }}</p>
            <div class="flex flex-row justify-end gap-1 items-center">
              <EyeIcon class="w-4 text-artaGray text-opacity-70"/>
              <p class="text-artaGray text-opacity-70 text-sm">{{ article.views }}</p>
            </div>
          </div>
        </div>
        <!-- Content -->
        <div class="mt-3 mb-16">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tellus ex, ullamcorper in eros at, cursus vestibulum neque. Nullam bibendum pretium est, id efficitur justo interdum tristique. Nam porta orci et gravida fringilla. Sed sit amet velit elit. Nulla dignissim, arcu sed fringilla laoreet, tellus tellus tristique est, in elementum erat neque a tellus. Nulla vestibulum purus vitae ante lobortis iaculis. In dictum mi at tellus ultricies, at imperdiet diam placerat.</p>
          <br>
          <p>Praesent ac dui luctus, viverra lacus id, sodales mauris. Donec quis ipsum augue. Nunc egestas sollicitudin mauris, ac porttitor mi semper a. Nulla facilisi. Curabitur odio diam, fermentum sit amet rhoncus at, finibus eget ante. Ut imperdiet quis magna nec suscipit. Quisque sagittis metus eu tellus dapibus, in porta risus mattis. Ut mattis ullamcorper erat ac eleifend. Etiam consectetur ex in ullamcorper vehicula. Phasellus vehicula quam sit amet mi iaculis convallis. Integer pulvinar arcu faucibus, fringilla nisl eu, finibus nisl. Donec efficitur erat in finibus sollicitudin. Cras at laoreet velit. Proin porta, eros ac gravida volutpat, tortor elit pharetra erat, quis sodales justo ipsum a odio.</p>
          <br>
          <p>Fusce varius nisi nec dui vulputate mollis. Quisque lacus sapien, pharetra cursus lacinia eget, lobortis vitae tellus. Quisque id iaculis augue, quis feugiat dui. Maecenas erat nisl, ornare nec ultricies ac, convallis et arcu. Ut ac ligula vestibulum, rhoncus tortor at, facilisis ex. Fusce feugiat, arcu et faucibus aliquam, diam leo rutrum nunc, ac mattis risus felis ut dui. Vivamus id ante libero. Sed vel consequat erat, quis maximus sapien. Aliquam erat volutpat. Praesent tincidunt, dolor luctus aliquet egestas, neque elit rhoncus enim, ut tristique nunc ligula ac elit. Ut congue metus vel porttitor auctor. Ut fringilla maximus congue. Proin vel consectetur risus, et pulvinar arcu. Donec augue magna, condimentum eu rhoncus eu, pharetra et nunc. Integer faucibus auctor felis, at imperdiet libero laoreet nec.</p>
        </div>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import{ EyeIcon } from '@heroicons/vue/outline'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'Article Details',
  components: { Navbar, Footer, EyeIcon },
  data() {
    return {
      article: {}
    }
  },
  methods: {
    formatDate(value) {
      moment.locale('id')
      return moment(String(value)).format('DD MMMM YYYY')
    },
  },
  async created() {
    // Get article by Id
    const resArticle = await axios.get( '/api/article/' + this.$route.params.articleId);
    this.article = resArticle.data;
  },
}
</script>

<style scoped>

</style>