<template>
  <div class="home-page">
    <Header />
    <HeroSection />
    <FeaturesSection />
    <HowToSection />
    <BannerSection /> 
    <ChartSection />
    <InvestmentPortfolio />
    <PricingSection />
    <SliderSection /> 
    <AwardsSection /> 
    <WhatWeDoSection />
    <FaqSection />
    <PartnerSection />
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import HeroSection from './HeroSection.vue'
import FeaturesSection from './FeaturesSection.vue'
import HowToSection from './HowToSection.vue'
import ChartSection from './ChartSection.vue'
import InvestmentPortfolio from './InvestmentPortfolio.vue'
import PricingSection from './PricingSection.vue'
import SliderSection from './SliderSection.vue'
import AwardsSection from './AwardsSection.vue' 
import BannerSection from './BannerSection.vue'
import WhatWeDoSection from './WhatWeDoSection.vue'
import FaqSection from './FaqSection.vue'
import PartnerSection from './PartnerSection.vue'
import './home.css'
</script>
