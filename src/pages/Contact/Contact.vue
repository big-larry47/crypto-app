<template>
  <div>
    <Header />
    <HeroSection title="Let's connect! I'm Bud, here to help." />
    <MainSection />
    <Footer />
  </div>
</template>

// In crypto-app/src/pages/Contact/Contact.vue
<script setup>
import Header from '@/components/Header.vue' 
import Footer from '@/components/Footer.vue' 
import HeroSection from './Sections/HeroSection.vue' 
import MainSection from './Sections/MainSection.vue'
</script>

<style scoped>
/* Add Contact page-specific styles here if needed */
</style>
