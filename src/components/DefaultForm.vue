<template>
  <div class="flex flex-col mb-6">
    <label class="text-sm text-artaBlue-300 mb-1">{{ label }}</label>
    <input 
      class="pb-1 border-b-2 border-artaBlue-300 focus:outline-none" 
      :value="modelValue" 
      @input="(event) => $emit('update:modelValue', event.target.value)"
      :type="type" 
      :placeholder="placeholder"
    >
  </div>
</template>

<script>
export default {
  name: 'Default Form',
  props: {
    modelValue: {
      type: String,
      default: '',
      required: true
    },
    label: {
      type: String,
      required: true
    },
    type: String,
    placeholder: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>