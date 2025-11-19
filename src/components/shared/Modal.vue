<!-- src/components/shared/Modal.vue -->
<template>
    <div class="modal">
      <slot>Modal content</slot>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
  .modal {
    background: white;
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 6px;
  }
  </style>
  