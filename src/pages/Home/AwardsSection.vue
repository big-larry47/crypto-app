<template>
    <section class="awards-section">
      <!-- 🌌 Spline background -->
  
  
      <div class="container">
        <h2 class="title">Our Global Awards</h2>
        <p class="subtitle">Recognized excellence across the crypto and forex industry</p>
  
        <div class="awards-grid">
          <div v-for="(award, index) in awards" :key="index" class="award-item">
            <div class="award-image-wrapper">
              <img :src="award.image" :alt="award.name" class="award-img" />
            </div>
            <h3 class="award-name">{{ award.name }}</h3>
            <p class="award-year">{{ award.year }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import award7 from '@/assets/award7.png'
  import award2 from '@/assets/award2.png'
  import award3 from '@/assets/award3.png'
  import award4 from '@/assets/award4.png'
  import award5 from '@/assets/award5.png'
  import award6 from '@/assets/award6.png'
  import award1 from '@/assets/award.png'
  import award8 from '@/assets/award8.png'
  
  const awards = [
    { name: "Best Forex Broker", year: "2022", image: award7 },
    { name: "Best Cryptocurrency Trading", year: "2020", image: award2 },
    { name: "Best Customer support", year: "2024", image: award3 },
    { name: "Best Customer Service", year: "2023", image: award4 },
    { name: "Most Trusted Broker", year: "2020", image: award5 },
    { name: "Best International Trading Platform", year: "2023", image: award6 },
    { name: "Outstanding Platform Security", year: "2022", image: award1 },
    { name: "Leading Trading Innovation", year: "2021", image: award8 },
  ]
  </script>
  
  <style scoped>
  .awards-section {
    position: relative;
    background-color: #0b0b12;
    color: #e5e5f0;
    padding: 120px 20px;
    text-align: center;
    font-family: 'Poppins', 'Segoe UI', sans-serif;
    overflow: hidden;
  }
  
  /* 🌌 Background container */
  .spline-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
  }
  
  /* Disable all interactions on the Spline background */
.spline-bg spline-viewer.spline-viewer-disabled {
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: none; /* 🔒 disables drag, click, and hover interactions */
}

  
  /* Gradient overlay for subtle visual depth */
  .awards-section::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: 
    linear-gradient(
      180deg,
      rgba(11, 11, 18, 0.85) 0%,   /* darkened from 0.7 → 0.85 */
      rgba(11, 11, 18, 0.6) 50%,   /* darkened from 0.4 → 0.6 */
      rgba(11, 11, 18, 0.85) 100%  /* darkened from 0.7 → 0.85 */
    ),
    radial-gradient(circle at top left, rgba(255, 255, 255, 0.03), transparent 50%), /* slightly darker spots */
    radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.03), transparent 50%);
}

  
  /* Ensure content stays above spline */
  .container {
    position: relative;
    z-index: 2;
    max-width: 1300px;
    margin: 0 auto;
  }
  
  .title {
    font-size: 2.4rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 12px;
    letter-spacing: 0.5px;
  }
  
  .subtitle {
    color: #a9a9bb;
    font-size: 1.1rem;
    margin-bottom: 70px;
  }
  
  /* Awards grid */
  .awards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 60px 40px;
    justify-items: center;
  }
  
  .award-item {
    text-align: center;
    transition: transform 0.3s ease;
  }
  
  .award-image-wrapper {
    overflow: hidden;
    border-radius: 18px;
    display: inline-block;
    transition: transform 0.4s ease;
  }
  
  .award-img {
    width: 170px;
    height: 170px;
    object-fit: contain;
    border-radius: 18px;
    transition: transform 0.4s ease, filter 0.3s ease;
  }
  
  .award-image-wrapper:hover .award-img {
    transform: scale(1.12);
    filter: brightness(1.15);
  }
  
  .award-name {
    font-size: 1.05rem;
    font-weight: 700;
    color: #ffffff;
    margin-top: 16px;
    margin-bottom: 4px;
  }
  
  .award-year {
    font-size: 0.95rem;
    color: #9a9ab5;
  }
  
  @media (max-width: 768px) {
    .title {
      font-size: 2rem;
    }
  
    .subtitle {
      margin-bottom: 50px;
    }
  
    .award-img {
      width: 130px;
      height: 130px;
    }
  }
  </style>
  