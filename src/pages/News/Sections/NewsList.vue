<template>
    <section class="news-list">
      <div v-if="loading" class="loading">Loading latest crypto news...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
  
      <div v-else class="news-grid">
        <NewsCard
          v-for="(article, index) in articles"
          :key="index"
          :article="article"
        />
      </div>
    </section>
  </template>
  
  <script setup>
  import { useCryptoNews } from '@/composables/useCryptoNews.js'
  import NewsCard from './NewsCard.vue'
  
  const { articles, loading, error } = useCryptoNews()
  </script>
  
  
  <style scoped>
  .news-list {
    background-color: #0b0b12;
    padding: 40px 20px 80px;
    color: #fff;
    min-height: 100vh;
  }
  
  .news-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    max-width: 1300px;
    margin: 0 auto;
  }
  
  /* Loading & error states */
  .loading,
  .error {
    text-align: center;
    padding: 40px;
    font-size: 1.2rem;
  }
  
  .loading {
    color: #00c896;
  }
  
  .error {
    color: #ff5555;
  }
  
  /* Tablet */
  @media (max-width: 1024px) {
    .news-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  /* Mobile */
  @media (max-width: 640px) {
    .news-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>
  