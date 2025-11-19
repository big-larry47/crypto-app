<template>
  <section class="banner-section">
    <div class="container">
      <div class="video-card">
        <div class="video-container">
          <!-- Poster Image -->
          <img 
            :src="posterImage"
            class="video-player"
            alt="Video Poster"
          />

          <!-- Play Button -->
          <button class="play-button" @click.stop="openFullScreen">
            <svg class="play-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"></path>
            </svg>
            <span>Play</span>
          </button>

          <!-- Optional overlay play icon -->
          <div class="video-overlay">
            <div class="play-icon-center" @click="openFullScreen">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fullscreen Modal -->
    <FullScreenVideoModal
      v-if="showFullVideo"
      :videoSource="videoSource"
      :autoplayWithSound="true"
      @close="closeModal"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import FullScreenVideoModal from "@/components/shared/FullScreenVideoModal.vue";

const showFullVideo = ref(false);
const videoSource = ref("https://www.w3schools.com/html/mov_bbb.mp4"); // replace with your video
const posterImage = ref("https://picsum.photos/1200/675"); // optional poster

const openFullScreen = () => {
  showFullVideo.value = true;
};

const closeModal = () => {
  showFullVideo.value = false;
};
</script>


<style scoped>

/* Add modal styles at the bottom */
.fullscreen-modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
}

.video-wrapper {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.video-full {
  width: 100%;
  height: auto;
  max-height: 90vh;
  border-radius: 12px;
}

.close-btn {
  position: absolute;
  top: -14px;
  right: -14px;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  font-size: 22px;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0,0,0,0.6);
}

.banner-section {
  min-height: 70vh; /* reduced from 100vh */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0b0b12;
  padding: 40px 20px;
  position: relative;
}




.container {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
}

.video-card {
  position: relative;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  background: #1a1a24;
  border: 1px solid rgba(91, 76, 255, 0.2);
}

/* Video Container */
.video-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  background: #0b0b10;
  cursor: pointer;
  overflow: hidden;
}

.video-player {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Play Button (Top Left) */
.play-button {
  position: absolute;
  top: 24px;
  left: 24px;
  background: rgba(26, 26, 36, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(91, 76, 255, 0.3);
  border-radius: 50px;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  z-index: 10;
  font-size: 15px;
  font-weight: 500;
  color: #e0e0e0;
}

.play-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(91, 76, 255, 0.4);
  background: rgba(26, 26, 36, 1);
  border-color: rgba(91, 76, 255, 0.5);
}

.play-button.hidden {
  opacity: 0;
  pointer-events: none;
}

.play-icon {
  width: 16px;
  height: 16px;
  color: #5b4cff;
}

/* Video Overlay */
.video-overlay {
  position: absolute;
  inset: 0;
  background: rgba(11, 11, 16, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}

.play-icon-center {
  width: 80px;
  height: 80px;
  background: rgba(26, 26, 36, 0.95);
  border: 2px solid rgba(91, 76, 255, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.play-icon-center:hover {
  transform: scale(1.1);
  background: rgba(91, 76, 255, 0.2);
  border-color: rgba(91, 76, 255, 0.8);
}

.play-icon-center svg {
  width: 32px;
  height: 32px;
  color: #5b4cff;
  margin-left: 4px;
}

.replay-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: rgba(26, 26, 36, 0.95);
  border: 1px solid rgba(91, 76, 255, 0.3);
  padding: 24px 32px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.replay-button:hover {
  transform: scale(1.05);
  background: rgba(91, 76, 255, 0.2);
  border-color: rgba(91, 76, 255, 0.5);
}

.replay-button svg {
  width: 40px;
  height: 40px;
  color: #5b4cff;
}

.replay-button span {
  font-size: 16px;
  font-weight: 600;
  color: #e0e0e0;
}

/* Start Now Button Container */
.start-button-container {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
}

.start-button {
  background: #5b4cff;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 8px 24px rgba(91, 76, 255, 0.4);
  transition: all 0.3s ease;
}

.start-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(91, 76, 255, 0.5);
  background: #4a3de6;
}

.arrow-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.start-button:hover .arrow-icon {
  transform: translateX(4px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .banner-section {
    padding: 20px 16px;
  }

  .video-card {
    border-radius: 24px;
  }

  .play-button {
    top: 16px;
    left: 16px;
    padding: 10px 20px;
    font-size: 14px;
  }

  .play-icon {
    width: 14px;
    height: 14px;
  }

  .play-icon-center {
    width: 64px;
    height: 64px;
  }

  .play-icon-center svg {
    width: 24px;
    height: 24px;
  }

  .start-button-container {
    bottom: 24px;
  }

  .start-button {
    padding: 14px 28px;
    font-size: 15px;
  }

  .arrow-icon {
    width: 18px;
    height: 18px;
  }
}

@media (max-width: 480px) {
  .video-card {
    border-radius: 20px;
  }

  .start-button {
    padding: 12px 24px;
    font-size: 14px;
  }
}
</style>