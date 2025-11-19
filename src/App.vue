<template>
  <LoadingOverlay :model-value="isLoading" />

  <DesktopLayout>
    <router-view v-slot="{ Component }" :key="route.fullPath">
      <transition
        appear
        enter-from-class="page-enter-from"
        enter-active-class="page-enter-active"
        enter-to-class="page-enter-to"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </DesktopLayout>
</template>

<script setup>
import { useLoader } from '@/composables/useLoader'
import { useRoute } from 'vue-router'
import DesktopLayout from '@/layouts/desktop/MainLayout.vue'
import LoadingOverlay from '@/components/shared/LoadingOverlay.vue'

const { isLoading } = useLoader()
const route = useRoute()
</script>

<style>
.page-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}
.page-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.page-enter-active {
  transition: opacity 0.45s ease, transform 0.45s ease;
}
</style>
