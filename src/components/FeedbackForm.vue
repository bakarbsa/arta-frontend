<template>
  <Header title="Support Us" subtitle="HELP US TO IMPORVE QUALITY"/>
  <div v-if="feedbackError">
    <div class="mt-3 bg-artaError px-3 h-12 rounded w-full flex flex-row justify-between items-center">
      <p class="text-white font-medium">Please fill out all the forms</p>
      <XIcon @click="this.feedbackError = undefined" class="w-6 text-white cursor-pointer"></XIcon>
    </div>
  </div>
  <div v-if="feedbackError == false">
    <div class="mt-3 bg-artaGreen px-3 h-12 rounded w-full flex flex-row justify-between items-center">
      <p class="text-white font-medium">Email submitted successfully!</p>
      <XIcon @click="this.feedbackError = undefined" class="w-6 text-white cursor-pointer"></XIcon>
    </div>
  </div>
  <!-- Form Content -->
  <form class="w-80 mt-5" method="post">
    <DefaultForm v-model:modelValue="feedbackForm.fullName" label="Full Name" type='text' placeholder="Abu Bakar Bsa"/>
    <DefaultForm v-model:modelValue="feedbackForm.email" label="Email" type='email' placeholder="example@gmail.com"/>
    <DefaultForm v-model:modelValue="feedbackForm.phoneNumber" label="Phone Number" type='text' placeholder="081xxxxxxxxx"/>
    <DefaultForm v-model:modelValue="feedbackForm.messages" label="Messages" type='text' placeholder="Your messages"/>
  </form>
  <button 
    @click.prevent="submitFeedbackForm"
    class="rounded-sm w-min py-1.5 px-8 text-sm bg-artaGreen text-white transition duration-200 ease-in hover:bg-white hover:text-artaGreen"
  >
    Submit
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
      feedbackError: undefined,
      feedbackForm: {
        fullName: '',
        email: '',
        phoneNumber: '',
        messages: '',
      }
    }
  },
  validations() {
    return {
      feedbackForm: {
        fullName: { required },
        email: { required },
        phoneNumber: { required },
        messages: { required },
      },
    }
  },
  methods: {
    submitFeedbackForm() {
      this.v$.feedbackForm.$touch();
      if(!this.v$.feedbackForm.$invalid) {
        axios.post('/api/feedback', this.feedbackForm)
        .then(() => {
          console.log('Post feedback successfully!');
          this.feedbackError = false;
        })
        .catch((err) => {
          console.log(err);
          alert('Unknown Error');
        });
      } else {
        this.feedbackError = true;
      }
    },
  }
}
</script>

<style>

</style>