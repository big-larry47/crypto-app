<template>
  <div class="faq-header-section">
    <div class="faq-header-wrapper">
      <h1 class="faq-title">Plan Pricing</h1>
      <p class="faq-subtitle">
        Find answers to common questions about our product and services.
      </p>
    </div>
  </div>
</template>

<script setup>
  // No script needed
</script>

<style scoped>
.faq-header-section {
  background: #0b0b12;
  color: white;
  width: 100%;

  /* ✅ Add top margin to compensate for fixed header height */
  margin-top: 80px; /* adjust to your header’s height (usually 60–100px) */

  /* Keep good spacing inside */
  padding: 4rem 1rem 0 1rem;
}

.faq-header-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  margin-bottom: 3rem;
}

.faq-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
  color: white;
}

.faq-subtitle {
  color: #9ca3af;
  font-size: 1.125rem;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .faq-title {
    font-size: 2.5rem;
  }

  .faq-subtitle {
    font-size: 1rem;
  }
}
</style>
