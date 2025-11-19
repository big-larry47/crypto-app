<template>
    <section class="related-tutorials">
      <h2>Related Tutorials</h2>
      <div class="related-grid">
        <router-link
          v-for="tutorial in related"
          :key="tutorial.id"
          :to="`/tutorials/${tutorial.id}`"
          class="related-card"
        >
          <img :src="tutorial.image" alt="" />
          <div class="info">
            <span class="category">{{ tutorial.badge }}</span>
            <h3>{{ tutorial.title }}</h3>
            <p>{{ tutorial.description }}</p>
          </div>
        </router-link>
      </div>
    </section>
  </template>
  
  <script setup>
  defineProps({
    related: {
      type: Array,
      default: () => [],
    },
  })
  </script>
  
  <style scoped>
  .related-tutorials {
    margin-top: 60px;
    color: white;
  }
  
  .related-tutorials h2 {
    font-size: 1.6rem;
    margin-bottom: 25px;
    color: #00c896;
  }
  
  .related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .related-card {
    background: #14141e;
    border-radius: 16px;
    overflow: hidden;
    text-decoration: none;
    color: white;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .related-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 255, 183, 0.15);
  }
  
  .related-card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  
  .info {
    padding: 15px;
  }
  
  .category {
    color: #00c896;
    font-size: 0.85rem;
    display: block;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
  
  h3 {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }
  
  p {
    color: #aaa;
    font-size: 0.85rem;
  }
  </style>
  