<template>
    <div v-if="modelValue" class="overlay">
      <Spinner />
    </div>
  </template>
  
  <script setup>
  import Spinner from './Spinner.vue'
  
  defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
  })
  </script>
  
  <style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0b0b12; /* Solid background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  </style>
  