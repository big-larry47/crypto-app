<template>
  <section class="hero">
    <!-- Spline 3D Background -->
    <div class="spline-container">
      <spline-viewer url="https://prod.spline.design/IaX2SOcB2bFQFs5P/scene.splinecode"></spline-viewer>    </div>

    <div class="overlay"></div>

    <div class="hero-container">
      <!-- Left content -->
      <div class="hero-content">
        <h1>
          More than <span>7.5 million</span> users have<br />
          joined <span>CryptoRiq</span><br />
          Welcome to explore new<br />
          experience
        </h1>

        <div class="hero-form">
          <input type="text" placeholder="Enter mobile phone number/email" />
          <button>Experience now</button>
        </div>

        <p class="download-text">Download our app for a better experience</p>

        <div class="store-buttons">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            class="store-btn"
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            class="store-btn"
          />
        </div>
      </div>

      <!-- Right side (Phone image) -->
      <div class="hero-image">
        <img
          src="https://cdn.dribbble.com/userupload/8282265/file/original-6612cd516a57ad9e080d26e9f99d3b9f.png?resize=400x0"
          alt="App Preview"
        />
      </div>
    </div>

    <!-- Crypto Ticker -->
    <div class="crypto-ticker">
      <div class="ticker-track">
        <div class="ticker-item negative">
          <span class="ticker-name">BTC</span>
          <span class="ticker-price">$42,185.23</span>
          <span class="ticker-change">-0.6005%</span>
        </div>
        <div class="ticker-item positive">
          <span class="ticker-name">SOL</span>
          <span class="ticker-price">$185.6108</span>
          <span class="ticker-change">+0.2275%</span>
        </div>
        <div class="ticker-item positive">
          <span class="ticker-name">BCH</span>
          <span class="ticker-price">$549.03</span>
          <span class="ticker-change">+0.0273%</span>
        </div>
        <div class="ticker-item positive">
          <span class="ticker-name">XRP</span>
          <span class="ticker-price">$2.50666</span>
          <span class="ticker-change">+1.05%</span>
        </div>
        <div class="ticker-item positive">
          <span class="ticker-name">LTC</span>
          <span class="ticker-price">$95.98</span>
          <span class="ticker-change">+1.99%</span>
        </div>
        <div class="ticker-item positive">
          <span class="ticker-name">USDC</span>
          <span class="ticker-price">$1.0003</span>
          <span class="ticker-change">+0.04%</span>
        </div>
        <div class="ticker-item positive">
          <span class="ticker-name">DOGE</span>
          <span class="ticker-price">$0.1823</span>
          <span class="ticker-change">+2.15%</span>
        </div>
        <!-- Duplicate for seamless loop -->
        <div class="ticker-item negative">
          <span class="ticker-name">BTC</span>
          <span class="ticker-price">$42,185.23</span>
          <span class="ticker-change">-0.6005%</span>
        </div>
        <div class="ticker-item positive">
          <span class="ticker-name">SOL</span>
          <span class="ticker-price">$185.6108</span>
          <span class="ticker-change">+0.2275%</span>
        </div>
        <div class="ticker-item positive">
          <span class="ticker-name">BCH</span>
          <span class="ticker-price">$549.03</span>
          <span class="ticker-change">+0.0273%</span>
        </div>
        <div class="ticker-item positive">
          <span class="ticker-name">XRP</span>
          <span class="ticker-price">$2.50666</span>
          <span class="ticker-change">+1.05%</span>
        </div>
        <div class="ticker-item positive">
          <span class="ticker-name">LTC</span>
          <span class="ticker-price">$95.98</span>
          <span class="ticker-change">+1.99%</span>
        </div>
        <div class="ticker-item positive">
          <span class="ticker-name">USDC</span>
          <span class="ticker-price">$1.0003</span>
          <span class="ticker-change">+0.04%</span>
        </div>
        <div class="ticker-item positive">
          <span class="ticker-name">DOGE</span>
          <span class="ticker-price">$0.1823</span>
          <span class="ticker-change">+2.15%</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Load Spline viewer script
  const script = document.createElement('script');
  script.type = 'module';
  script.src = 'https://unpkg.com/@splinetool/viewer@1.10.99/build/spline-viewer.js';
  document.head.appendChild(script);
});
</script>

<style scoped>
.hero {
  position: relative;
  height: 90vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.spline-container {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.spline-container spline-viewer {
  width: 100%;
  height: 100%;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 15, 0.4);
  backdrop-filter: blur(1px);
  z-index: 1;
}

.hero-container {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  width: 90%;
  margin: auto;
  padding: 80px 0;
  gap: 60px;
}

.hero-content {
  max-width: 55%;
}

.hero-content h1 {
  font-size: 3.6rem;
  font-weight: 500;
  line-height: 1.3;
  color: #fff;
}

.hero-content h1 span {
  color: #fff;
  font-weight: 700;
}

.hero-form {
  display: flex;
  margin-top: 2rem;
  gap: 1rem;
}

.hero-form input {
  flex: 1;
  padding: 14px 20px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
}

.hero-form input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.hero-form button {
  padding: 14px 24px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;
}

.hero-form button:hover {
  background: rgba(255, 255, 255, 0.25);
}

.download-text {
  margin-top: 2rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
}

.store-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.store-btn {
  height: 44px;
  cursor: pointer;
  transition: transform 0.3s ease;
  filter: brightness(0.9);
}

.store-btn:hover {
  transform: scale(1.05);
  filter: brightness(1);
}

.hero-image img {
  width: 320px;
  max-width: 100%;
  display: block;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

/* Crypto Ticker */
.crypto-ticker {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  padding: 12px 0;
  z-index: 3;
}

.ticker-track {
  display: flex;
  gap: 2rem;
  animation: scroll 30s linear infinite;
  white-space: nowrap;
  padding: 0 5%;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.ticker-item {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.95rem;
  padding: 0 1rem;
}

.ticker-name {
  font-weight: 600;
  color: #fff;
}

.ticker-price {
  color: #fff;
  font-weight: 500;
}

.ticker-change {
  font-weight: 500;
}

.ticker-item.positive .ticker-change {
  color: #00c853;
}

.ticker-item.negative .ticker-change {
  color: #ff1744;
}

/* Responsive */
@media (max-width: 1000px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
    padding-top: 80px;
  }

  .hero-content {
    max-width: 90%;
  }

  .hero-image {
    margin-top: 2rem;
  }

  .hero-form {
    flex-direction: column;
  }

  .hero-form button {
    width: 100%;
  }
}
</style>