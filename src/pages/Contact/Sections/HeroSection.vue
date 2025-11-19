<template>
    <div class="faq-header-section">
      <div class="faq-header-wrapper">
        <h1 class="faq-title">Let's connect! I'm Bud, here to help.</h1>
    
      </div>
    </div>
  </template>
  
  <script setup>
  // No script needed
  </script>
  
  <style scoped>
  .faq-header-section {
    background: #0b0b12;
    color: white;
    width: 100%;
  
    /* Added top margin to compensate for fixed header height, as requested */
    margin-top: 80px; 
  
    /* Keep good spacing inside */
    padding: 4rem 1rem 0 1rem;
  }
  
  .faq-header-wrapper {
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;
    text-align: center;
    /* ⬇️ REDUCED BOTTOM MARGIN */
    margin-bottom: 1.5rem; 
  }
  
  .faq-title {
    font-size: 3.5rem;
    font-weight: bold;
    margin: 0 0 1rem 0;
    color: white;
  }
  
  .faq-subtitle {
    color: #9ca3af;
    font-size: 1.125rem;
    margin: 0;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .faq-title {
      font-size: 2.5rem;
    }
  
    .faq-subtitle {
      font-size: 1rem;
    }
  }
  </style>