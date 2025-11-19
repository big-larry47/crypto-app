<template>
    <div class="faq-page">
      <Header />
      <HeroSection />
      <FaqSection />
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import HeroSection from './sections/HeroSection.vue'
  import FaqSection from './sections/FaqSection.vue'
  import './faq.css'
  </script>
  