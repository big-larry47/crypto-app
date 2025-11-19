<!-- crypto-app/src/pages/Services/Sections/PricingCardsSection.vue -->

<template>
    <section class="pricing-cards-section">
      <div class="container">
        <div class="pricing-cards">
          <!-- Starter -->
          <div class="pricing-card starter">
            <h3 class="plan-name">Starter</h3>
            <p class="plan-description">Perfect for individuals</p>
            <div class="price">$1,485</div>
            <button class="get-started-btn">Get started</button>
          </div>
  
          <!-- Essentials -->
          <div class="pricing-card essentials">
            <h3 class="plan-name">Essentials</h3>
            <p class="plan-description">Our standard 3D package</p>
            <div class="price">$5,200</div>
            <button class="get-started-btn">Get started</button>
          </div>
  
          <!-- Professional -->
          <div class="pricing-card professional">
            <span class="badge">Most Popular!</span>
            <h3 class="plan-name">Professional</h3>
            <p class="plan-description">Best for offering multiple experiences</p>
            <div class="price">$12,495</div>
            <button class="get-started-btn">Get started</button>
          </div>
  
          <!-- Enterprise -->
          <div class="pricing-card enterprise">
            <h3 class="plan-name">Enterprise</h3>
            <p class="plan-description">Best for global, complex use cases</p>
            <div class="price">$36,000</div>
            <button class="get-started-btn">Get started</button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
/* Section */
.pricing-cards-section {
  padding: 80px 5%;
  color: #fff;
  background: #0b0b12;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.container {
  max-width: 1600px;
  margin: 0 auto;
}

/* Grid */
.pricing-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

/* Base Card */
.pricing-card {
  border-radius: 24px;
  padding: 40px 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: #11141c;
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(4px);
}

/* ---- COLOR THEMES ---- */
.pricing-card.starter {
  background: linear-gradient(135deg, #1f2b3a, #253447);
  border: 1px solid rgba(80, 150, 255, 0.25);
}

.pricing-card.essentials {
  background: linear-gradient(135deg, #0a3336, #0e4b4f);
  border: 1px solid rgba(0, 255, 205, 0.25);
}

.pricing-card.professional {
  background: linear-gradient(135deg, #0d301f, #145f3a);
  border: 1px solid rgba(0, 255, 135, 0.25);
}

.pricing-card.enterprise {
  background: linear-gradient(135deg, #261b38, #3c2b55);
  border: 1px solid rgba(190, 130, 255, 0.25);
}

/* Badge */
.badge {
  position: absolute;
  top: -12px;
  right: 24px;
  background: #00ff9d;
  color: #0b0b12;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: 0 0 12px rgba(0, 255, 135, 0.5);
}

/* Text Styles */
.plan-name {
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #e9f4ff;
}

.plan-description {
  font-size: 1rem;
  margin: 0 0 32px 0;
  color: #e9f4ff;
  opacity: 0.85;
}

.price {
  font-size: 3rem;
  font-weight: 400;
  margin: 0 0 32px 0;
  color: #e9f4ff;
}

/* CTA Button */
.get-started-btn {
  background: linear-gradient(135deg, #10141c, #1a2330);
  color: #d4faff;
  border: 1px solid rgba(0, 188, 255, 0.25);
  border-radius: 50px;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
}

.get-started-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 188, 255, 0.15);
}


/* Responsive */
@media (max-width: 1024px) {
  .pricing-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .pricing-cards-section {
    padding: 60px 5%;
  }
}
</style>
