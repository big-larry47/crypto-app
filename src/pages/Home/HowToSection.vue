<template>
    <section class="how-to-section" :style="{ backgroundColor: section.backgroundColor }">
      <h2 class="how-to-title">{{ section.title }}</h2>
  
      <div class="steps-container">
        <!-- Steps -->
        <div
          v-for="step in section.steps"
          :key="step.id"
          class="step"
          :style="getStepStyle(step)"
        >
          <div class="icon-circle" :style="{ borderColor: step.icon.color }">
            <span class="icon-inside">{{ step.icon.symbol }}</span>
            <div v-if="step.icon.hasRings" class="rings"></div>
          </div>
  
          <!-- Step Title with dynamic position -->
          <p
            class="step-title"
            :class="{
              'title-left': step.titlePosition === 'left',
              'title-right': step.titlePosition === 'right',
              'title-bottom': step.titlePosition === 'bottom'
            }"
          >
            {{ step.title }}
          </p>
        </div>
  
        <!-- Arrows connecting circles -->
        <img :src="arrow1" alt="Arrow 1" class="arrow" :style="arrowStyles[0]" />
        <img :src="arrow2" alt="Arrow 2" class="arrow" :style="arrowStyles[1]" />
        <img :src="arrow3" alt="Arrow 3" class="arrow" :style="arrowStyles[2]" />
      </div>
    </section>
  </template>
  
  <script setup>
  import { reactive } from "vue";
  
  // Import images from src/assets
  import arrow1 from '@/assets/arrow1.png';
  import arrow2 from '@/assets/arrow2.png';
  import arrow3 from '@/assets/arrow3.png';
  
  const section = reactive({
    title: "Buy cryptocurrencies in minutes",
    backgroundColor: "#0b0b12",
    steps: [
      { id: 1, icon: { symbol: "+", color: "#00d4ff", hasRings: true }, title: "Create your free CryptoRiq account", titlePosition: "right", position: { top: "10%", left: "12%" } },
      { id: 2, icon: { symbol: "🔗", color: "#00d4ff", hasRings: true }, title: "Fund your Cryptoriq Wallet", titlePosition: "bottom", position: { top: "65%", left: "35%" } },
      { id: 3, icon: { symbol: "₿", color: "#00d4ff", hasRings: true }, title: "Subscribe to a plan", titlePosition: "bottom", position: { top: "60%", left: "70%" } },
      { id: 4, icon: { symbol: "🔒", color: "#00d4ff", hasRings: true }, title: "Earn & withdraw earnings", titlePosition: "left", position: { top: "-5%", left: "85%" } }
    ]
  });
  
  const getStepStyle = (step) => ({
    position: "absolute",
    top: step.position.top,
    left: step.position.left,
    transform: "translate(-50%, 0%)"
  });
  
  // Arrow positions: tweak these manually
  const arrowStyles = reactive([
    { top: "45%", left: "16%", width: "150px", transform: "rotate(5deg)" },
    { top: "75%", left: "41%", width: "275px", transform: "rotate(-10deg)" },
    { top: "32%", left: "76%", width: "150px", transform: "rotate(-5deg)" }
  ]);
  </script>
  
  <style scoped>
  .how-to-section {
    position: relative;
    padding: 80px 20px 220px;
    color: #fff;
    font-family: 'Inter', sans-serif;
    overflow: hidden;
    margin-top: 4rem;
  }
  
  .how-to-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 60px;
    margin-top: -30px;
  }
  
  .steps-container {
    position: relative;
    width: 100%;
    max-width: 1200px;
    height: 400px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }
  
  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 180px;
  }
  
  /* Dotted Circle */
  .icon-circle {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px dashed rgba(0, 212, 255, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
    background-color: transparent;
  }
  
  .icon-inside {
    font-size: 2rem;
    color: #00d4ff;
  }
  
  .rings {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border: 2px dashed rgba(0, 212, 255, 0.4);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  
  /* Arrow styles */
  .arrow {
    position: absolute;
    pointer-events: none;
  }
  
  /* Step title positions */
  .step-title {
    font-size: 1.2rem;
    font-weight: 500;
    position: absolute;
    white-space: nowrap; /* short phrases stay on one line */
  }
  
  .title-left {
    right: 100%;       /* place left of circle */
    top: 50%;
    transform: translate(-10px, -50%);
    text-align: right;
  }
  
  .title-right {
    left: 100%;        /* place right of circle */
    top: 50%;
    transform: translate(10px, -50%);
    text-align: left;
  }
  
  .title-bottom {
    top: 100%;         /* below the circle */
    left: 50%;
    transform: translate(-50%, 10px);
    text-align: center;
  }
  
  @media (max-width: 900px) {
    .steps-container {
      height: 400px;
    }
  }
  </style>