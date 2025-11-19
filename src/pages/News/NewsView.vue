<!-- src/pages/News/NewsView.vue -->
<template>
    
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import NewsList from './Sections/NewsList.vue'
  
  // Parallax state
  const scrollY = ref(0)
  const hasScrolled = ref(false)
  
  const handleScroll = () => {
    scrollY.value = window.scrollY
    if (scrollY.value > 50) hasScrolled.value = true
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  </script>
  
  <style scoped>
  .news-page {
    background-color: #0b0b12;
    color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  /* Hero Section */
  .hero {
    width: 100%;
    height: 400px;
    background-image: url('https://images.unsplash.com/photo-1620109945289-9b6e8ed66e1a');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed; /* enhances the parallax effect */
    background-position: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .overlay {
    background: rgba(11, 11, 18, 0.75);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: opacity 0.6s ease, transform 0.6s ease;
    opacity: 0;
    transform: translateY(20px);
  }
  
  .overlay.fade-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  .hero-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: #ffffff;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
    color: #c5c6ce;
    max-width: 600px;
  }
  
  /* News List Section */
  .news-list-section {
    padding: 60px 20px 80px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    .hero {
      height: 300px;
      background-attachment: scroll; /* prevent mobile jank */
    }
  
    .hero-title {
      font-size: 2rem;
    }
  
    .hero-subtitle {
      font-size: 1rem;
    }
  
    .news-list-section {
      padding: 40px 15px 60px;
    }
  }
  </style>
  