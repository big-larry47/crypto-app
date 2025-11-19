<template>
    <section class="investment-section">
      <div class="container">
        <h2 class="title">Investment Portfolio</h2>
        <p class="subtitle">
          Simple and safe. Search popular investments and earn income immediately
        </p>
  
        <div class="portfolio-grid">
          <div class="portfolio-row" v-for="(item, i) in investments" :key="i">
            <div class="col left">
              <div class="icons">
                <img
                  v-for="(icon, idx) in item.icons"
                  :key="idx"
                  :src="icon"
                  :alt="item.name + '-icon-' + idx"
                />
              </div>
  
              <div class="meta">
                <div class="pair">{{ item.name }}</div>
                <div class="meta-row">
                  <div class="meta-block">
                    <div class="label">APR</div>
                    <div class="value">{{ item.apr }}</div>
                  </div>
                  <div class="meta-block">
                    <div class="label">Operating Time</div>
                    <div class="value">{{ item.time }}</div>
                  </div>
                </div>
              </div>
  
              <button class="invest-btn">Invest</button>
            </div>
  
            <div class="col right" v-if="item.right">
              <div class="icons">
                <img
                  v-for="(icon, idx) in item.right.icons"
                  :key="idx"
                  :src="icon"
                  :alt="item.right.name + '-icon-' + idx"
                />
              </div>
  
              <div class="meta">
                <div class="pair">{{ item.right.name }}</div>
                <div class="meta-row">
                  <div class="meta-block">
                    <div class="label">APR</div>
                    <div class="value">{{ item.right.apr }}</div>
                  </div>
                  <div class="meta-block">
                    <div class="label">Operating Time</div>
                    <div class="value">{{ item.right.time }}</div>
                  </div>
                </div>
              </div>
  
              <button class="invest-btn">Invest</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const CDN =
    "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@master/128/color";
  
  const investments = [
    {
      icons: [`${CDN}/eth.png`, `${CDN}/mana.png`],
      name: "ETH + MANA",
      apr: "0.3–0.5%",
      time: "7 Days",
      right: {
        icons: [`${CDN}/btc.png`, `${CDN}/eth.png`, `${CDN}/xrp.png`],
        name: "BTC + ETH + XRP",
        apr: "0.5–0.6%",
        time: "15 Days",
      },
    },
    {
      icons: [
        "https://via.placeholder.com/64/ff8c42/ffffff?text=MX",
        `${CDN}/eth.png`,
        `${CDN}/btc.png`,
      ],
      name: "MX + ETH + BTC",
      apr: "0.6–0.8%",
      time: "30 Days",
      right: {
        icons: [`${CDN}/eth.png`, `${CDN}/trx.png`],
        name: "ETH + TRX",
        apr: "0.8–1%",
        time: "60 Days",
      },
    },
    {
      icons: [
        `${CDN}/doge.png`,
        "https://via.placeholder.com/64/7acb6b/ffffff?text=LUNA",
        `${CDN}/bch.png`,
      ],
      name: "DOGE + LUNA + BCH",
      apr: "1–1.2%",
      time: "90 Days",
    },
  ];
  </script>
  
  <style scoped>
  /* ===== Section Layout ===== */
  .investment-section {
    background-color: #0b0b12;
    color: #e4e4eb;
    padding: 90px 20px;
    text-align: center;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  }
  
  /* ===== Container (wide) ===== */
  .container {
    max-width: 1400px;
    margin: 0 auto;
  }
  
  /* ===== Heading ===== */
  .title {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 14px;
    color: #f5f5fa;
  }
  
  .subtitle {
    font-size: 17px;
    color: #a8a8b5;
    margin-bottom: 64px;
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }
  
  /* ===== Grid ===== */
  .portfolio-grid {
    display: flex;
    flex-direction: column;
    border-top: 1px solid #1f1f27;
  }
  
  /* ===== Row ===== */
  .portfolio-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 38px 0;
    border-bottom: 1px solid #1f1f27;
    transition: background 0.2s ease;
    gap: 120px; /* <<< Added horizontal gap between left & right columns */
  }
  
  .portfolio-row:hover {
    background: rgba(255, 255, 255, 0.02);
  }
  
  /* ===== Columns ===== */
  .col {
    display: flex;
    align-items: center;
    gap: 48px;
    flex: 1;
    min-width: 0;
  }
  
  /* ===== Icons ===== */
  .icons {
    display: flex;
    align-items: center;
  }
  
  .icons img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: -10px;
    border: 2px solid #0b0b12;
    background: #0b0b12;
  }
  
  /* ===== Text Meta ===== */
  .meta {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 0;
  }
  
  .pair {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 10px;
  }
  
  .meta-row {
    display: flex;
    gap: 40px;
  }
  
  .meta-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.4;
  }
  
  .label {
    font-size: 13px;
    color: #8c8c99;
    margin-bottom: 4px;
  }
  
  .value {
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
  }
  
  /* ===== Buttons ===== */
  .invest-btn {
    background: transparent;
    border: 1px solid #3a3a4a;
    color: #e9e9f4;
    padding: 8px 22px;
    border-radius: 24px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .invest-btn:hover {
    background: #00d4ff;
    transform: translateY(-1px);
    color: #0b0b12;
    
  }
  
  /* ===== Right Alignment ===== */
  .right {
    justify-content: flex-end;
    text-align: right;
  }
  
  /* ===== Responsive ===== */
  @media (max-width: 1024px) {
    .title {
      font-size: 34px;
    }
  
    .portfolio-row {
      flex-direction: column;
      text-align: center;
      gap: 28px;
      padding: 28px 0;
    }
  
    .col {
      justify-content: center;
      gap: 24px;
    }
  
    .meta {
      align-items: center;
    }
  
    .meta-row {
      gap: 24px;
    }
  
    .invest-btn {
      margin-top: 10px;
    }
  }
  </style>
  