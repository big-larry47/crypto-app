<template>
    <div class="faq-container">
      <div class="faq-wrapper">
        <!-- Search Bar -->
        <div class="search-wrapper">
          <div class="search-box">
            <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search for a question"
              v-model="searchQuery"
              class="search-input"
            />
          </div>
        </div>
  
        <!-- FAQ Accordion -->
        <div class="accordion-list">
          <div
            v-for="(faq, index) in filteredFaqs"
            :key="index"
            :class="['accordion-item', { 'accordion-item-open': openIndex === index }]"
          >
            <button
              @click="toggleAccordion(index)"
              class="accordion-button"
            >
              <span class="accordion-question">{{ faq.question }}</span>
              <svg
                v-if="openIndex === index"
                class="accordion-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <svg
                v-else
                class="accordion-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </button>
            
            <div :class="['accordion-content', { 'accordion-content-open': openIndex === index }]">
              <div class="accordion-inner">
                <div class="accordion-divider"></div>
                <p class="accordion-answer">
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <div v-if="filteredFaqs.length === 0" class="no-results">
          No questions found matching your search.
        </div>
  
        <!-- Footer -->
        <div class="faq-footer">
          <p class="footer-text">
            Still have questions?
            <a href="#" class="footer-link">Contact Us.</a>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const openIndex = ref(-1);
  const searchQuery = ref('');
  
  const faqs = [
  
  {
    question: "What is CryptoRiq?",
    answer: "CryptoRiq is an advanced trading platform that uses automated bots based on proven strategies and risk management to help investors trade efficiently. It acts as a 24,7 trading assistant that removes emotional decision making."
  },
  {
    question: "Do I need experience to use CryptoRiq?",
    answer: "No experience is required. CryptoRiq is designed for both beginners and experts. No coding or advanced trading knowledge is needed thanks to its simple dashboard and ready to use bots."
  },
  {
    question: "How safe is my money with CryptoRiq?",
    answer: "Your capital is not stored on our platform. We operate through secure exchange integrations. Our bots use built in risk management including stop loss and position sizing, helping you trade safely."
  },
  {
    question: "How do I get started?",
    answer: "Sign up for a CryptoRiq account, deposit in your CryptoRiq trading account, choose a bot or strategy that matches your goals, start with small test capital, observe performance, then scale when ready. Trading takes minutes to begin."
  },
  {
    question: "Can CryptoRiq bots really beat the market?",
    answer: "Our bots are data driven and disciplined. They remove emotional errors that most traders make. While no system guarantees profits, consistent use can help you capture compounding returns and gain an edge over manual trading."
  },
  {
    question: "What kind of returns can I expect?",
    answer: "CryptoRiq is designed for consistent, risk adjusted growth. Although past performance is not guaranteed, users often see steady monthly gains using disciplined strategies. Consistent compounding typically outperforms high risk trading."
  },
  {
    question: "Why should I consider upgrading my CryptoRiq plan?",
    answer: "Upgrading is about unlocking more potential. Higher tier plans give you access to advanced bots and strategies, higher capital limits, faster execution speeds, and in depth analytics. More power, more flexibility, more opportunity while keeping risk managed."
  },
  {
    question: "Can upgrading really improve my ROI?",
    answer: "Yes, upgrading allows you to deploy proven strategies with more capital, use advanced bots that react faster, and leverage analytics to optimize performance. Small consistent gains compound faster when scaled intelligently."
  },
  {
    question: "How does scaling my account improve my results?",
    answer: "Our bots excel at consistent and disciplined execution. Increasing your capital amplifies a system that already works. Bigger exposure with proven bots means faster compounding of gains without emotional trading mistakes."
  },
  {
    question: "How do I know when it’s the right time to upgrade?",
    answer: "It may be time to scale when your strategy is performing consistently, you’re comfortable with your risk management rules, and you want to capture more opportunities without adding stress. Scaling is strategic growth powered by proven automation."
  },
  {
    question: "Can I safely run multiple bots at once?",
    answer: "Yes, CryptorRiq is designed for parallel strategy execution. Running multiple bots lets you diversify across strategies and markets, spread risk intelligently, and capture more opportunities simultaneously."
  },
  {
    question: "Will upgrading my plan require more time or effort?",
    answer: "No, CryptoRiq automation works behind the scenes. More bots or larger capital does not mean more work. You simply monitor performance and make smart adjustments when needed."
  },
  {
    question: "What support is available if I scale up?",
    answer: "All CryptoRiq plans include priority support, step by step tutorials for advanced features, and guidance on running multiple bots safely. You are always supported as you grow."
  },
  {
    question: "Is there support if I need help?",
    answer: "Yes, CryptoRiq offers responsive support, tutorials, and a full knowledge base, ensuring you always have guidance when you need it."
  }
];

  
  const filteredFaqs = computed(() => {
    return faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
  
  const toggleAccordion = (index) => {
    openIndex.value = openIndex.value === index ? -1 : index;
  };
  </script>
  
  <style scoped>
  * {
    box-sizing: border-box;
  }
  
  .faq-container {
    min-height: 100vh;
    background: #0b0b12;
    color: white;
    padding: 4rem 1rem;
    width: 100%;
    margin-top: 4rem;
  }
  
  .faq-wrapper {
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;
  }
  
  /* Header */
  .faq-header {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .faq-title {
    font-size: 3.5rem;
    font-weight: bold;
    margin: 0 0 1rem 0;
  }
  
  .faq-subtitle {
    color: #9ca3af;
    font-size: 1.125rem;
    margin: 0;
  }
  
  /* Search */
  .search-wrapper {
    margin-bottom: 2rem;
  }
  
  .search-box {
    position: relative;
    width: 100%;
  }
  
  .search-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
    width: 1.25rem;
    height: 1.25rem;
  }
  
  .search-input {
    width: 100%;
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid #334155;
    border-radius: 0.75rem;
    padding: 1rem 1rem 1rem 3rem;
    color: white;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;
  }
  
  .search-input::placeholder {
    color: #9ca3af;
  }
  
  .search-input:focus {
    border-color: #00d4ff;
  }
  
  /* Accordion */
  .accordion-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .accordion-item {
    border: 1px solid #334155;
    border-radius: 0.75rem;
    background: rgba(30, 41, 59, 0.3);
    transition: all 0.3s;
  }
  
  .accordion-item:hover {
    border-color: #475569;
  }
  
  .accordion-item-open {
    background: rgba(0, 212, 255, 0.15);
    border-color: #00d4ff;
  }
  
  .accordion-button {
    width: 100%;
    padding: 1.25rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1rem;
  }
  
  .accordion-question {
    font-size: 1.125rem;
    font-weight: 500;
    padding-right: 1rem;
  }
  
  .accordion-icon {
    width: 1.5rem;
    height: 1.5rem;
    color: #00d4ff;
    flex-shrink: 0;
    transition: transform 0.3s;
  }
  
  .accordion-content {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.3s ease;
  }
  
  .accordion-content-open {
    max-height: 24rem;
    opacity: 1;
  }
  
  .accordion-inner {
    padding: 0 1.5rem 1.25rem 1.5rem;
  }
  
  .accordion-divider {
    border-top: 1px solid #334155;
    padding-top: 1rem;
  }
  
  .accordion-answer {
    color: #d1d5db;
    line-height: 1.7;
    margin: 0;
  }
  
  /* No Results */
  .no-results {
    text-align: center;
    padding: 3rem 0;
    color: #9ca3af;
  }
  
  /* Footer */
  .faq-footer {
    text-align: center;
    margin-top: 3rem;
  }
  
  .footer-text {
    color: #9ca3af;
    margin: 0;
  }
  
  .footer-link {
    color: #00d4ff;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .footer-link:hover {
    color: #33ddff;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .faq-title {
      font-size: 2.5rem;
    }
    
    .faq-subtitle {
      font-size: 1rem;
    }
    
    .accordion-question {
      font-size: 1rem;
    }
  }
  </style>