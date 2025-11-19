<!-- src/pages/News/sections/HeroSection.vue -->
<template>
    <section class="news-hero">
      <div class="hero-content">
        <h1>Latest Crypto & Forex News</h1>
        <p>
          Stay updated with the latest trends, insights, and analysis from top
          crypto and forex sources.
        </p>
      </div>
    </section>
  </template>
  
  <style scoped>
.news-hero {
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  height: 40vh;
  background: url('@/assets/bg.JPG') center center / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  overflow: hidden;
}

/* hero text content */
.hero-content {
  position: relative;
  z-index: 1;
  max-width: 700px;
  padding: 0 20px;
}

.hero-content h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #fff;
}

.hero-content p {
  font-size: 1.05rem;
  color: #c5c6ce;
}

/* overlay for better text contrast & reduced brightness */
.news-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(11, 11, 18, 0.6); /* increase opacity to darken */
  z-index: 0;
  backdrop-filter: brightness(0.5); /* reduce brightness of background image */
}

@media (max-width: 768px) {
  .news-hero {
    height: 35vh;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 0.95rem;
  }
}
</style>


  