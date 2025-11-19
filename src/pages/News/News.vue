<!-- src/pages/News/News.vue -->
<template>
    <div class="news-page">
      <Header />
  
      <HeroSection />
  
      <section class="news-list-section">
        <NewsList />
      </section>
  
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import HeroSection from './sections/HeroSection.vue'
  import NewsList from './sections/NewsList.vue'
  import './news.css'
  </script>
  