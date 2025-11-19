<template>
    <section class="portfolio-section">
      <div class="content-wrapper">
        <h2 class="section-title">Build your cryptocurrency portfolio</h2>
  
        <!-- Floating coins container -->
        <div class="icon-container">
          <div
            v-for="(coin, index) in coins"
            :key="index"
            class="coin"
            :style="{
              top: coin.top,
              left: coin.left,
              animationDelay: coin.delay,
              backgroundImage: `url(${coin.icon})`
            }"
          ></div>
        </div>
  
        <!-- Spline viewer above everything -->
        <div class="spline-overlay">
          <spline-viewer
            url="https://prod.spline.design/lPl7dbYHHQealnCP/scene.splinecode"
          ></spline-viewer>
        </div>
  
        <button class="cta-button">
          Go to the trading center to buy your favorite digital currency
        </button>
      </div>
    </section>
  </template>
  
  <script setup>
  if (typeof window !== "undefined") {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js";
    document.head.appendChild(script);
  }
  
  const coins = [
    { icon: '/images/btc.png', top: '60%', left: '85%', delay: '0s' },
    { icon: '/images/eth.png', top: '50%', left: '55%', delay: '0.2s' },
    { icon: '/images/ada.png', top: '30%', left: '45%', delay: '0.4s' },
    { icon: '/images/ltc.png', top: '45%', left: '70%', delay: '0.6s' },
    { icon: '/images/doge.png', top: '65%', left: '25%', delay: '0.8s' },
    { icon: '/images/link.png', top: '40%', left: '35%', delay: '1s' },
    { icon: '/images/sol.png', top: '15%', left: '90%', delay: '1.2s' },
    { icon: '/images/xrp.png', top: '20%', left: '15%', delay: '1.4s' }
  ];
  </script>
  
  <style scoped>
  .portfolio-section {
  position: relative;
  background: linear-gradient(135deg, #1fbd8e 0%, #d8d8e9 50%, #9797a6 100%);
  color: #ffffff;
  padding: 120px 80px;
  font-family: "Inter", sans-serif;
  text-align: center;
  overflow: visible; /* allow content to extend outside */
}

  
  .content-wrapper {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 0 40px;
    position: relative;
    z-index: 1;
  }
  
  .section-title {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 60px;
    color: #fff;
  }
  
  /* Main container */
  .icon-container {
    position: relative;
    background: radial-gradient(ellipse at center, #12121a 0%, #0b0b12 100%);
    border-radius: 30px;
    width: 100%;
    height: 450px;
    margin: 0 auto 60px auto;
    overflow: hidden; /* coins stay inside, but spline is outside */
    border: 1px solid #2b2b34;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    z-index: 2;
  }
  
  /* Floating coins */
  .coin {
    position: absolute;
    width: 70px;
    height: 70px;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    opacity: 0.95;
    animation: float 5s ease-in-out infinite;
    z-index: 3;
  }
  
  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }
  
  /* Spline overlay (completely above container) */
  .spline-overlay {
    position: absolute;
    top: 50%;
    right: 6%;
    transform: translateY(-50%);
    width: 450px;
    height: 450px;
    z-index: 10; /* stays above EVERYTHING */
    pointer-events: none; /* allow clicks below */
  }
  
  spline-viewer {
    width: 100%;
    height: 100%;
    border: none;
  }
  
  /* CTA Button */
  .cta-button {
    background: transparent;
    border: 1px solid #555;
    border-radius: 50px;
    padding: 18px 36px;
    color: #fff;
    font-size: 1.05rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #1a1a25;
    border-color: #777;
    transform: scale(1.03);
  }
  
  /* Responsive */
  @media (max-width: 1024px) {
    .portfolio-section {
      padding: 100px 40px;
    }
    .icon-container {
      height: 380px;
    }
    .coin {
      width: 55px;
      height: 55px;
    }
    .spline-overlay {
      width: 340px;
      height: 340px;
      right: 3%;
    }
  }
  
  @media (max-width: 768px) {
    .portfolio-section {
      padding: 80px 20px;
    }
    .section-title {
      font-size: 2rem;
    }
    .cta-button {
      padding: 14px 28px;
      font-size: 0.95rem;
    }
    .spline-overlay {
      width: 260px;
      height: 260px;
      right: 0;
    }
  }
  </style>
  