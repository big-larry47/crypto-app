<template>
    <div>
      <Header />
  
      <div class="tutorial-page-wrapper">
        <!-- Main tutorial content -->
        <div v-if="tutorial" class="tutorial-details">
          <h1 class="tutorial-title">{{ tutorial.title }}</h1>
  
          <div class="tutorial-meta">
            <span class="author">By {{ tutorial.author || 'Admin' }}</span>
            <span class="date">{{ tutorial.date || '' }}</span>
          </div>
  
          <div v-if="tutorial.image" class="tutorial-featured-image">
            <img :src="tutorial.image" :alt="tutorial.title" />
          </div>
  
          <div class="tutorial-content" v-html="tutorial.content"></div>
        </div>
  
        <div v-else class="tutorial-not-found">
          <p>Tutorial not found.</p>
        </div>
  
        <!-- Related Tutorials Sidebar -->
        <aside class="related-tutorials">
          <h2>Related Tutorials</h2>
          <div class="related-grid">
            <router-link
              v-for="tut in relatedTutorials"
              :key="tut.id"
              :to="`/tutorial/${tut.id}`"
              class="related-card"
            >
              <img :src="tut.image" alt="" />
              <div class="info">
                <span class="category">{{ tut.category }}</span>
                <h3>{{ tut.title }}</h3>
              </div>
            </router-link>
          </div>
        </aside>
      </div>
  
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import { tutorials } from '@/data/tutorials.js';
  
  const route = useRoute();
  
  // Current tutorial
  const tutorial = computed(() =>
    tutorials.find(t => t.id === route.params.id)
  );
  
  // Related tutorials (exclude current)
  const relatedTutorials = computed(() =>
    tutorials.filter(t => t.id !== route.params.id).slice(0, 4)
  );
  </script>
  
  <style scoped>
/* Page layout: main + sidebar */
.tutorial-page-wrapper {
  display: flex;
  gap: 40px;
  max-width: 1400px;  /* moderate width */
  margin: 0 auto;
  padding: 4rem 2rem;
  color: #f3f4f6;
  background: #0b0b12;
}

/* Main tutorial content */
.tutorial-details {
  flex: 3;
}

/* Sidebar */
.related-tutorials {
  flex: 1;
  min-width: 280px; /* keeps sidebar readable */
}

.related-tutorials h2 {
  font-size: 1.6rem;
  margin-bottom: 20px;
  color: #00c896;
}

.related-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

.related-card {
  display: block;
  background: #14141e;
  border-radius: 12px;
  overflow: hidden;
  color: white;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.related-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 255, 183, 0.15);
}

.related-card img {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.related-card .info {
  padding: 10px;
}

.related-card .category {
  color: #00c896;
  font-size: 0.8rem;
  display: block;
  margin-bottom: 4px;
  text-transform: uppercase;
}

.related-card h3 {
  font-size: 1rem;
  margin-bottom: 4px;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .tutorial-page-wrapper {
    flex-direction: column;
  }

  .related-tutorials {
    margin-top: 3rem;
  }
}

/* Existing tutorial styles */
.tutorial-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
  line-height: 1.3;
}

.tutorial-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 1.5rem;
}

.tutorial-featured-image {
  width: 100%;
  margin-bottom: 2rem;
  overflow: hidden;
  border-radius: 1rem;
}

.tutorial-featured-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 1rem;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.tutorial-featured-image img:hover {
  transform: scale(1.03);
}

.tutorial-content {
  line-height: 1.7;
  font-size: 1rem;
  color: #d1d5db;
}

.tutorial-not-found {
  text-align: center;
  font-size: 1.2rem;
  color: #888;
  margin: 3rem 0;
}
</style>

  