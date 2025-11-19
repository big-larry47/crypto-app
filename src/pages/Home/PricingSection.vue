<template>
    <section class="pricing-section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <h2 class="section-title">Choose Your Plan</h2>
          <p class="section-description">Select the perfect package for your visual commerce needs</p>
        </div>
  
        <!-- Unified Pricing Card -->
        <div class="unified-pricing-card">
          <!-- Starter -->
          <div class="plan-column starter">
            <div class="plan-header">
              <h3 class="plan-name">Starter</h3>
              <p class="plan-description">Perfect for individuals</p>
            </div>
            <div class="price-wrapper">
              <span class="price">$1,485</span>
              <span class="period">/year</span>
            </div>
            <ul class="features-list">
              <li>✓ 3D Asset Hosting</li>
              <li>✓ Basic Configuration</li>
              <li>✓ 1 Endpoint</li>
            </ul>
            <button class="get-started-btn">Get Started</button>
          </div>
  
          <div class="divider"></div>
  
          <!-- Essentials -->
          <div class="plan-column essentials">
            <div class="plan-header">
              <h3 class="plan-name">Essentials</h3>
              <p class="plan-description">Our standard 3D package</p>
            </div>
            <div class="price-wrapper">
              <span class="price">$5,200</span>
              <span class="period">/year</span>
            </div>
            <ul class="features-list">
              <li>✓ Everything in Starter</li>
              <li>✓ Analytics Dashboard</li>
              <li>✓ Priority Support</li>
            </ul>
            <button class="get-started-btn">Get Started</button>
          </div>
  
          <div class="divider"></div>
  
          <!-- Professional -->
          <div class="plan-column professional featured">
            <span class="badge">Most Popular</span>
            <div class="plan-header">
              <h3 class="plan-name">Professional</h3>
              <p class="plan-description">Best for multiple experiences</p>
            </div>
            <div class="price-wrapper">
              <span class="price">$12,495</span>
              <span class="period">/year</span>
            </div>
            <ul class="features-list">
              <li>✓ Everything in Essentials</li>
              <li>✓ Augmented Reality</li>
              <li>✓ Virtual Photographer</li>
              <li>✓ Threekit AI</li>
            </ul>
            <button class="get-started-btn featured-btn">Get Started</button>
          </div>
  
          <div class="divider"></div>
  
          <!-- Enterprise -->
          <div class="plan-column enterprise">
            <div class="plan-header">
              <h3 class="plan-name">Enterprise</h3>
              <p class="plan-description">For global, complex use cases</p>
            </div>
            <div class="price-wrapper">
              <span class="price">$36,000</span>
              <span class="period">/year</span>
            </div>
            <ul class="features-list">
              <li>✓ Everything in Professional</li>
              <li>✓ Premier Support</li>
              <li>✓ Unlimited Endpoints</li>
              <li>✓ Custom Solutions</li>
            </ul>
            <button class="get-started-btn">Get Started</button>
          </div>
        </div>
  
        <!-- CTA Footer -->
        <div class="section-footer">
          <p class="footer-text">Need a custom solution? <a href="#" class="contact-link">Contact our sales team</a></p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .pricing-section {
    padding: 100px 5% 20px 5%;
    background: #0b0b12;
    color: #fff;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  
  .container {
    max-width: 1400px;
    margin: 0 auto;
  }
  
  /* Section Header */
  .section-header {
    text-align: center;
    margin-bottom: 64px;
  }
  
  
  .section-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;

  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

  
  .section-description {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
  }
  
  /* Unified Pricing Card */
  .unified-pricing-card {
    display: grid;
    grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
    background: linear-gradient(135deg, rgba(26, 26, 46, 0.6) 0%, rgba(15, 15, 25, 0.8) 100%);
    border-radius: 32px;
    padding: 64px 48px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    margin-bottom: 64px;
    position: relative;
    overflow: hidden;
  }
  
  .unified-pricing-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 20%, rgba(122, 156, 168, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(155, 142, 164, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  .plan-column.starter {
    position: relative;
  }
  
  .plan-column.starter::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(155, 142, 164, 0.1) 0%, rgba(165, 153, 175, 0.05) 100%);
    border-radius: 16px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  .plan-column.starter:hover::before {
    opacity: 1;
  }
  
  .plan-column.essentials {
    position: relative;
  }
  
  .plan-column.essentials::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(193, 122, 111, 0.1) 0%, rgba(204, 139, 129, 0.05) 100%);
    border-radius: 16px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  .plan-column.essentials:hover::before {
    opacity: 1;
  }
  
  .plan-column.enterprise {
    position: relative;
  }
  
  .plan-column.enterprise::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(139, 168, 136, 0.1) 0%, rgba(155, 184, 152, 0.05) 100%);
    border-radius: 16px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  .plan-column.enterprise:hover::before {
    opacity: 1;
  }
  
  .plan-column {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    transition: transform 0.3s ease;
  }
  
  .plan-column:hover {
    transform: translateY(-8px);
  }
  
  .plan-column.featured {
    background: linear-gradient(135deg, rgba(122, 156, 168, 0.15) 0%, rgba(138, 172, 184, 0.1) 100%);
    border-radius: 24px;
    padding: 32px 24px;
    margin: -32px 0;
    border: 2px solid rgba(122, 156, 168, 0.3);
  }
  
  /* Divider */
  .divider {
    width: 1px;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 10%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.1) 90%,
      transparent 100%
    );
    position: relative;
  }
  
  .divider::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.3);
  }
  
  /* Plan Content */
  .badge {
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #7a9ca8 0%, #8aacb8 100%);
    color: white;
    padding: 6px 20px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    box-shadow: 0 4px 12px rgba(122, 156, 168, 0.4);
    z-index: 10;
  }
  
  .plan-header {
    margin-bottom: 24px;
    text-align: center;
  }
  
  .plan-name {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0 0 8px 0;
    color: #ffffff;
  }
  
  .plan-description {
    font-size: 0.95rem;
    margin: 0;
    color: rgba(255, 255, 255, 0.6);
  }
  
  .price-wrapper {
    margin-bottom: 32px;
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 6px;
  }
  
  .price {
    font-size: 3rem;
    font-weight: 700;
    color: #ffffff;
    line-height: 1;
  }
  
  .period {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.5);
  }
  
  .features-list {
    list-style: none;
    padding: 0;
    margin: 0 0 32px 0;
    flex-grow: 1;
  }
  
  .features-list li {
    padding: 12px 0;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.95rem;
    font-weight: 500;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  .features-list li:last-child {
    border-bottom: none;
  }
  
  .plan-column.starter .get-started-btn {
    background: linear-gradient(135deg, rgba(155, 142, 164, 0.2) 0%, rgba(165, 153, 175, 0.15) 100%);
    border-color: rgba(155, 142, 164, 0.3);
  }
  
  .plan-column.starter .get-started-btn:hover {
    background: linear-gradient(135deg, rgba(155, 142, 164, 0.3) 0%, rgba(165, 153, 175, 0.25) 100%);
    border-color: rgba(155, 142, 164, 0.5);
  }
  
  .plan-column.essentials .get-started-btn {
    background: linear-gradient(135deg, rgba(193, 122, 111, 0.2) 0%, rgba(204, 139, 129, 0.15) 100%);
    border-color: rgba(193, 122, 111, 0.3);
  }
  
  .plan-column.essentials .get-started-btn:hover {
    background: linear-gradient(135deg, rgba(193, 122, 111, 0.3) 0%, rgba(204, 139, 129, 0.25) 100%);
    border-color: rgba(193, 122, 111, 0.5);
  }
  
  .plan-column.enterprise .get-started-btn {
    background: linear-gradient(135deg, rgba(139, 168, 136, 0.2) 0%, rgba(155, 184, 152, 0.15) 100%);
    border-color: rgba(139, 168, 136, 0.3);
  }
  
  .plan-column.enterprise .get-started-btn:hover {
    background: linear-gradient(135deg, rgba(139, 168, 136, 0.3) 0%, rgba(155, 184, 152, 0.25) 100%);
    border-color: rgba(139, 168, 136, 0.5);
  }
  
  .get-started-btn {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    padding: 14px 28px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    margin-top: auto;
    backdrop-filter: blur(10px);
  }
  
  .get-started-btn:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.1);
  }
  
  .featured-btn {
    background: linear-gradient(135deg, #7a9ca8 0%, #8aacb8 100%);
    border: none;
    box-shadow: 0 4px 16px rgba(122, 156, 168, 0.3);
  }
  
  .featured-btn:hover {
    background: linear-gradient(135deg, #8aacb8 0%, #9abcc8 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(122, 156, 168, 0.4);
  }
  
  /* Section Footer */
  .section-footer {
    text-align: center;
    padding-top: 48px;
  }
  
  .footer-text {
    font-size: 1.125rem;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
  }
  
  .contact-link {
    color: #7a9ca8;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .contact-link:hover {
    color: #8aacb8;
    text-decoration: underline;
  }
  
  /* Responsive */
  @media (max-width: 1200px) {
    .unified-pricing-card {
      grid-template-columns: 1fr auto 1fr;
      padding: 48px 32px;
    }
  
    .plan-column:nth-child(n+6) {
      display: none;
    }
  
    .divider:nth-child(n+4) {
      display: none;
    }
  }
  
  @media (max-width: 768px) {
    .pricing-section {
      padding: 80px 5%;
    }
  
    .section-title {
      font-size: 2rem;
    }
  
    .section-description {
      font-size: 1rem;
    }
  
    .unified-pricing-card {
      grid-template-columns: 1fr;
      padding: 40px 24px;
      gap: 40px;
    }
  
    .divider {
      width: 100%;
      height: 1px;
      background: linear-gradient(
        to right,
        transparent 0%,
        rgba(255, 255, 255, 0.1) 10%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0.1) 90%,
        transparent 100%
      );
    }
  
    .divider::before {
      top: 50%;
      left: 50%;
    }
  
    .plan-column {
      padding: 0;
    }
  
    .plan-column.featured {
      margin: 0;
      padding: 32px 20px;
    }
  
    .price {
      font-size: 2.5rem;
    }
  
    .features-list li {
      font-size: 0.9rem;
      padding: 10px 0;
    }
  }
  </style>