<template>
  <section class="mission-section">
    <div class="content-wrapper">
      <!-- LEFT COLUMN (Images + Matching Text) -->
      <div class="column">
        <div class="pair" v-for="(item, index) in sections" :key="index">
          <div class="image-wrapper">
            <img :src="item.image" alt="Mission Image" class="image" />
          </div>
          <div class="text-block">
            <h3 class="title">{{ item.title }}</h3>
            <p class="description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import mission1 from "@/assets/mission1.png"
import mission2 from "@/assets/mission2.png"
import mission3 from "@/assets/mission3.png"

const sections = [
  {
    image: mission3,
    title: "OUR MISSION",
    description:
      "Built at the dawn of the Bitcoin revolution, our mission is to empower our customers with the tools and the knowledge to take full control of their financial futures. Our cutting-edge technology enables seamless, secure, and unrestricted digital asset trading services—helping you master the ever-evolving market.",
  },
  {
    image: mission1,
    title: "OUR FOCUS",
    description:
      "We provide a high-performance trading environment with deep liquidity, top-tier security, and low-latency execution. With 250+ spot pairs, 60+ perpetual contracts, and a relentless commitment to innovation, we equip traders with the tools to take control of their trading.",
  },
  {
    image: mission2,
    title: "OUR CULTURE",
    description:
      "Driven by visionaries, builders, and Bitcoin believers, we push the boundaries of freedom and decentralisation. Integrity, resilience, and independence define us—we don't follow trends, we create them. We provide a battle-hardened trading environment for the most demanding conditions so traders never miss an opportunity.",
  },
]
</script>

<style scoped>
.mission-section {
background: #0b0b10;
color: #fff;
padding: 60px 80px;
display: flex;
justify-content: center;
}

.content-wrapper {
display: flex;
justify-content: center;
align-items: flex-start;
max-width: 1300px;
width: 100%;
}

/* === COLUMN WRAPPER === */
.column {
display: flex;
flex-direction: column;
gap: 60px;
width: 100%;
}

/* === EACH IMAGE + TEXT PAIR === */
.pair {
display: flex;
align-items: center;
gap: 50px;
}

/* === IMAGE STYLING === */
.image-wrapper {
flex: 1;
max-width: 450px;
border: 2.5px solid rgba(255, 255, 255, 0.2);
border-radius: 18px;
overflow: hidden;
box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
}

.image {
display: block;
width: 100%;
height: auto;
object-fit: cover;
}

/* === TEXT STYLING === */
.text-block {
flex: 1;
text-align: left;
}

.title {
font-size: 1.4rem;
letter-spacing: 1px;
font-weight: 700;
color: #ffffff;
margin-bottom: 16px;
text-transform: uppercase;
}

.description {
font-size: 1.05rem;
color: #c5c5c5;
line-height: 1.8;
font-weight: 400;
max-width: 500px;
}

/* === RESPONSIVE === */
@media (max-width: 1024px) {
.pair {
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 30px;
}
.image-wrapper {
  max-width: 700px;
  width: 100%;
}
.text-block {
  max-width: 700px;
}
}
</style>