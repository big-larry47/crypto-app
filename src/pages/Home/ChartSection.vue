<template>
  <div class="dashboard-wrapper">
    <div class="dashboard">
      <!-- Loading State -->
      <div v-if="loading" class="loading">Loading live data...</div>
      
      <!-- Error State -->
      <div v-if="error" class="error">{{ error }}</div>
      
      <!-- Top Cards -->
      <div v-if="!loading && !error" class="top-cards">
        <div v-for="coin in topCoins" :key="coin.id" class="card">
          <div class="card-header">
            <img 
              :src="getCoinIcon(coin.id)" 
              :alt="coin.symbol"
              class="coin-icon-img"
              @error="handleImageError"
            />
            <div>
              <div class="coin-name">{{ coin.symbol }}</div>
              <div :class="['coin-change', coin.change >= 0 ? 'positive' : 'negative']">
                {{ coin.change >= 0 ? '▲' : '▼' }} {{ coin.change.toFixed(2) }}%
              </div>
            </div>
          </div>
          <div class="chart-container">
            <div class="dashed-line"></div>
            <svg width="100%" height="90" viewBox="0 0 100 50" preserveAspectRatio="none">
              <defs>
                <linearGradient :id="'gradient' + coin.id" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" :style="{ stopColor: coin.change >= 0 ? '#22c55e' : '#ef4444', stopOpacity: 0.3 }" />
                  <stop offset="100%" :style="{ stopColor: coin.change >= 0 ? '#22c55e' : '#ef4444', stopOpacity: 0 }" />
                </linearGradient>
              </defs>
              <path :d="coin.sparkline" fill="none" :stroke="coin.change >= 0 ? '#22c55e' : '#ef4444'" stroke-width="2" />
              <path :d="coin.sparkline + ' L 100,50 L 0,50 Z'" :fill="'url(#gradient' + coin.id + ')'" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Crypto List -->
      <div v-if="!loading && !error" class="crypto-list">
        <div v-for="crypto in cryptoList" :key="crypto.id" class="crypto-row">
          <div class="crypto-info">
            <img 
              :src="getCoinIcon(crypto.id)" 
              :alt="crypto.symbol"
              class="crypto-icon-img"
              @error="handleImageError"
            />
            <div class="crypto-symbol">{{ crypto.symbol }}/USDT</div>
          </div>
          <div class="crypto-price">${{ formatPrice(crypto.price) }}</div>
          <div :class="['crypto-change', crypto.change >= 0 ? 'positive' : 'negative']">
            {{ crypto.change >= 0 ? '+' : '' }}{{ crypto.change.toFixed(2) }}%
          </div>
          <div class="crypto-volume">${{ formatVolume(crypto.volume) }}</div>
          <div class="crypto-chart">
            <svg width="120" height="40" viewBox="0 0 100 40">
              <path 
                :d="crypto.sparkline" 
                fill="none" 
                :stroke="crypto.change >= 0 ? '#22c55e' : '#ef4444'" 
                stroke-width="2"
                opacity="0.8"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChartSection',
  data() {
    return {
      topCoins: [],
      cryptoList: [],
      loading: true,
      error: null,
      refreshInterval: null
    };
  },
  mounted() {
    this.fetchData();
    this.refreshInterval = setInterval(() => {
      this.fetchData();
    }, 60000); // Refresh every 60 seconds
  },
  beforeUnmount() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  },
  methods: {
    getCoinIcon(coinId) {
      // Map coin IDs to their icon names in the cryptocurrency-icons package
      const iconMap = {
        'bitcoin': 'btc',
        'ethereum': 'eth',
        'solana': 'sol',
        'cardano': 'ada',
        'polkadot': 'dot',
        'cosmos': 'atom',
        'bitcoin-cash': 'bch',
        'ripple': 'xrp',
        'lido-dao': 'ldo'
      };
      
      const iconName = iconMap[coinId] || coinId;
      // Using the color version from cryptocurrency-icons
      return `https://cdn.jsdelivr.net/npm/cryptocurrency-icons@0.18.1/svg/color/${iconName}.svg`;
    },
    handleImageError(event) {
      // Fallback to a generic icon if the specific coin icon is not found
      event.target.src = 'https://cdn.jsdelivr.net/npm/cryptocurrency-icons@0.18.1/svg/color/generic.svg';
    },
    async fetchData() {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,cardano,polkadot,cosmos,bitcoin-cash,ripple,lido-dao&order=market_cap_desc&sparkline=true&price_change_percentage=24h'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const data = await response.json();
        
        const processedCoins = data.map(coin => ({
          id: coin.id,
          symbol: coin.symbol.toUpperCase(),
          name: coin.name,
          price: coin.current_price,
          change: coin.price_change_percentage_24h || 0,
          volume: coin.total_volume,
          sparkline: this.formatSparkline(coin.sparkline_in_7d?.price || [])
        }));
        
        this.topCoins = processedCoins.slice(0, 4);
        this.cryptoList = processedCoins;
        this.loading = false;
        this.error = null;
      } catch (err) {
        console.error('Error fetching data:', err);
        this.error = 'Failed to load cryptocurrency data';
        this.loading = false;
      }
    },
    async fetchForexData() {
      try {
        const forexPairs = [
          { symbol: 'EUR/USD', base: 'EUR', quote: 'USD', flag: '🇪🇺' },
          { symbol: 'GBP/USD', base: 'GBP', quote: 'USD', flag: '🇬🇧' },
          { symbol: 'USD/JPY', base: 'USD', quote: 'JPY', flag: '🇯🇵' },
          { symbol: 'AUD/USD', base: 'AUD', quote: 'USD', flag: '🇦🇺' },
          { symbol: 'USD/CHF', base: 'USD', quote: 'CHF', flag: '🇨🇭' },
          { symbol: 'USD/CAD', base: 'USD', quote: 'CAD', flag: '🇨🇦' }
        ];

        const forexData = forexPairs.map((pair, idx) => {
          const baseRates = {
            'EUR/USD': 1.0850,
            'GBP/USD': 1.2650,
            'USD/JPY': 149.50,
            'AUD/USD': 0.6550,
            'USD/CHF': 0.8850,
            'USD/CAD': 1.3650
          };
          
          const baseRate = baseRates[pair.symbol];
          const randomVariation = (Math.random() - 0.5) * 0.02;
          const price = baseRate * (1 + randomVariation);
          const change = (Math.random() - 0.5) * 2;
          
          return {
            symbol: pair.symbol,
            flag: pair.flag,
            price: price,
            change: change,
            spread: '0.00' + (Math.floor(Math.random() * 5) + 1) + '0',
            sparkline: this.generateForexSparkline(change >= 0)
          };
        });

        this.forexList = forexData;
      } catch (err) {
        console.error('Error generating forex data:', err);
      }
    },
    generateForexSparkline(isPositive) {
      const points = [];
      let y = 25;
      
      for (let i = 0; i <= 100; i += 10) {
        const variation = (Math.random() - 0.5) * 8;
        y = Math.max(10, Math.min(35, y + variation + (isPositive ? -0.2 : 0.2)));
        points.push(`${i === 0 ? 'M' : 'L'} ${i},${y.toFixed(1)}`);
      }
      
      return points.join(' ');
    },
    formatSparkline(prices) {
      if (!prices || prices.length === 0) return 'M 0,25 L 100,25';
      
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      const range = maxPrice - minPrice || 1;
      
      const points = prices.map((price, i) => {
        const x = (i / (prices.length - 1)) * 100;
        const y = 40 - ((price - minPrice) / range) * 30;
        return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)},${y.toFixed(1)}`;
      });
      
      return points.join(' ');
    },
    formatPrice(price) {
      return price >= 1 ? price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : price.toFixed(4);
    },
    formatVolume(volume) {
      if (volume >= 1e9) return (volume / 1e9).toFixed(2) + 'B';
      if (volume >= 1e6) return (volume / 1e6).toFixed(2) + 'M';
      return volume.toLocaleString();
    }
  }
};
</script>

<style scoped>
.dashboard-wrapper {
  background: #0b0b12;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px;
  color: #fff;
}

.dashboard {
  max-width: 1400px;
  width: 100%;
}

.loading, .error {
  text-align: center;
  padding: 60px 20px;
  font-size: 20px;
  color: #9ca3af;
}

.error {
  color: #ef4444;
}

.top-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

@media (max-width: 1200px) {
  .top-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .top-cards {
    grid-template-columns: 1fr;
  }
}

.card {
  background: transparent;
  border: 1px solid #1f2537;
  border-radius: 12px;
  padding: 28px;
  position: relative;
  overflow: hidden;
  min-height: 130px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.coin-icon-img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.05);
  padding: 8px;
}

.coin-name {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 6px;
}

.coin-change {
  font-size: 18px;
  font-weight: 500;
}

.positive {
  color: #22c55e;
}

.negative {
  color: #ef4444;
}

.chart-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90px;
  opacity: 0.6;
}

.dashed-line {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  border-top: 1px dashed #444;
  opacity: 0.3;
}

.tabs {
  display: flex;
  gap: 32px;
  margin-bottom: 24px;
  border-bottom: 1px solid #1f2537;
}

.tab {
  padding: 12px 0;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}

.tab.active {
  color: #22c55e;
  border-bottom-color: #22c55e;
}

.tab.inactive {
  color: #6b7280;
  font-weight: 500;
}

.crypto-list {
  margin-top: 24px;
}

.crypto-row {
  display: grid;
  grid-template-columns: 300px 200px 200px 200px 1fr;
  align-items: center;
  padding: 28px 0;
  border-bottom: 1px solid #1f2537;
}

.crypto-row:last-child {
  border-bottom: none;
}

@media (max-width: 1200px) {
  .crypto-row {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  
  .crypto-chart {
    grid-column: 1 / -1;
  }
}

.crypto-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.crypto-icon-img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.05);
  padding: 6px;
}

.forex-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #1f2537;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
}

.crypto-symbol {
  font-size: 18px;
  font-weight: 500;
}

.crypto-price {
  font-size: 20px;
  font-weight: 600;
}

.crypto-change {
  font-size: 18px;
  font-weight: 600;
}

.crypto-volume {
  font-size: 18px;
  color: #9ca3af;
}

.crypto-chart {
  display: flex;
  justify-content: flex-end;
}

svg {
  display: block;
}
</style>