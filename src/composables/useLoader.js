import { ref } from 'vue'

const isLoading = ref(false)

export function useLoader() {
  function showLoader() {
    isLoading.value = true
  }

  function hideLoader() {
    isLoading.value = false
  }

  return {
    isLoading,
    showLoader,
    hideLoader,
  }
}
