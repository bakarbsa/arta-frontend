<template>
  <Header title="Newsletter" subtitle="GET THE LATEST NEWS FROM US"/>
  <div v-if="newsletterError">
    <div class="mt-3 bg-error px-3 h-12 rounded w-full flex flex-row justify-between items-center">
      <p class="text-white font-medium">Please fill out all the forms</p>
      <XIcon @click="this.newsletterError = undefined" class="w-6 text-white cursor-pointer"></XIcon>
    </div>
  </div>
  <div v-if="newsletterError == false">
    <div class="mt-3 bg-artaGreen px-3 h-12 rounded w-full flex flex-row justify-between items-center">
      <p class="text-white font-medium">Email submitted successfully!</p>
      <XIcon @click="this.newsletterError = undefined" class="w-6 text-white cursor-pointer"></XIcon>
    </div>
  </div>
  <!-- Form Content -->
  <form class="w-80 mt-5" method="post">
    <DefaultForm v-model:modelValue="newsletterForm.email" label="Email" type='email' placeholder="example@gmail.com"/>
  </form>
  <button 
    @click.prevent="submitNewsletterForm"
    class="rounded-sm w-min py-1.5 px-8 text-sm bg-artaGreen text-white transition duration-200 ease-in hover:bg-white hover:text-artaGrebg-artaGreen"
  >
    Subscribe
  </button>
</template>

<script>
import axios from 'axios'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { XIcon } from '@heroicons/vue/outline'
import Header from '@/components/Header'
import DefaultForm from '@/components/DefaultForm'

export default {
  name: 'Feedback Form',
  components: { XIcon, Header, DefaultForm },
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      newsletterError: undefined,
      newsletterForm: {
        email: ''
      }
    }
  },
  validations() {
    return {
      newsletterForm: {
        email: { required }
      }
    }
  },
  methods: {
    submitNewsletterForm() {
      this.v$.newsletterForm.$touch();
      if(!this.v$.newsletterForm.$invalid) {
        axios.post('/api/newsletter', this.newsletterForm)
        .then(() => {
          console.log('Post newsletter email successfully!');
          this.newsletterError = false;
        })
        .catch((err) => {
          console.log(err);
          alert('Unknown Error');
        });
      } else {
        this.newsletterError = true;
      }
    }
  }
}
</script>

<style>

</style>