<template>
  <section class="partner-section">
    <div class="container">

      <!-- Section Title -->
      <h2 class="partner-title">Trusted by leading global brands</h2>

      <div class="partners-grid">
        <div class="partner-card">
          <img src="https://cdn.worldvectorlogo.com/logos/invision.svg" alt="InVision" class="partner-logo" />
        </div>
        <div class="partner-card">
          <img src="https://cdn.worldvectorlogo.com/logos/zeplin.svg" alt="Zeplin" class="partner-logo" />
        </div>
        <div class="partner-card">
          <img src="https://cdn.worldvectorlogo.com/logos/asana-logo.svg" alt="Asana" class="partner-logo" />
        </div>
        <div class="partner-card">
          <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt="Slack" class="partner-logo" />
        </div>
        <div class="partner-card">
          <img src="https://cdn.worldvectorlogo.com/logos/harvest-2.svg" alt="Harvest" class="partner-logo harvest" />
        </div>
        <div class="partner-card">
          <img src="https://cdn.worldvectorlogo.com/logos/hubspot.svg" alt="HubSpot" class="partner-logo" />
        </div>
        <div class="partner-card">
          <img src="https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg" alt="WordPress" class="partner-logo" />
        </div>
        <div class="partner-card">
          <img src="https://cdn.worldvectorlogo.com/logos/shopify.svg" alt="Shopify" class="partner-logo" />
        </div>
        <div class="partner-card">
          <img src="https://cdn.worldvectorlogo.com/logos/paypal.svg" alt="PayPal" class="partner-logo" />
        </div>
        <div class="partner-card more-card">
          <span class="more-text">+ Many more</span>
          <svg class="arrow" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

    </div>
  </section>
</template>


<script setup>
// Component logic here if needed
</script>

<style scoped>
.partner-section {
  background-color: #0b0b12;
  padding: 80px 20px 150px 20px; /* increased bottom padding for more space */
  font-family: "Inter", sans-serif;
}


.container {
  max-width: 1400px;
  margin: 0 auto;
}

/* Section Title (styled like FAQ title) */
.partner-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 60px;
  color: #ffffff;
}

.partner-title span {
  color: #bdbddb; /* same highlight as FAQ title */
}

/* Partners Grid */
.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  max-width: 1600px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .partners-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .partners-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (min-width: 1400px) {
  .partners-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

/* Partner Card */
.partner-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  height: 75px;
}

.partner-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
}

/* Partner Logos */
.partner-logo {
  max-width: 110px;
  height: auto;
  object-fit: contain;
  filter: brightness(0.9);
  transition: filter 0.3s ease;
}

.partner-logo.harvest {
  max-width: 130px;
}

.partner-card:hover .partner-logo {
  filter: brightness(1);
}

/* "More" Card */
.more-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.02);
}

.more-text {
  font-size: 18px;
  font-weight: 500;
  color: #4ade80;
  letter-spacing: -0.02em;
}

.arrow {
  color: #4ade80;
  transition: transform 0.3s ease;
}

.more-card:hover .arrow {
  transform: translateX(4px);
}

/* Mobile Responsive */
@media (max-width: 767px) {
  .partner-section {
    padding: 60px 20px;
  }

  .partner-title {
    font-size: 2rem;
    margin-bottom: 40px;
  }

  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .partner-card {
    padding: 16px;
    height: 60px;
  }

  .partner-logo {
    max-width: 80px;
  }

  .partner-logo.harvest {
    max-width: 100px;
  }
}
</style>

