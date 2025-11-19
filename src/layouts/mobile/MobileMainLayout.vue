<template>
    <div class="mobile-layout">
      <slot />
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
  .mobile-layout {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: #0b0b12; /* mobile bg matches desktop */
    padding: 1rem;
    box-sizing: border-box;
  }
  </style>
  