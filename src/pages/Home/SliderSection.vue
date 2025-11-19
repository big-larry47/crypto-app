<template>
  <section class="event-section">
    <h2 class="section-title">BECOME PART OF SOMETHING GREATER</h2>

    <div 
      class="event-slider"
      @mouseenter="pauseAutoSlide"
      @mouseleave="startAutoSlide"
    >
      <!-- Left Button -->
      <button class="nav-button left" @click="prevSlide">‹</button>

      <!-- Fixed Carousel Frame -->
      <div class="carousel-frame">
        <!-- Only slides move -->
        <div class="slider" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div v-for="(event, index) in events" :key="index" class="slide">
            <img :src="event.image" alt="Event background" class="slide-image" />

            <div class="gradient-overlay"></div>

            <div class="content">
              <p class="meta">{{ event.category }}</p>
              <h2 class="title">{{ event.title }}</h2>
              <p class="description">{{ event.description }}</p>
              <button class="cta">▶ View Event</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Button -->
      <button class="nav-button right" @click="nextSlide">›</button>

      <!-- Dots -->
      <div class="dots">
        <span
          v-for="(event, i) in events"
          :key="'dot-' + i"
          class="dot"
          :class="{ active: currentIndex === i }"
          @click="goToSlide(i)"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const currentIndex = ref(0);
let autoSlideInterval = null;

const events = ref([
  {
    title: "Our Foundation of Excellence",
    category: "About Us / Our Company / Who We Are",
    description:
      "Built on a foundation of trust, innovation, and excellence, this is where opportunities begin. Our headquarters stands as a symbol of growth, vision, and commitment to empowering traders worldwide.",
    image: "https://cryptoriq.com/1/cryptoriq_event.png",
  },
  {
    title: "Empowering Through Knowledge",
    category: "Community / Education / Events",
    description:
      "Our experts share strategies and insights to help traders navigate the ever-changing crypto and forex markets with confidence.",
    image: "https://cryptoriq.com/1/event1.png",
  },
  {
    title: "Collaboration in Action",
    category: "Team / Strategy / Innovation",
    description:
      "Behind every successful trade is a team of dedicated professionals analyzing trends and creating smarter trading solutions.",
    image: "https://cryptoriq.com/1/even3.jpg",
  },
  {
    title: "Precision Meets Performance",
    category: "Operations / Trading Desk / Technology",
    description:
      "Focused, data-driven, and results-oriented, our traders leverage cutting-edge tools to turn insights into opportunities.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
]);

// Auto-slide functions
const startAutoSlide = () => {
  stopAutoSlide(); // prevent duplicates
  autoSlideInterval = setInterval(() => {
    nextSlide(false);
  }, 5000);
};

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
};

// Pause on hover
const pauseAutoSlide = () => {
  stopAutoSlide();
};

// Navigation
const nextSlide = (manual = true) => {
  currentIndex.value = (currentIndex.value + 1) % events.value.length;
  if (manual) resetAutoSlide();
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + events.value.length) % events.value.length;
  resetAutoSlide();
};

const goToSlide = (i) => {
  currentIndex.value = i;
  resetAutoSlide();
};

// Reset interval after manual interaction
const resetAutoSlide = () => {
  stopAutoSlide();
  startAutoSlide();
};

// Lifecycle
onMounted(() => {
  startAutoSlide();
});

onBeforeUnmount(() => {
  stopAutoSlide();
});
</script>


  
  <style scoped>
  .event-section {
    background-color: #0b0b12;
    padding: 100px 0;
    text-align: center;
    color: #fff;
  }
  
  .section-title {
    font-size: 38px;
    font-weight: 600;
    margin-bottom: 90px;
    color: #ffffff;
  }
  
  /* ✅ Fixed carousel wrapper */
  .event-slider {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    overflow: visible;
  }
  
  /* ✅ This is the visible frame that stays fixed */
  .carousel-frame {
    position: relative;
    width: 100%;
    height: 480px;
    border-radius: 20px;
    overflow: hidden;
    background: #0b0b12;
    z-index: 2;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  }
  
  /* ✅ Only the slider content moves */
  .slider {
    display: flex;
    transition: transform 0.8s ease-in-out;
    height: 100%;
  }
  
  .slide {
    flex: 0 0 100%;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    background: #0b0b12;
  }
  
  .slide-image {
    position: absolute;
    right: 0;
    top: 0;
    width: 60%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  
  .gradient-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      #0b0b12 45%,
      rgba(11, 11, 18, 0.6) 65%,
      transparent 100%
    );
  }
  
  .content {
    position: relative;
    z-index: 2;
    padding-left: 60px;
    max-width: 480px;
    text-align: left;
  }
  
  .meta {
    font-size: 14px;
    color: #9ca3af;
    margin-bottom: 10px;
  }
  
  .title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 16px;
  }
  
  .description {
    font-size: 16px;
    line-height: 1.6;
    color: #cfcfcf;
    margin-bottom: 24px;
  }
  
  .cta {
    background: #fff;
    color: #0b0b12;
    border: none;
    font-weight: 500;
    padding: 12px 30px;
    border-radius: 999px;
    cursor: pointer;
    transition: background 0.3s ease;
    font-size: 15px;
  }
  .cta:hover {
    background: #e8e8e8;
  }
  
  /* ✅ Navigation buttons - match your other carousel style */
.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 35px;
  height: 60px;
  background: rgba(20, 20, 30, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 17.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  color: #fff;
  font-size: 24px;
}

.nav-button:hover {
  background: rgba(40, 40, 60, 0.9);
  transform: translateY(-50%) scale(1.05);
}

/* Maintain current positioning */
.nav-button.left {
  left: -105px;
}

.nav-button.right {
  right: -105px;
}

  
  /* Dots */
  .dots {
    position: absolute;
    bottom: -30px;
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
  }
  
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #555;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .dot.active {
    background: #fff;
  }
  
  /* Responsive */
  @media (max-width: 900px) {
    .slide {
      flex-direction: column;
      height: auto;
    }
    .slide-image {
      position: relative;
      width: 100%;
      height: 240px;
      border-radius: 0;
    }
    .gradient-overlay {
      background: linear-gradient(
        to bottom,
        #0b0b12 40%,
        rgba(11, 11, 18, 0.7) 80%,
        transparent
      );
    }
    .content {
      padding: 20px 30px 60px;
      max-width: 100%;
    }
    .nav-button.left {
      left: 10px;
    }
    .nav-button.right {
      right: 10px;
    }
  }
  </style>
  