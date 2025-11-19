<!-- src/components/shared/Button.vue -->
<template>
    <button class="btn">
      <slot>Button</slot>
    </button>
  </template>
  
  <script setup>
  // optional logic for the button can go here
  </script>
  
  <style scoped>
  .btn {
    padding: 0.5rem 1rem;
    border: none;
    background-color: #4caf50;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
  .btn:hover {
    background-color: #45a049;
  }
  </style>
  