<template>
  <footer class="footer">
    <div class="footer-wrapper">

      <!-- Top Row: Logo + Language -->
      <div class="footer-top">
        

        <div class="footer-lang">
          <span>🌐</span>
          <span>English</span>
        </div>
      </div>

      <!-- Footer Columns -->
      <div class="footer-columns">

        <div class="column">
          <h3>Trading Market</h3>
          <p>Market</p>
          <p>Spot</p>
          <p>Forex</p>
          <p>Perpetual</p>
          <p>Option</p>
        </div>

        <div class="column">
          <h3>Asset</h3>
          <p>My Assets</p>
          <p>Deposit</p>
          <p>Withdraw</p>
          <p>Transfer</p>
          <p>Order Center</p>
        </div>

        <div class="column">
          <h3>Product</h3>
          <p>Invite Rewards</p>
          <p>Finance</p>
        </div>

        <div class="column">
          <h3>Support</h3>
          <p>Online Service</p>
          <p>Beginners Tutorial</p>
        </div>

        <div class="column">
          <h3>Policy</h3>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Anti-Money<br />Laundering Agreement</p>
        </div>

      </div>

      <!-- Bottom Text -->
      <div class="footer-text">
        <p>
          All rights reserved ©2025 Cryptoriq.
        </p>

        <p class="email">
          Support:
          <a href="mailto:support@cryptoriq.com">support@cryptoriq.com</a>
        </p>
      </div>

      <!-- Store Buttons -->
      <div class="footer-buttons">
        <a
          href="#"
          class="store-img"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
          />
        </a>

        <a
          href="#"
          class="store-img"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/67/Download_on_the_App_Store_Badge.svg"
            alt="App Store"
          />
        </a>
      </div>

    </div>
  </footer>
</template>


<style scoped>
.footer {
  width: 100%;
  background: #0a0a0a;
  color: #e0e0e0;
  padding: 3rem 0;
  font-family: "Inter", sans-serif;
}

.footer-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Top Section */
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.footer-logo img {
  width: 80px; /* reduced from 160px to 80px */
  height: auto; /* maintain aspect ratio */
}


.footer-lang {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: #1c1c1c;
  padding: 0.6rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

/* Columns */
.footer-columns {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
}

.column h3 {
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: #fff;
}

.column p {
  margin: 0.4rem 0;
  opacity: 0.8;
  cursor: pointer;
}

.column p:hover {
  opacity: 1;
}

/* Bottom Text */
.footer-text {
  border-top: 1px solid #333;
  padding-top: 2rem;
  text-align: center;
  font-size: 0.95rem;
  opacity: 0.8;
}

.footer-text a {
  color: #fff;
  text-decoration: underline;
}

/* Store Buttons */
.footer-buttons {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.store-img img {
  height: 48px;
  cursor: pointer;
  transition: opacity 0.25s;
}

.store-img img:hover {
  opacity: 0.8;
}
</style>
