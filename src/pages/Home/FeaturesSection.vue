<template>
    <section class="exchange-section">
      <!-- Top banner carousel -->
      <div class="banner-carousel">
        <button class="carousel-btn prev" @click="prevSlide">
          <svg viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
        </button>
  
        <div class="banner-wrapper">
          <div
            class="banner"
            v-for="(img, index) in visibleBanners"
            :key="index"
          >
            <img :src="img" alt="banner" />
          </div>
        </div>
  
        <button class="carousel-btn next" @click="nextSlide">
          <svg viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
        </button>
      </div>
  
      <!-- Announcement -->
      <div class="announcement">
        <div class="left">
          <span class="icon">🔊</span>
          <span>About CryptoRiq Pro user funds security processing plan</span>
        </div>
        <a href="#" class="show-more">Show more</a>
      </div>
  
      <!-- Title -->
      <h2 class="exchange-title">
        Is a <span>cryptocurrency exchange</span> for everyone
      </h2>
  
      <!-- Stats Bar -->
      <div class="stats-bar">
        <div class="stat" v-for="(stat, i) in stats" :key="i">
          <h3>{{ stat.value }}</h3>
          <p>{{ stat.label }}</p>
        </div>
      </div>
  
      <!-- Decorative Images -->
      <img src="@/assets/left.png" alt="Left Decoration" class="side-img left" />
      <img src="@/assets/right.png" alt="Right Decoration" class="side-img right" />
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import banner1 from '@/assets/ban.jpg';
  import banner2 from '@/assets/ban1.jpg';
  import banner3 from '@/assets/ban2.jpg';
  import banner4 from '@/assets/ban3.jpg';

  
  const banners = [banner1, banner2, banner3, banner4];
  const startIndex = ref(0);
  const visibleCount = 3;
  
  // Compute the banners that are currently visible
  const visibleBanners = computed(() => {
    return banners.slice(startIndex.value, startIndex.value + visibleCount);
  });
  
  const nextSlide = () => {
    // Slide to the next banner if possible
    if (startIndex.value + visibleCount < banners.length) {
      startIndex.value += 1;
    } else {
      // loop back to start
      startIndex.value = 0;
    }
  };
  
  const prevSlide = () => {
    if (startIndex.value > 0) {
      startIndex.value -= 1;
    } else {
      // loop to the last possible start index
      startIndex.value = banners.length - visibleCount;
    }
  };
  
  const stats = [
    { value: '7.8 million', label: 'Client' },
    { value: '190+', label: 'Supported countries' },
    { value: '$207B+', label: 'Quarterly transaction volume' }
  ];
  </script>
  
  <style scoped>
  .exchange-section {
    position: relative;
    background: #0b0b12;
    color: #fff;
    text-align: center;
    padding: 50px 20px 80px;
    font-family: 'Inter', sans-serif;
    overflow: hidden;
  }
  
  /* Carousel */
  .banner-carousel {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 40px 0 80px 0;
}
  
  .banner-wrapper {
  display: flex;
  gap: 35px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  transition: transform 0.3s ease;
}
  
  .banner {
    flex: 0 0 395px;
    height: 180px;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease;
  }
  
  .banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
  
  /* Carousel Buttons */
  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 35px;
    height: 60px;
    background: rgba(20, 20, 30, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 17.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s ease;
  }
  
  .carousel-btn:hover {
    background: rgba(30, 30, 40, 0.9);
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  .carousel-btn.prev {
    left: calc(50% - 700px);
  }
  
  .carousel-btn.next {
    right: calc(50% - 700px);
  }
  
  .carousel-btn svg {
    width: 14px;
    height: 14px;
    fill: #888;
    transition: fill 0.3s ease;
  }
  
  .carousel-btn:hover svg {
    fill: #fff;
  }
  
  /* Announcement */
  .announcement {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto 90px;
    color: #bbb;
    font-size: 1.1rem;
  }
  
  .announcement .left {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .icon {
    font-size: 1.3rem;
  }
  
  .show-more {
    color: #aaa;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .show-more:hover {
    color: #fff;
  }
  
  /* Title */
  .exchange-title {
    font-size: 2.5rem;
    font-weight: 500;
    color: #ccc;
    margin-bottom: 70px;
  }
  
  .exchange-title span {
    color: #fff;
    font-weight: 600;
  }
  
  /* Stats Bar */
  .stats-bar {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: stretch;
    background: linear-gradient(90deg, rgba(33, 33, 77, 0.4), rgba(50, 50, 90, 0.4));
    border-radius: 100px;
    padding: 18px 40px;
    max-width: 900px;
    margin: 0 auto;
    border: 1px solid rgba(100, 100, 255, 0.3);
    backdrop-filter: blur(8px);
    overflow: hidden;
    z-index: 2;
    box-shadow:
      inset 0 0 20px rgba(0, 255, 255, 0.2),
      0 0 40px rgba(0, 255, 255, 0.1);
  }
  
  .stat {
    flex: 1;
    padding: 10px;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .stat:last-child {
    border-right: none;
  }
  
  .stat h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #fff;
  }
  
  .stat p {
    font-size: 0.9rem;
    color: #aaa;
    margin-top: 6px;
  }
  
  /* Decorative side images */
  .side-img {
    position: absolute;
    width: 490px;
    z-index: 1;
    pointer-events: none;
    top: calc(66% + 120px);
    transform: translateY(-50%);
  }
  
  .side-img.left {
    left: calc(50% - 850px - 100px);
  }
  
  .side-img.right {
    right: calc(50% - 850px - 100px);
  }
  
  /* Responsive */
  @media (max-width: 900px) {
    .carousel-btn {
      width: 20px;
      height: 35px;
    }
  
    .carousel-btn.prev {
      left: 10px;
    }
  
    .carousel-btn.next {
      right: 10px;
    }
  
    .banner {
      flex: 0 0 90%;
      height: 120px;
    }
  
    .stats-bar {
      flex-direction: column;
      gap: 20px;
      border-radius: 30px;
    }
  
    .stat {
      border-right: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  
    .stat:last-child {
      border-bottom: none;
    }
  
    .side-img {
      width: 130px;
      top: calc(50% + 140px);
    }
  
    .side-img.left {
      left: -50px;
    }
  
    .side-img.right {
      right: -50px;
    }
  }
  </style>
  