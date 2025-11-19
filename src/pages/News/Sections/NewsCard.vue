<!-- src/pages/News/sections/NewsCard.vue -->
<template>
    <router-link
      :to="{
        name: 'NewsDetail',
        params: { id: article.id },
        state: { article }
      }"
      class="news-card"
    >
      <div class="image-wrapper">
        <img :src="article.image" alt="News image" />
        <span class="category" :class="article.category.toLowerCase()">
          {{ article.category }}
        </span>
      </div>
  
      <div class="card-content">
        <h3 class="news-title">{{ article.title }}</h3>
        <p class="news-desc">{{ previewDescription }}</p>

        <div class="card-footer">
          <span class="source">{{ article.source }}</span>
          <span class="arrow">→</span>
        </div>
      </div>
    </router-link>
  </template>
  
  <script setup>
import { computed } from 'vue'

// Capture props
const props = defineProps({
  article: Object
})

// Show only a short preview in the card
const previewDescription = computed(() => {
  const desc = props.article?.description || 'No description available.'
  const maxLength = 120
  return desc.length > maxLength ? desc.slice(0, maxLength) + '...' : desc
})
</script>


  
  
  <style scoped>
  .news-card {
    display: flex;
    flex-direction: column;
    background: #131324;
    border-radius: 14px;
    overflow: hidden;
    transition: all 0.3s ease;
    text-decoration: none;
    color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
    margin: 0; /* ✅ remove any implicit outer margin */
  }
  
  .news-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  }
  
  /* image area */
  .image-wrapper {
    width: 100%;
    height: 180px;
    overflow: hidden;
    position: relative;
    background: #0b0b12;
  }
  
  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  
  .news-card:hover img {
    transform: scale(1.08);
  }
  
  /* category tag */
  .category {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #fff;
  }
  
  .category.crypto {
    background: #007bff;
  }
  
  .category.forex {
    background: #00d4ff;
  }
  
  /* text area */
  .card-content {
    padding: 14px 16px; /* ✅ reduced from 20px */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }
  
  .news-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: #f3f4f6;
  }
  
  .news-desc {
    color: #a7a7b3;
    font-size: 0.88rem;
    margin-bottom: 12px;
    line-height: 1.5;
  }
  
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #888;
    font-size: 0.8rem;
  }
  
  .card-footer .arrow {
    font-size: 1.1rem;
    color: #00d4ff;
    transition: transform 0.2s ease;
  }
  
  .news-card:hover .arrow {
    transform: translateX(4px);
  }
  </style>
  