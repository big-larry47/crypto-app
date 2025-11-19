// src/composables/useFullArticle.js
import { ref } from 'vue'

export function useFullArticle() {
  const content = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchFullArticle = async (title) => {
    if (!title) return
    loading.value = true
    error.value = null
    content.value = null

    try {
      const apiKey = import.meta.env.VITE_NEWSDATA_API_KEY
      const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${encodeURIComponent(title)}&language=en`

      const res = await fetch(url)
      if (!res.ok) throw new Error('Failed to fetch full article')
      const data = await res.json()
      console.log('📰 NewsData.io full text response:', data)

      if (data.results && data.results.length > 0) {
        const item = data.results[0]
        content.value = {
          title: item.title,
          fullText: item.content || item.description || 'No detailed text found.',
          link: item.link || item.url
        }
      } else {
        error.value = 'No detailed article found.'
      }
    } catch (err) {
      console.error('❌ Error fetching full article:', err)
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { content, loading, error, fetchFullArticle }
}
