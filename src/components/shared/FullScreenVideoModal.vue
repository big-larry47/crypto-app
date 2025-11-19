<template>
    <div class="fullscreen-wrapper">
      <!-- Header -->
      <header class="main-header">
        <div class="header-content">
          <div v-if="loading" class="skeleton skeleton-header-title"></div>
          <h1 v-else class="header-title">CRYPTORIQ TV</h1>
  
          <div v-if="loading" class="skeleton skeleton-header-button"></div>
          <button v-else class="close-btn" @click="closeModal">Exit</button>
        </div>
      </header>
  
      <div class="content-container">
        <!-- Skeleton Loading -->
        <div v-if="loading" class="skeleton-container">
          <!-- Left Column Skeleton -->
          <div class="left-column">
            <div class="skeleton skeleton-video"></div>
            <div class="skeleton skeleton-title"></div>
  
            <div class="skeleton-uploader">
              <div class="skeleton skeleton-avatar"></div>
              <div class="skeleton-creator">
                <div class="skeleton skeleton-name"></div>
                <div class="skeleton skeleton-subscribers"></div>
              </div>
              <div class="skeleton skeleton-stats"></div>
            </div>
  
            <div class="skeleton skeleton-description"></div>
            <div class="skeleton skeleton-description-short"></div>
          </div>
  
          <!-- Right Sidebar Skeleton -->
          <div class="right-sidebar">
            <div class="skeleton-review-card">
              <div class="skeleton skeleton-review-header"></div>
              <div class="skeleton skeleton-review-count"></div>
  
              <div class="skeleton-reviews">
                <div v-for="i in 5" :key="i" class="skeleton-review-item">
                  <div class="skeleton skeleton-review-avatar"></div>
                  <div class="skeleton-review-content">
                    <div class="skeleton skeleton-review-name"></div>
                    <div class="skeleton skeleton-review-text"></div>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
        </div>
  
        <!-- Actual Content -->
        <div v-else class="actual-content">
          <!-- LEFT MAIN VIDEO AREA -->
          <div class="left-column">
            <!-- Video Player -->
            <div class="video-card" :style="{ backgroundImage: isPlaying ? 'none' : 'url(' + posterImage + ')' }">
  <video
    ref="videoEl"
    src="@/assets/cryptoriq.MP4"
    autoplay
    playsinline
    preload="auto"
    class="real-video"
  ></video>

  <div class="video-overlay">
    <div class="video-controls">
      <button class="control-btn" @click="toggleVideo">
        {{ isPlaying ? '⏸' : '▶️' }}
      </button>

      <input
        type="range"
        class="timeline-slider"
        min="0"
        :max="duration"
        step="0.1"
        v-model="currentTime"
        @input="seekVideo"
      />

      <button class="control-btn" @click="toggleMute">
        {{ isMuted ? '🔇' : '🔊' }}
      </button>
    </div>
  </div>
</div>



  
            <!-- VIDEO DETAILS -->
            <div class="video-info">
              <h2 class="video-title">
                Basic Skateboard Riding & Safety Equipment
              </h2>
  
              <!-- Creator Info -->
              <div class="uploader-section">
                <img src="@/assets/cryp_logo.png" class="avatar"/>
<div class="creator-info">
  <div class="creator-name">
    <h3>Cryptoriq Tv</h3>
    <!-- Instagram-style verified badge -->
    <svg class="verified-badge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="#0a84ff" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-280 96l184-184-40-40-144 144-72-72-40 40 112 112z"/>
    </svg>
  </div>
  <p class="subscribers">{{ formatNumber(1980893) }} subscribers</p>
</div>

  
                <!-- Stats -->
                <div class="video-stats">
                  <span class="stat-item">{{ formatNumber(views) }} views</span>
                  <span class="separator">•</span>
  
                  <div class="likes" @click="toggleLike">
                    <span class="like-icon" :class="{ liked: liked }">
                      {{ liked ? '❤️' : '🤍' }}
                    </span>
                    <span :class="{ liked: liked }">{{ formatNumber(likes) }}</span>
                  </div>
                </div>
              </div>
  
              <!-- Description -->
              <p class="video-description">
                Learn the fundamentals of skateboarding with proper technique and essential safety equipment...
              </p>
            </div>
          </div>
  
          <!-- RIGHT SIDEBAR -->
          <div class="right-sidebar">
            <div class="review-card">
  
              <div class="review-header">
                <h3 class="sidebar-title">Reviews</h3>
                <p class="review-count">15,986 people</p>
              </div>
  
              <div class="review-list">
                <div class="review-item" v-for="review in reviews" :key="review.id">
                  <img :src="review.avatar" class="review-avatar" />
                  <div class="review-content">
                    <div class="review-top">
                      <p class="review-name">{{ review.name }}</p>
                      <div class="review-stars">
                        <span v-for="star in review.rating" :key="star">★</span>
                      </div>
                    </div>
                    <p class="review-message">{{ review.message }}</p>
                  </div>
                </div>
              </div>
  
              <!-- Subscription Error -->
              <div v-if="errorMessage" class="error-box">
                {{ errorMessage }}
              </div>
  
             
  
              <!-- Review Input -->
              <div class="review-input">
                <input
                  v-model="reviewText"
                  placeholder="Write your review..."
                  @keyup.enter="submitReview"
                  @input="onInput"
                />
                <button
                  @click="submitReview"
                  :disabled="!reviewText.trim()"
                >
                  Post
                </button>
              </div>
  
            </div>
          </div>
  
        </div>
      </div>
  
      <!-- ✨ UPDATED SUBSCRIPTION MODAL -->
      <div v-if="showSubscriptionModal" class="subscription-modal-overlay">
        <div class="subscription-modal-box">
  
          <!-- Main message -->
          <p class="modal-main-text">{{ modalMessage }}</p>
  

  
          <!-- Close button -->
          <button class="subscription-close-btn" @click="closeSubscriptionModal">
            Close
          </button>
  
        </div>
      </div>
  
    </div>
  </template>
  

  <script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { useReviews } from "@/composables/useReviews";

// Emit close
const emit = defineEmits(["close"]);
const closeModal = () => emit("close");

// Poster image for UI
const posterImage = ref("https://picsum.photos/1200/675");

// Video reference
const videoEl = ref(null);

// ===== 🎬 VIDEO PLAYER STATE =====
const isPlaying = ref(false);
const isMuted = ref(true);
const duration = ref(0);
const currentTime = ref(0);

// Toggle Play & Pause
const toggleVideo = () => {
  if (!videoEl.value) return;
  if (videoEl.value.paused) {
    videoEl.value.play();
  } else {
    videoEl.value.pause();
  }
};

// Toggle mute
const toggleMute = () => {
  if (!videoEl.value) return;
  videoEl.value.muted = !videoEl.value.muted;
  isMuted.value = videoEl.value.muted;
};

// Seek timeline
const seekVideo = () => {
  if (videoEl.value) {
    videoEl.value.currentTime = currentTime.value;
  }
};

// ===== 🎬 END VIDEO PLAYER STATE =====

// Subscription & error state
const hasActivePlan = ref(false);
const errorMessage = ref("");

// Modal state
const showSubscriptionModal = ref(false);
const modalMessage = ref("");

const openSubscriptionModal = (msg) => {
  modalMessage.value = msg;
  showSubscriptionModal.value = true;
};

const closeSubscriptionModal = () => {
  showSubscriptionModal.value = false;
};

// Loading + content state
const loading = ref(true);
const likes = ref(1542);
const views = ref(19809);
const liked = ref(false);
const reviewText = ref("");

// Load reviews from composable
const { reviews } = useReviews();

onMounted(async () => {
  document.body.style.overflow = "hidden";

  await nextTick();

  if (videoEl.value) {
    // ✅ Unmute and autoplay immediately on modal open
    videoEl.value.muted = false;
    videoEl.value.play().catch(() => {
      console.log("Autoplay blocked, user interaction required");
    });

    // Event listeners
    videoEl.value.addEventListener("loadedmetadata", () => {
      duration.value = videoEl.value.duration;
    });
    videoEl.value.addEventListener("timeupdate", () => {
      currentTime.value = videoEl.value.currentTime;
    });
    videoEl.value.addEventListener("play", () => { isPlaying.value = true; });
    videoEl.value.addEventListener("pause", () => { isPlaying.value = false; });
  }

  setTimeout(() => { loading.value = false; }, 1500);
});


onUnmounted(() => {
  document.body.style.overflow = "";
});

// Like system
const toggleLike = () => {
  liked.value = !liked.value;
  likes.value += liked.value ? 1 : -1;
};

const formatNumber = (num) => num.toLocaleString();

const onInput = () => {
  if (errorMessage.value) errorMessage.value = "";
};

// Post review
const submitReview = () => {
  const text = reviewText.value.trim();
  if (!text) return;

  if (!hasActivePlan.value) {
    openSubscriptionModal("Only subscribed members can post reviews.");
    return;
  }

  reviews.value.unshift({
    id: Date.now(),
    name: "You",
    rating: 5,
    message: text,
    avatar: "https://i.pravatar.cc/50?img=10",
  });

  reviewText.value = "";
  errorMessage.value = "";
};

// Demo subscription
const subscribe = () => {
  openSubscriptionModal("Subscription system is disabled in demo mode.");
};
</script>



  
  
  
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .real-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;     /* <-- keeps video inside without stretching page */
  z-index: 1;
}

.video-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
}

.verified-badge {
  width: 18px;
  height: 18px;
  margin-left: 6px;
  vertical-align: middle;
}



  /* ============================
   SUBSCRIPTION MODAL STYLES
============================ */

.subscription-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.subscription-modal-box {
  background: #1b1d24;
  padding: 22px 26px;
  width: 90%;
  max-width: 420px;
  border-radius: 14px;
  text-align: center;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.12);
  animation: modalPop 0.25s ease;
}

.subscription-modal-box p {
  font-size: 15px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.subscription-close-btn {
  background: #4e9eff;
  color: #fff;
  padding: 10px 22px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  transition: 0.2s;
}

.subscription-close-btn:hover {
  opacity: 0.85;
}

@keyframes modalPop {
  0% {
    opacity: 0;
    transform: scale(0.85);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

  
  /* FULLSCREEN BACKDROP */
  .fullscreen-wrapper {
    position: fixed;
    inset: 0;
    background: linear-gradient(to bottom, #000000, #0a0a0a);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 999999;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif;
  }
  
  /* HEADER */
  .main-header {
    width: 100%;
    padding: 0 80px;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    position: sticky;
    top: 0;
    z-index: 100;
    flex-shrink: 0;
    box-sizing: border-box;
  }
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1450px;
    margin: 0 auto;
    padding: 20px 0;
  }
  
  .header-title {
    font-size: 24px;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    letter-spacing: 2px;
    background: linear-gradient(135deg, #0a84ff 0%, #00d4ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  /* CLOSE BUTTON */
  .close-btn {
    width: 70px;
    height: 36px;
    border-radius: 10px;
    background: linear-gradient(135deg, rgba(255,59,48,0.9) 0%, rgba(255,45,85,0.9) 100%);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.15);
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(255,59,48,0.3);
  }
  
  .close-btn:hover {
    background: linear-gradient(135deg, rgba(255,59,48,1) 0%, rgba(255,45,85,1) 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255,59,48,0.4);
  }
  
  /* PAGE LAYOUT */
  .content-container {
    display: flex;
    gap: 48px;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 40px 80px 60px;
    flex: 1;
    box-sizing: border-box;
  }
  
  /* LEFT COLUMN */
  .left-column {
    flex: 2;
  }
  
  /* VIDEO PLAYER CARD */
  .video-card {
    position: relative;
    border-radius: 16px;
    height: 500px;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    box-shadow: 0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03);
    transition: transform 0.3s ease;
  }
  
  .video-card:hover {
    transform: translateY(-2px);
  }
  
  .video-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(
    to top,
    rgba(0,0,0,0.7) 0%,
    rgba(0,0,0,0.1) 40%,
    transparent 100%
  );
  z-index: 3;
}

.video-controls {
  width: 96%;
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(0,0,0,0.45);
  padding: 12px 16px;
  border-radius: 12px;
  backdrop-filter: blur(12px);
}

.control-btn {
  background: none;
  border: none;
  color: white;
  font-size: 22px;
  cursor: pointer;
}

.control-btn:hover {
  opacity: 0.7;
}

.timeline {
  flex: 1;
  height: 4px;
  cursor: pointer;
  border-radius: 4px;
  background: rgba(255,255,255,0.3);
}

  
  
  
  /* VIDEO INFO */
  .video-info {
    margin-top: 32px;
  }
  
  .video-title {
    font-size: 32px;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 20px 0;
    letter-spacing: -0.5px;
    line-height: 1.2;
  }
  
  .uploader-section {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px 0;
    border-top: 1px solid rgba(255,255,255,0.06);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    margin-bottom: 24px;
  }
  
  .avatar {
    width: 48px;
    height: 48px;
    
  }
  
  .creator-info {
    flex: 1;
  }
  
  .creator-name {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .creator-name h3 {
    font-size: 17px;
    font-weight: 600;
    color: #ffffff;
    margin: 0;
  }
  
  .verified {
    font-size: 16px;
    color: #0a84ff;
  }
  
  .subscribers {
    font-size: 14px;
    color: #a1a1a6;
    margin: 4px 0 0 0;
  }
  
  .video-stats {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 15px;
    color: #a1a1a6;
    margin-left: auto;
  }
  
  .stat-item {
    color: #a1a1a6;
  }
  
  .separator {
    color: #a1a1a6;
  }
  
  .likes {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: color 0.2s;
  }
  
  .like-icon {
    font-size: 20px;
    transition: transform 0.2s;
  }
  
  .likes:hover .like-icon {
    transform: scale(1.1);
  }
  
  .likes span.liked {
    color: #ff4444;
  }
  
  .video-description {
    font-size: 15px;
    color: #d1d1d6;
    line-height: 1.6;
    margin-top: 0;
  }
  
  /* RIGHT SIDEBAR */
  .right-sidebar {
    flex: 0.75;
    display: flex;
    flex-direction: column;
  }
  
  .review-card {
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    border-radius: 16px;
    padding: 28px;
    height: 700px;
  }
  
  .review-header {
    margin-bottom: 24px;
  }
  
  .sidebar-title {
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    margin: 0 0 4px 0;
  }
  
  .review-count {
    font-size: 14px;
    color: #a1a1a6;
    margin: 0;
  }
  
  .review-list {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 20px;
    padding-right: 8px;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  
  .review-list::-webkit-scrollbar {
    display: none;
  }
  
  .review-item {
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }
  
  .review-item:last-child {
    border-bottom: none;
  }
  
  .review-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1.5px solid rgba(255,255,255,0.1);
    flex-shrink: 0;
  }
  
  .review-content {
    flex: 1;
  }
  
  .review-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
  }
  
  .review-name {
    font-size: 15px;
    font-weight: 600;
    color: #ffffff;
    margin: 0;
  }
  
  .review-stars {
    color: #ffcc00;
    font-size: 13px;
    letter-spacing: 1px;
  }
  
  .review-message {
    font-size: 14px;
    color: #d1d1d6;
    line-height: 1.5;
    margin: 0;
  }
  
  .review-input {
    display: flex;
    gap: 12px;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.06);
  }
  
  .review-input input {
    flex: 1;
    padding: 12px 16px;
    border-radius: 10px;
    background: rgba(58,58,60,0.8);
    border: 1px solid rgba(255,255,255,0.08);
    color: #ffffff;
    font-size: 15px;
    outline: none;
    transition: all 0.2s;
    font-family: inherit;
  }
  
  .review-input input:focus {
    background: rgba(58,58,60,1);
    border-color: rgba(255,255,255,0.15);
  }
  
  .review-input input::placeholder {
    color: #a1a1a6;
  }
  
  .review-input button {
    padding: 12px 20px;
    border-radius: 10px;
    background: linear-gradient(135deg, #0a84ff 0%, #0066cc 100%);
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
  }
  
  .review-input button:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(10,132,255,0.3);
  }
  
  .review-input button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  /* Skeleton Loading Styles */
  .skeleton-container {
    display: flex;
    gap: 48px;
    width: 100%;
    animation: fadeIn 0.3s ease;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .actual-content {
    display: flex;
    gap: 48px;
    width: 100%;
    animation: fadeIn 0.5s ease;
  }
  
  .skeleton {
    background: linear-gradient(90deg, rgba(58,58,60,0.4) 25%, rgba(78,78,80,0.5) 50%, rgba(58,58,60,0.4) 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 12px;
  }
  
  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  
  .skeleton-video {
    width: 100%;
    height: 500px;
    margin-bottom: 32px;
    border-radius: 16px;
  }
  
  .skeleton-title {
    width: 70%;
    height: 38px;
    margin-bottom: 20px;
  }
  
  .skeleton-uploader {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px 0;
    border-top: 1px solid rgba(255,255,255,0.06);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    margin-bottom: 24px;
  }
  
  .skeleton-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  
  .skeleton-creator {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .skeleton-name {
    width: 150px;
    height: 20px;
  }
  
  .skeleton-subscribers {
    width: 120px;
    height: 16px;
  }
  
  .skeleton-stats {
    width: 200px;
    height: 20px;
  }
  
  .skeleton-description {
    width: 100%;
    height: 18px;
    margin-bottom: 12px;
  }
  
  .skeleton-description-short {
    width: 85%;
    height: 18px;
  }
  
  .skeleton-review-card {
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    border-radius: 16px;
    padding: 28px;
    height: 700px;
  }
  
  .skeleton-review-header {
    width: 120px;
    height: 24px;
    margin-bottom: 8px;
  }
  
  .skeleton-review-count {
    width: 100px;
    height: 16px;
    margin-bottom: 24px;
  }
  
  .skeleton-reviews {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  
  .skeleton-review-item {
    display: flex;
    gap: 12px;
  }
  
  .skeleton-review-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  
  .skeleton-review-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .skeleton-review-name {
    width: 120px;
    height: 18px;
  }
  
  .skeleton-review-text {
    width: 100%;
    height: 16px;
  }
  
  /* Header Skeleton Styles */
  .skeleton-header-title {
    width: 200px;
    height: 28px;
  }
  
  .skeleton-header-button {
    width: 70px;
    height: 36px;
    border-radius: 10px;
  }
  
  /* Responsive */
  @media (max-width: 1200px) {
    .content-container {
      flex-direction: column;
    }
    
    .skeleton-container {
      flex-direction: column;
    }
    
    .review-card,
    .skeleton-review-card {
      height: 500px;
    }
  }
  </style>