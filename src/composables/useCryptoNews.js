import { ref, onMounted } from 'vue'

export function useCryptoNews() {
  const articles = ref([])
  const loading = ref(true)
  const error = ref(null)

  const fetchNews = async () => {
    try {
      const apiKey = import.meta.env.VITE_NEWSDATA_API_KEY
      const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=crypto&language=en`

      const res = await fetch(url)
      if (!res.ok) throw new Error('Failed to fetch news')

      const data = await res.json()
      console.log('📰 NewsData.io API response:', data)

      articles.value = (data.results || []).map((item, index) => ({
        id: item.guid || index,
        title: item.title,
        description: item.description || 'No description available',
        content: item.content || item.description || 'No content available',
        category: item.category?.[0] || 'General',
        image: item.image_url || 'https://placehold.co/300x200/0b0b12/00c896?text=Crypto+News',
        source: item.source_id || 'Unknown',
        url: item.link
      }))
    } catch (err) {
      error.value = err.message
      console.error('❌ Error fetching news:', err)
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchNews)

  return { articles, loading, error }
}
