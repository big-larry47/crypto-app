<template>
  <section class="cryptoriq-leadership-section">
    <div class="cryptoriq-leadership-container">
      <div class="cryptoriq-leadership-image">
        <img src="@/assets/theteam.jpg" alt="CryptoRiq Leadership Team" />
      </div>

      <div class="cryptoriq-leadership-content">
        <h3>Our Leadership Team</h3>
        <p>
          The minds behind <strong>CryptoRiq</strong> are pioneers of the digital finance frontier.
          With proven expertise in trading, cybersecurity, and blockchain architecture, they’ve created
          a platform where performance meets trust — ensuring every trader has the tools, stability,
          and confidence to stay in control, no matter the market.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Static import; Vite will handle image resolution automatically.
</script>

<style scoped>
.cryptoriq-leadership-section {
  background: #0b0b12;
  color: #fff;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}

.cryptoriq-leadership-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  max-width: 1200px;
  flex-wrap: wrap;
}

.cryptoriq-leadership-image img {
  border-radius: 1.5rem;
  width: 550px;
  height: auto;
  object-fit: cover;
}

.cryptoriq-leadership-content {
  max-width: 550px;
}

.cryptoriq-leadership-content h3 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cryptoriq-leadership-content p {
  font-size: 1.2rem;
  line-height: 1.7;
  color: #ccc;
}
</style>
