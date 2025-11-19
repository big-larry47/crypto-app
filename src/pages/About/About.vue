<template>
    <div class="about-page">
      <Header />
      <HeroSection />
      <ValuesSection />
      <MissionSection />
      <TradingEcosystem />
      <Footer />

    </div>
  </template>
  
  <script setup>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import HeroSection from './sections/HeroSection.vue'
  import ValuesSection from './sections/ValuesSection.vue'
  import MissionSection from './sections/MissionSection.vue'
  import LeadershipSection from './sections/LeadershipSection.vue'
  import TradingEcosystem from './sections/TradingEcosystem.vue'
  
  import './about.css'
  </script>
