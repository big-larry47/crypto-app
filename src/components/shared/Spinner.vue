<template>
  <div class="loading-container">
    <div class="spinner-wrapper">
      <img src="@/assets/cryp_logo.png" alt="logo" class="center-logo" />

      <!-- Outer rotating neon arcs -->
      <div class="arc arc1"></div>
      <div class="arc arc2"></div>
    </div>

    <p class="loading-text">Loading...</p>
  </div>
</template>

<style scoped>
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

/* Spinner wrapper */
.spinner-wrapper {
  position: relative;
  width: 95px;
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Center logo — INCREASED SIZE */
.center-logo {
  width: 65px;
  height: 65px;
  z-index: 3;
  filter: drop-shadow(0 0 6px rgba(0, 255, 80, 0.6));
}

/* ARC BASE STYLE */
.arc {
  position: absolute;
  width: 95px;
  height: 95px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: #00d4ff;
  border-right-color: #12b2d1;
  filter: drop-shadow(0 0 10px rgba(0, 195, 255, 0.7));
  animation: spin 1.4s linear infinite;
}

.arc2 {
  width: 75px;
  height: 75px;
  animation: spin 1.4s linear infinite reverse;
  opacity: 0.7;
  border-top-color: #988031;
  border-right-color: #a0893d;
  filter: drop-shadow(0 0 8px rgba(255, 221, 0, 0.6));
}

/* Spin animation */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-text {
  margin-top: 16px;
  color: white;
  font-size: 18px;
  opacity: 0.85;
  letter-spacing: 0.5px;
}
</style>
