<template>
    <section class="faq-section">
      <div class="content-wrapper">
        <h2 class="section-title">Common <span>Questions</span></h2>
  
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="faq-item"
          @click="toggle(index)"
        >
          <div class="faq-question">
            <h3>{{ faq.question }}</h3>
            <span class="icon">{{ activeIndex === index ? '−' : '+' }}</span>
          </div>
          <transition name="fade">
            <p v-if="activeIndex === index" class="faq-answer">
              {{ faq.answer }}
            </p>
          </transition>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const activeIndex = ref(null);
  
  const toggle = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index;
  };
  
  const faqs = [
    {
      question: "Who are we?",
      answer:
        "The core team of this platform comes from globally renowned Internet and financial enterprises, including early practitioners and investors in the digital asset industry. We focus on providing a secure, stable, and efficient digital asset trading experience for users worldwide."
    },
    {
      question: "Our advantages",
      answer:
        "We combine years of blockchain and fintech expertise with innovative trading systems and 24/7 global customer support."
    },
    {
      question: "How can blockchain help make the world a better place?",
      answer:
        "Blockchain enables transparency, reduces fraud, and helps build trust in systems where data integrity is critical."
    },
    {
      question: "Use blockchain to help charities",
      answer:
        "Blockchain ensures donations are traceable, transparent, and reach the intended beneficiaries without intermediaries."
    },
    {
      question: "Blockchain can verify environmental impact",
      answer:
        "Environmental initiatives can use blockchain to record and verify sustainability data transparently."
    },
    {
      question: "History of social welfare programs",
      answer:
        "Blockchain offers a more accountable, verifiable, and corruption-resistant infrastructure for managing social welfare."
    }
  ];
  </script>
  
  <style scoped>
  .faq-section {
  background-color: #0b0b12;
  color: #ffffff;
  padding: 100px 80px; /* increased height and side spacing for presence */
  font-family: "Inter", sans-serif;
}

/* Expanded content width but keeps symmetry on large screens */
.content-wrapper {
  max-width: 1400px; /* increased from 1200px */
  width: 100%;
  margin: 0 auto;
  padding: 0 40px; /* slightly more inner spacing */
}

.section-title {
  text-align: center;
  font-size: 2.5rem; /* increased from 2rem */
  font-weight: 700;
  margin-bottom: 70px;
}

.section-title span {
  color: #bdbddb;
}

.faq-item {
  background-color: transparent;
  border: 1px solid #2b2b34;
  border-radius: 40px;
  padding: 30px 40px; /* more padding for a bigger look */
  margin-bottom: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: #3a3a45;
  background-color: #101018;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question h3 {
  font-size: 1.25rem; /* slightly larger text */
  font-weight: 500;
  margin: 0;
}

.icon {
  font-size: 1.6rem; /* larger icons for balance */
  font-weight: bold;
  color: #bdbdbd;
  transition: transform 0.3s ease;
}

.faq-answer {
  margin-top: 18px;
  color: #bdbdbd;
  font-size: 1rem;
  line-height: 1.7;
}

/* Smooth expand animation */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .content-wrapper {
    padding: 0 30px;
  }
  .faq-section {
    padding: 80px 40px;
  }
}

@media (max-width: 768px) {
  .faq-section {
    padding: 60px 20px;
  }
  .section-title {
    font-size: 2rem;
  }
  .faq-item {
    padding: 20px;
  }
}

  </style>
  