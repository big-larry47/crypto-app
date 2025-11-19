<template>
    <section class="trading-ecosystem">
      <h2>A Trading Ecosystem So You Are In Control</h2>
  
      <div class="features-grid">
        <div v-for="(item, index) in features" :key="index" class="feature-card">
          <div class="icon-box">
            <component :is="item.icon" class="icon" />
          </div>
          <span class="label">{{ item.label }}</span>
        </div>
      </div>
  
      <div class="notes">
        <p>*Available through an integration with Thalex Digital Trading Platform Ltd.</p>
        <p>
          **Available on the CryptoRiq Securities platform provided by CryptoRiq Securities Ltd (Astana)
          and CryptoRiq Securities El Salvador S.A de C.V. (El Salvador)
        </p>
      </div>
  
      
    </section>
  </template>
  
  <script setup>
  import { Infinity, BarChart2, Database, TrendingUp, Layers, Coins, Hand, Leaf } from 'lucide-vue-next'
  
  const features = [
    { label: 'PERPETUALS', icon: Infinity },
    { label: 'FUTURES', icon: BarChart2 },
    { label: 'OPTIONS', icon: Database },
    { label: 'SPOT TRADING', icon: TrendingUp },
    { label: 'MARGIN TRADING', icon: Layers },
    { label: 'TOKENISED SECURITIES', icon: Coins },
    { label: 'LENDING', icon: Hand },
    { label: 'BORROWING', icon: Hand },
    { label: 'STAKING', icon: Leaf },
  ]
  </script>
  
  <style scoped>
  .trading-ecosystem {
    padding: 5rem 1rem;
    text-align: center;
    background: #0b0b10;
    color: #fff;
    font-family: 'Inter', sans-serif;
    margin-top: 4rem;
  }
  
  .trading-ecosystem h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 3rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  /* === Grid === */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 0.8rem;
    max-width: 1100px;
    margin: 0 auto 3rem;
  }
  
  /* === Cards === */
  .feature-card {
    display: flex;
    align-items: center;
    background: #14181e;
    border: 1px solid #2a2f35;
    border-radius: 10px;
    overflow: hidden;
    height: 60px; /* compact height */
    transition: all 0.3s ease;
  }
  
  .feature-card:hover {
    border-color: #00d4ff;
    background: #181d24;
    transform: translateY(-2px);
  }
  
  /* === Icon + Label === */
  .icon-box {
    background: #00d4ff;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  .icon {
    width: 22px;
    height: 22px;
    color: #0b0b10;
  }
  
  .label {
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    text-align: left;
    margin-left: 1.2rem;
  }
  
  /* === Notes === */
  .notes {
    max-width: 700px;
    margin: 2rem auto;
    font-size: 0.9rem;
    color: #a3a3a3;
    line-height: 1.5;
  }
  
  /* === Buttons === */
  .buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
  }
  
  .primary-btn,
  .secondary-btn {
    font-weight: 600;
    padding: 0.8rem 2rem;
    border-radius: 8px;
    transition: 0.3s ease;
    cursor: pointer;
  }
  
  .primary-btn {
    background: #00d4ff;
    color: #0b0b10;
    border: none;
  }
  
  .primary-btn:hover {
    background: #33ddff;
  }
  
  .secondary-btn {
    background: transparent;
    color: #00d4ff;
    border: 1px solid #00d4ff;
  }
  
  .secondary-btn:hover {
    background: rgba(0, 212, 255, 0.1);
  }
  </style>