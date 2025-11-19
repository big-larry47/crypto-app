<template>
    <header :class="['navbar', { scrolled: isScrolled }]">
      <div class="navbar-container">
        <!-- Left: Logo -->
        <div class="navbar-left">
          <router-link to="/" class="logo-link">
            <div class="logo-box">
              <span class="logo-text">Cryptoriq</span>
            </div>
          </router-link>
        </div>
  
        <!-- Center: Navigation links -->
        <nav class="navbar-center">
  <ul class="navbar-links">
    <li><router-link to="/" class="nav-link" active-class="active">Home</router-link></li>
    <li><router-link to="/about" class="nav-link" active-class="active">About</router-link></li>
    <li><router-link to="/services" class="nav-link" active-class="active">Pricing</router-link></li>
    <li><router-link to="/tutorials" class="nav-link" active-class="active">Tutorials</router-link></li>
    <li><router-link to="/faq" class="nav-link" active-class="active">FAQ</router-link></li>
    <li><router-link to="/contact" class="nav-link" active-class="active">Contact</router-link></li>
    <li><router-link to="/news" class="nav-link" active-class="active">News</router-link></li>

  </ul>
</nav>

      </div>
    </header>
  </template>
  
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const isScrolled = ref(false)
  
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 10
  }
  
  onMounted(() => window.addEventListener('scroll', handleScroll))
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
  </script>
  
  <style scoped>
  /* ======== NAVBAR BASE ======== */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 1000;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  .navbar.scrolled {
    background: rgba(0, 0, 0, 0.98);
    box-shadow: 0 2px 20px rgba(0,0,0,0.5);
  }
  
  /* ======== CONTAINER ======== */
  .navbar-container {
    width: 95%;
    max-width: 1400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
  }
  
  /* ======== LEFT SECTION - LOGO ======== */
  .navbar-left {
    display: flex;
    align-items: center;
  }
  
  .logo-link {
    text-decoration: none;
  }
  
  .logo-box {
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50px;
    padding: 8px 24px;
    transition: all 0.3s ease;
  }
  
  .logo-box:hover {
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.03);
  }
  
  .logo-text {
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
    letter-spacing: 0.5px;
  }
  
  /* ======== CENTER NAVIGATION ======== */
  .navbar-center {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  
  .navbar-links {
    display: flex;
    align-items: center;
    gap: 8px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .navbar-links li {
    margin: 0;
  }
  
  .nav-link {
    text-decoration: none;
    color: #ffffff;
    padding: 10px 22px;
    border-radius: 50px;
    transition: all 0.3s ease;
    font-size: 0.95rem;
    font-weight: 400;
    display: inline-block;
  }
  
  .nav-link:hover {
    background: #988031;
  }
  
  .nav-link.active {
    background: #00d4ff;
    color: #000000;
    font-weight: 500;
  }
  
  /* ======== RIGHT SECTION - HAMBURGER ======== */
  .navbar-right {
    display: flex;
    align-items: center;
  }
  
  .hamburger-menu {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: all 0.3s ease;
  }
  
  .hamburger-menu:hover {
    opacity: 0.7;
  }
  
  .hamburger-menu span {
    width: 24px;
    height: 2px;
    background: #ffffff;
    border-radius: 2px;
    transition: all 0.3s ease;
  }
  
  /* ======== RESPONSIVE ======== */
  @media (max-width: 1200px) {
    .navbar-links {
      gap: 4px;
    }
    
    .nav-link {
      padding: 8px 16px;
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 900px) {
    .navbar-center {
      display: none;
    }
    
    .navbar-container {
      padding: 0 1rem;
    }
  }
  </style>