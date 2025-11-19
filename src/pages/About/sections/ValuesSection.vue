<template>
    <section class="security-overview">
      <!-- Header Section -->
      <div class="section-header">
        <h2 class="main-title">OUR VALUES,</h2>
        <p class="main-description">DESIGNED TO GIVE YOU CONTROL</p>
      </div>
  
      <!-- Top Row (2 Cards) -->
      <div class="top-section">
        <div v-for="(item, index) in values.slice(0, 2)" :key="index" class="card">
          <h3 class="title">{{ item.title }}</h3>
          <p class="description">{{ item.description }}</p>
        </div>
      </div>
  
      <!-- Bottom Row (2 Cards) -->
      <div class="bottom-section">
        <div v-for="(item, index) in values.slice(2)" :key="index" class="card">
          <h3 class="title">{{ item.title }}</h3>
          <p class="description">{{ item.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const values = [
    {
      title: "TRUST",
      description:
        "To be fully in control you must have trust in your foundation. In order to succeed, the best traders need a platform built on security and resilience. With Cryptoriq, you trade with confidence, backed by our legacy of reliability — even in the most volatile of markets.",
    },
    {
      title: "LIQUIDITY",
      description:
        "Speed and precision define the masters of any field. CryptoRiq's deep liquidity ensures seamless execution at any scale — so you’re always in control, no matter the market conditions.",
    },
    {
      title: "TECHNOLOGY",
      description:
        "Flawless execution is the key to mastering trading. CryptoRiq's cutting-edge technology delivers stability, ultra-low latency, and continuous uptime — keeping you focused on your next move.",
    },
    {
      title: "TOOLS",
      description:
        "Success demands the right tools. Mastering your trading comes from having access to the most advanced trading features, empowering you to execute with precision and stay in control.",
    },
  ]
  </script>
  
  <style scoped>
.security-overview {
  position: relative;
  background-color: #0b0b10;
  color: #ffffff;
  padding: 60px 40px; /* reduced from 100px 60px */
  font-family: 'Inter', sans-serif;
  text-align: center;
  overflow: hidden;
}

/* === Header === */
.section-header {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto 60px; /* reduced from 100px */
}

.main-title {
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.main-description {
  font-size: 1.1rem;
  color: #bdbdbd;
  line-height: 1.6;
  font-weight: 500;
}

/* === Top and Bottom Sections === */
.top-section,
.bottom-section {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px; /* slightly tighter gap */
  margin-bottom: 50px; /* reduced from 80px */
}

/* === Card === */
.card {
  border: 1px solid #2b2b34;
  border-radius: 18px;
  text-align: center;
  padding: 50px 40px 40px; /* slightly tighter padding */
  width: 520px;
  position: relative;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  background: #0d0d14;
}

.card:hover {
  transform: translateY(-6px);
  border-color: #3a3a45;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
}

/* === Text === */
.title {
  font-size: 1.45rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #fff;
}

.description {
  font-size: 1rem;
  color: #bdbdbd;
  line-height: 1.7;
  max-width: 400px;
  margin: 0 auto;
}

/* === Responsive === */
@media (max-width: 1100px) {
  .card {
    width: 100%;
    max-width: 480px;
  }
}

@media (max-width: 768px) {
  .section-header {
    margin-bottom: 50px;
  }
  .card {
    max-width: 100%;
  }
}
</style>
