<template>
  <div>
    <Header />

    <div class="tutorial-section">
      <div class="tutorial-wrapper">
        <div class="tutorial-header">
          <h2 class="tutorial-title">Beginners Tutorial ({{ tutorials.length }})</h2>
        </div>

        <div class="tutorial-grid">
          <div 
            v-for="tutorial in tutorials" 
            :key="tutorial.id"
            class="tutorial-card"
            @click="openTutorial(tutorial.id)"
          >
            <div class="card-image">
              <img :src="tutorial.image" :alt="tutorial.title" />
              <span class="card-badge">{{ tutorial.badge }}</span>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ tutorial.title }}</h3>
              <p class="card-description">{{ tutorial.description }}</p>
            </div>
          </div>
        </div>

        <!-- Pagination (optional, not needed yet) -->
        <div class="pagination">
          <button class="pagination-btn" @click="prevPage" :disabled="currentPage === 1">
            <svg width="20" height="20" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <button class="pagination-number active">{{ currentPage }}</button>

          <button class="pagination-btn" @click="nextPage">
            <svg width="20" height="20" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { tutorials } from '@/data/tutorials.js';

const router = useRouter();
const currentPage = ref(1);

// 🚀 open tutorial dynamically
const openTutorial = (id) => {
  router.push(`/tutorial/${id}`);
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  currentPage.value++;
};
</script>

  
  <style scoped>
  .tutorial-section {
  background: #0b0b12;
  color: white;
  padding: 7rem 1rem 4rem; /* Added extra top padding (7rem) to avoid header overlap */
  width: 100%;
}

  
  .tutorial-wrapper {
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;
  }
  
  .tutorial-header {
    margin-bottom: 2rem;
  }
  
  .tutorial-title {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
    color: white;
  }
  
  .tutorial-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
  
  .tutorial-card {
    background: transparent;
    border-radius: 1rem;
    overflow: visible;
    transition: transform 0.3s ease;
    cursor: pointer;
  }
  
  .tutorial-card:hover {
    transform: translateY(-8px);
  }
  
  .card-image {
    position: relative;
    width: 100%;
    height: 250px;
    overflow: hidden;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 1rem;
  }
  
  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .tutorial-card:hover .card-image img {
    transform: scale(1.05);
  }
  
  .card-badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.4rem 0.8rem;
    border-radius: 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: capitalize;
  }
  
  .card-content {
    padding: 1.5rem 0;
  }
  
  .card-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0 0 0.75rem 0;
    color: white;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .card-description {
    font-size: 0.875rem;
    color: #9ca3af;
    margin: 0;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .pagination-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #334155;
    background: transparent;
    color: #9ca3af;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .pagination-btn:hover:not(:disabled) {
    background: #1e293b;
    border-color: #475569;
    color: white;
  }
  
  .pagination-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .pagination-number {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: #0cb5d6;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  
  /* Responsive */
  @media (max-width: 1024px) {
    .tutorial-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .tutorial-title {
      font-size: 1.5rem;
    }
    
    .tutorial-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .card-image {
      height: 200px;
    }
  }
  </style>