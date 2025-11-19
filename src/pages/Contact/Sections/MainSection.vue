<template>
    <div class="main-section">
      <div class="contact-container">
        <!-- Left Side - Robot Image -->
        <div class="contact-left">
          <div class="robot-container">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=800&fit=crop"
              alt="Bud Robot"
              class="robot-image"
            />
          </div>
        </div>
  
        <!-- Right Side - Form -->
        <div class="contact-right">
          <div class="form-wrapper">
            <form @submit.prevent="handleSubmit" class="contact-form">
              <!-- Support Type Dropdown -->
              <div class="form-group">
                <label class="form-label">How can we best support you?*</label>
                <div class="select-wrapper">
                  <select
                    v-model="formData.supportType"
                    class="form-select"
                    required
                  >
                    <option value="" disabled>Select one</option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                  <svg
                    class="select-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
  
              <!-- Full Name -->
              <div class="form-group">
                <label class="form-label">Full name*</label>
                <input
                  v-model="formData.fullName"
                  type="text"
                  class="form-input"
                  required
                />
              </div>
  
              <!-- Work Email -->
              <div class="form-group">
                <label class="form-label">Work Email*</label>
                <input
                  v-model="formData.email"
                  type="email"
                  class="form-input"
                  required
                />
              </div>
  
              <!-- Message -->
              <div class="form-group">
                <label class="form-label">Message*</label>
                <textarea
                  v-model="formData.message"
                  class="form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>
  
              <!-- Submit Button -->
              <button type="submit" class="submit-btn">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const formData = ref({
    supportType: '',
    fullName: '',
    email: '',
    message: ''
  });
  
  const handleSubmit = () => {
    console.log('Form submitted:', formData.value);
    // Add your form submission logic here
    alert('Message sent successfully!');
    
    // Reset form
    formData.value = {
      supportType: '',
      fullName: '',
      email: '',
      message: ''
    };
  };
  </script>
  
  <style scoped>
  .main-section {
    background: #0b0b12;
    min-height: 80vh;
    padding: 2rem 1rem;
    width: 100%;
  }
  
  .contact-container {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
    min-height: 80vh;
  }
  
  /* Left Side - Robot */
  .contact-left {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  
  .robot-container {
    width: 100%;
    max-width: 600px;
    aspect-ratio: 1;
    background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%);
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 20px 60px rgba(0, 212, 255, 0.3);
  }
  
  .robot-image {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
  
  /* Right Side - Form */
  .contact-right {
    padding: 2rem;
    display: flex;
    justify-content: center;
  }
  
  .form-wrapper {
    width: 100%;
    max-width: 500px;
  }
  
  .contact-form {
    width: 100%;
  }
  
  /* Form Elements */
  .form-group {
    margin-bottom: 1.75rem;
    width: 100%;
  }
  
  .form-label {
    display: block;
    color: #e5e7eb;
    font-size: 0.95rem;
    margin-bottom: 0.6rem;
    font-weight: 500;
  }
  
  .form-input,
  .form-select,
  .form-textarea {
    width: 100%;
    background: #1f2937;
    border: 1px solid #374151;
    border-radius: 0.5rem;
    padding: 1.1rem 1rem;
    color: white;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s, background-color 0.3s;
    box-sizing: border-box;
  }
  
  .form-input:focus,
  .form-select:focus,
  .form-textarea:focus {
    border-color: #00d4ff;
    background: #2d3748;
  }
  
  .form-input::placeholder,
  .form-textarea::placeholder {
    color: #6b7280;
  }
  
  /* Select Dropdown */
  .select-wrapper {
    position: relative;
    width: 100%;
  }
  
  .form-select {
    appearance: none;
    cursor: pointer;
    padding-right: 3rem;
  }
  
  .select-icon {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #00d4ff;
    pointer-events: none;
  }
  
  /* Textarea */
  .form-textarea {
    resize: vertical;
    min-height: 150px;
    padding: 1.1rem 1rem;
  }
  
  /* Submit Button */
  .submit-btn {
    width: 100%;
    background: #00d4ff;
    color: #0b0b12;
    border: none;
    border-radius: 0.5rem;
    padding: 1.2rem 2rem;
    font-size: 1.05rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    margin-top: 1.5rem;
    box-sizing: border-box;
  }
  
  .submit-btn:hover {
    background: #00b8e6;
    transform: translateY(-2px);
  }
  
  .submit-btn:active {
    transform: translateY(0);
  }
  
  /* Responsive */
  @media (max-width: 1024px) {
    .contact-container {
      grid-template-columns: 1fr;
    }
  
    .contact-left {
      order: 2;
    }
  
    .contact-right {
      order: 1;
    }
  
    .robot-container {
      max-width: 400px;
    }
  }
  
  @media (max-width: 768px) {
    .main-section {
      padding: 1rem;
    }
  
    .contact-left,
    .contact-right {
      padding: 1rem;
    }
  
    .robot-container {
      max-width: 300px;
    }
  
    .form-wrapper {
      max-width: 100%;
    }
  }
  </style>