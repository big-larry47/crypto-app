<template>
    <div class="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
  
      <!-- Top App Bar -->
      <div class="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-light dark:bg-background-dark">
        <div class="flex size-12 shrink-0 items-center">
          <span class="material-symbols-outlined text-gray-500 dark:text-gray-400 text-2xl">menu</span>
        </div>
        <h2 class="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Market</h2>
        <div class="flex w-12 items-center justify-end">
          <button class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-gray-500 dark:text-gray-400 gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <span class="material-symbols-outlined text-2xl">search</span>
          </button>
        </div>
      </div>
  
      <!-- Segmented Buttons (Categories) -->
      <div class="px-4 py-3">
        <div class="flex h-10 flex-1 items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-800 p-1">
          <label
            v-for="(cat, idx) in categories"
            :key="idx"
            class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 
                   transition-colors text-gray-600 dark:text-gray-400 text-sm font-medium leading-normal"
            :class="cat.active ? 'bg-white dark:bg-gray-900 shadow-[0_0_4px_rgba(0,0,0,0.1)] text-gray-900 dark:text-white' : ''"
          >
            <span class="truncate">{{ cat.name }}</span>
            <input type="radio" class="invisible w-0" :value="cat.name" v-model="activeCategory" />
          </label>
        </div>
      </div>
  
      <!-- Crypto List -->
      <div class="flex flex-col px-4 space-y-2 pb-4">
        <div
          v-for="(coin, idx) in filteredCryptos"
          :key="idx"
          class="flex items-center gap-4 bg-transparent min-h-[72px] py-2 justify-between"
        >
          <div class="flex items-center gap-4 flex-1">
            <img
              class="aspect-square rounded-full size-12"
              :alt="coin.name + ' logo'"
              :src="coin.logo"
            />
            <div class="flex flex-col justify-center">
              <p class="text-gray-900 dark:text-white text-base font-semibold leading-normal line-clamp-1">{{ coin.name }}</p>
              <p class="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">{{ coin.symbol }}/{{ coin.pair }}</p>
            </div>
          </div>
  
          <!-- Chart -->
          <div class="w-20 shrink-0">
            <svg class="w-full h-8" fill="none" preserveAspectRatio="none" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
              <path :d="coin.chartPath" stroke="#FF453A" stroke-width="2"></path>
            </svg>
          </div>
  
          <!-- Price & Change -->
          <div class="flex flex-col justify-center items-end shrink-0 w-28">
            <p class="text-gray-900 dark:text-white text-base font-medium leading-normal">${{ coin.price.toLocaleString() }}</p>
            <p :class="coin.change < 0 ? 'text-red-500' : 'text-green-500'" class="text-sm font-normal leading-normal">
              {{ coin.change.toFixed(2) }}%
            </p>
          </div>
        </div>
      </div>
      
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  // Categories
  const categories = ref([
    { name: 'Web3', active: true },
    { name: 'Forex', active: false }
  ])
  const activeCategory = ref('Web3')
  
  // Cryptocurrencies (with chartPath for SVG)
  const cryptocurrencies = ref([
    { name: 'Bitcoin', symbol: 'BTC', pair: 'USDT', price: 67321.84, change: -2.14, logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClEHew6JQAgAt_SmTyYlJ1wk-LcTDZr1Z-1lJpCTHF6UIxzweZBDinSzGyOEE1-2WjuDqrRS6_mNxidx3f8s9qgZCLk-_WpKgm24Qw1CNLmIqE2q6JFhFpyQnLKsBqi1S9JZ_2uC8DW1qDNwVTkZXIOuDcnaoz2NedgAZXynUyvxQy1gcnSpTtM2Z7s23ZJEpjgX9jRdPKambjIk8_N5zzRU3Va6j9SZtzVGe11sny1yaTZRmrRmreZGVkrXIzBPsXlitZXvlSj91o', chartPath: 'M0 20L10 15L20 22L30 18L40 25L50 20L60 14L70 18L80 12L90 16L100 10' },
    { name: 'Ethereum', symbol: 'ETH', pair: 'USDT', price: 3495.12, change: -3.01, logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjevvjkk0dTnpRUrEozqaWvqDzm1W-zM8MEmsBh3wJG8QFcE6JJ1bpzFrU1Bsrir6NbqtkTzCZ1yq1-MKbzvoSZbn2B1_QzZ_bt35BglcoVONi55gHtbUaCMguy4vA4r1iRI-VwwcIam4x8Yq029u89scshTgDIDncGonAyXC2iaWPFUWvi8hFxoj2kMaVrDklmFxYE0EFXLSqTn2FmK2RlOnK7ELfQaPC5KuO8j6hc517Le0rutIsRQmQ81VYn_k0gcn_PlNJ9Pb8', chartPath: 'M0 22L10 25L20 20L30 24L40 18L50 21L60 15L70 19L80 14L90 18L100 12' },
    // Add the rest similarly
  ])
  
  const filteredCryptos = computed(() =>
    cryptocurrencies.value.filter(coin => {
      // Example filter by category, adjust if you have actual category mapping
      return true
    })
  )
  </script>
  
  <style scoped>
  body {
    min-height: max(884px, 100dvh);
  }
  .size-12 {
    width: 3rem;
    height: 3rem;
  }
  .material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  }
  .line-clamp-1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  </style>
  