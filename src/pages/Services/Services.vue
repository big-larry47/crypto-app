<template>
  <div class="page">
      <Header />
      <HeroSection />
      <PricingCardsSection />
      <PricingFeaturesSection />
      <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import HeroSection from './Sections/HeroSection.vue'
import PricingCardsSection from './Sections/PricingCardsSection.vue'
import PricingFeaturesSection from './Sections/PricingFeaturesSection.vue'

</script>