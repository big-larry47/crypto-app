<template>
    <div class="tutorial-page">
  
      <!-- Hero Section -->
      <div class="tutorial-hero">
        <img :src="tutorial.image" :alt="tutorial.title" class="hero-image" />
        <div class="overlay"></div>
        <div class="hero-content">
          <span class="badge">{{ tutorial.badge }}</span>
          <h1>{{ tutorial.title }}</h1>
          <p class="description">{{ tutorial.description }}</p>
        </div>
      </div>
  
      <!-- Body Content (HTML from tutorials.js) -->
      <div class="tutorial-body" v-html="tutorial.content"></div>
    </div>
  </template>
  
  <script setup>
  import { tutorials } from "@/data/tutorials.js";
  import { useRoute } from "vue-router";
  
  const route = useRoute();
  const tutorial = tutorials.find(t => t.id === route.params.id);
  </script>
  
  <style scoped>
  /* ----------------------------------------------- */
  /* Page Container */
  /* ----------------------------------------------- */
  .tutorial-page {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
  }
  
  /* ----------------------------------------------- */
  /* Hero Section */
  /* ----------------------------------------------- */
  .tutorial-hero {
    position: relative;
    height: 340px;
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
  }
  
  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(75%);
  }
  
  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7));
  }
  
  .hero-content {
    position: absolute;
    bottom: 25px;
    left: 25px;
    color: #fff;
    max-width: 80%;
  }
  
  .badge {
    display: inline-block;
    padding: 4px 10px;
    background: #3b82f6;
    font-size: 0.75rem;
    border-radius: 6px;
    margin-bottom: 8px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
  }
  
  .hero-content h1 {
    margin: 5px 0;
    font-size: 2rem;
    font-weight: 700;
  }
  
  .description {
    opacity: 0.85;
    font-size: 1rem;
  }
  
  /* ----------------------------------------------- */
  /* Body Content */
  /* ----------------------------------------------- */
  .tutorial-body {
    background: #ffffff;
    padding: 30px;
    border-radius: 16px;
    line-height: 1.75;
    font-size: 1.05rem;
    color: #1a1a1a;
  }
  
  /* Styled HTML content inside v-html */
  .tutorial-body h1,
  .tutorial-body h2,
  .tutorial-body h3 {
    margin-top: 25px;
    font-weight: 700;
    color: #111;
  }
  
  .tutorial-body h1 {
    font-size: 1.9rem;
  }
  .tutorial-body h2 {
    font-size: 1.5rem;
  }
  .tutorial-body h3 {
    font-size: 1.25rem;
  }
  
  .tutorial-body p {
    margin: 15px 0;
    color: #444;
  }
  
  .tutorial-body ul {
    margin: 15px 0;
    padding-left: 20px;
  }
  
  .tutorial-body li {
    margin-bottom: 8px;
  }
  
  .tutorial-body blockquote {
    background: #f1f5f9;
    padding: 15px 20px;
    border-left: 4px solid #3b82f6;
    border-radius: 8px;
    margin: 20px 0;
    font-style: italic;
  }
  
  .tutorial-body table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  
  .tutorial-body th,
  .tutorial-body td {
    padding: 12px;
    border: 1px solid #e5e7eb;
    text-align: left;
  }
  
  .tutorial-body th {
    background: #f8fafc;
    font-weight: 700;
  }
  </style>
  