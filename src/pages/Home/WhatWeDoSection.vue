<template>
    <section class="security-overview">
      <!-- ✅ Background Lottie Animation -->
      <dotlottie-wc
        src="https://lottie.host/318af269-1fe3-4ae5-8627-016f0d3c9c32/rLxZGO4EKY.lottie"
        class="background-lottie"
        autoplay
        loop
      ></dotlottie-wc>
  
      <!-- Header Section -->
      <div class="section-header">
        <h2 class="main-title">Platform Security Overview</h2>
        <p class="main-description">
          Our platform employs top-tier security systems and financial protections to ensure the safety of user assets at all times.
        </p>
      </div>
  
      <!-- Top Cards -->
      <div class="top-section">
        <div v-for="(item, index) in securityOverview" :key="index" class="card">
          <div class="icon-wrapper">
            <img :src="item.icon" :alt="item.title" class="icon" />
          </div>
          <h3 class="title">{{ item.title }}</h3>
          <p class="description">{{ item.description }}</p>
        </div>
      </div>
  
      <!-- Bottom Cards -->
      <div class="bottom-section">
        <div v-for="(item, index) in principles" :key="index" class="sub-card">
          <div class="sub-icon">
            <i :class="item.iconClass"></i>
          </div>
          <h4 class="sub-title">{{ item.title }}</h4>
          <p class="sub-description">{{ item.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import coinIcon from "@/assets/coin.png"
  
  // ✅ Inject Lottie web component globally
  if (typeof window !== "undefined") {
    const script = document.createElement("script")
    script.type = "module"
    script.src = "https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js"
    document.head.appendChild(script)
  }
  
  const securityOverview = [
    {
      title: "Reserve Description",
      icon: coinIcon,
      description:
        "We maintain a 1:1 reserve ratio to ensure full backing for all user assets on the platform.",
    },
    {
      title: "Safe Cold Storage",
      icon: coinIcon,
      description:
        "Most digital assets are held in secure offline multi-signature wallets for maximum protection.",
    },
    {
      title: "User Protection Fund",
      icon: coinIcon,
      description:
        "Our $300M user protection fund provides an additional safety layer against potential risks.",
    },
  ]
  
  const principles = [
    {
      title: "Safe, Stable and Reliable Technology",
      iconClass: "icon-fingerprint",
      description:
        "We have a world-class engineering team developing robust and efficient systems that ensure operational reliability under high traffic.",
    },
    {
      title: "Customer-First Concept",
      iconClass: "icon-handshake",
      description:
        "Our multi-language support and 24/7 customer service ensure seamless global user experience.",
    },
    {
      title: "Global Operation",
      iconClass: "icon-globe",
      description:
        "With an experienced international operations team, we serve over 50 regions globally with consistent performance.",
    },
    {
      title: "Exciting Rewards & Activities",
      iconClass: "icon-gift",
      description:
        "Enjoy engaging events and generous reward programs designed to enhance user participation.",
    },
  ]
  </script>
  
  <style scoped>
.security-overview {
  position: relative;
  background-color: #0b0b10;
  color: #ffffff;
  padding: 80px 40px;
  font-family: 'Inter', sans-serif;
  text-align: center;
  overflow: hidden;
}

/* ✅ Animated Lottie background — brighter & more visible */
.background-lottie {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 900px; /* slightly larger for more coverage */
  height: 900px;
  transform: translate(-50%, -50%);
  opacity: 0.35; /* increased from 0.12 → 0.35 */
  filter: brightness(1.5) contrast(1.3) saturate(1.4); /* added punch */
  z-index: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, filter 0.3s ease;
}

/* Optional subtle hover or scroll interaction (optional eye candy)
.security-overview:hover .background-lottie {
  opacity: 0.45;
  filter: brightness(1.7) contrast(1.4);
}
*/

/* === Section Header === */
.section-header {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto 60px;
}

.main-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 14px;
}

.main-description {
  font-size: 1.1rem;
  color: #bdbdbd;
  line-height: 1.6;
}

/* === TOP SECTION === */
.top-section {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
  margin-bottom: 70px;
}

.card {
  border: 1px solid #2b2b34;
  border-radius: 18px;
  text-align: center;
  padding: 60px 30px 40px;
  width: 360px;
  position: relative;
  overflow: visible;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  border-color: #3a3a45;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
}

/* === Large overlapping icon === */
.icon-wrapper {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  width: 190px;
  height: 190px;
  background: #0b0b10;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  width: 180px;
  height: 180px;
  object-fit: contain;
  border-radius: 50%;
  border: 4px solid #2b2b34;
  background: #0b0b10;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.08);
}

/* === Card text === */
.title {
  font-size: 1.35rem;
  font-weight: 600;
  margin-top: 80px;
  margin-bottom: 14px;
}

.description {
  font-size: 1rem;
  color: #bdbdbd;
  line-height: 1.7;
  max-width: 300px;
  margin: 0 auto;
}

/* === BOTTOM SECTION === */
.bottom-section {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 40px;
  margin: 0 auto;
  padding: 0 40px;
  overflow-x: auto;
}

.sub-card {
  background: #0b0b10;
  border: 1px solid #2b2b34;
  border-radius: 12px;
  padding: 30px;
  text-align: left;
  width: 280px;
  flex-shrink: 0;
  transition: background 0.3s ease, border-color 0.3s ease;
}

.sub-card:hover {
  background: #202028;
  border-color: #3a3a45;
}

.sub-title {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 10px 0 8px;
}

.sub-description {
  font-size: 0.95rem;
  color: #a7a7a7;
  line-height: 1.6;
}

/* === Emoji icons === */
.icon-fingerprint::before {
  content: "🔒";
}
.icon-handshake::before {
  content: "🤝";
}
.icon-globe::before {
  content: "🌍";
}
.icon-gift::before {
  content: "🎁";
}
</style>

  