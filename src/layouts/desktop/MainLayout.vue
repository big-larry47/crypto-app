<template>
    <div class="desktop-layout">
      <slot />
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
  .desktop-layout {
    min-height: 100vh;
    width: 100%;
    background-color: #0b0b12; /* full-bleed bg */
    display: flex;
    flex-direction: column;
    align-items: center;        /* center content horizontally */
    box-sizing: border-box;
  }
  </style>
  