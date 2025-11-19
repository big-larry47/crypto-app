<template>
  <div class="news-page">
    <Header />

    <section class="news-detail">
      <div class="container">
        <!-- Loading and error states -->
        <div v-if="loading || loadingFull" class="loading">Loading article...</div>
        <div v-else-if="error" class="error">{{ error }}</div>

        <!-- Show article when ready -->
        <div v-else-if="article" class="content-wrapper">
          <div class="main-content">
            <h1 class="news-title">{{ article.title }}</h1>

            <img
              v-if="article.image || article.thumbnail"
              :src="article.image || article.thumbnail"
              alt="News image"
              class="news-image"
            />

            <div class="news-meta">
              <span class="category">{{ article.category || 'General' }}</span>
              <span class="dot">•</span>
              <span class="source">
                {{ article.source?.title || article.domain || 'Unknown Source' }}
              </span>
            </div>

            <p class="news-content">
              <span v-if="loadingFull">Fetching full article...</span>
              <span v-else-if="errorFull">{{ errorFull }}</span>
              <span v-else>{{ fullArticle?.fullText || article.description || 'No content available.' }}</span>
            </p>

            <!-- Fallback link to original article -->
            <a
              v-if="article.url"
              :href="article.url"
              target="_blank"
              rel="noopener noreferrer"
              class="external-link"
            >
              Read full article →
            </a>

            <router-link to="/news" class="back-link">← Back to News</router-link>
          </div>

          <aside class="sidebar">
            <RelatedNews :related="related" />
          </aside>
        </div>

        <!-- Fallback if no article -->
        <div v-else class="error">Article not found.</div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import RelatedNews from './Sections/RelatedNews.vue'
import { useCryptoNews } from '@/composables/useCryptoNews.js'
import { useRelatedNews } from '@/composables/useRelatedNews.js'
import { useFullArticle } from '@/composables/useFullArticle.js'

const route = useRoute()

// 🧭 Grab article passed via <router-link :state="{ article }">
const routeArticle = route.state?.article

// 📰 Fetch all news from CryptoPanic
const { articles, loading, error } = useCryptoNews()

// 🧩 Fetch full content using NewsData.io
const { content: fullArticle, loading: loadingFull, error: errorFull, fetchFullArticle } = useFullArticle()

// 🧠 Determine current article (via route or fetched list)
const article = computed(() => {
  if (routeArticle) return routeArticle
  if (!articles.value || articles.value.length === 0) return null
  return articles.value.find(a => String(a.id) === route.params.id)
})

// 🧩 Related articles
const related = computed(() => (article.value ? useRelatedNews(articles.value, article.value) : []))

// ⛓ Fetch full article text on load
onMounted(() => {
  if (article.value?.title) {
    fetchFullArticle(article.value.title)
  }
})
</script>

<style scoped>
.news-page {
  background: #0b0b12;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.news-detail {
  flex: 1;
  padding: 80px 20px;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 60px;
  align-items: start;
}

.main-content {
  min-width: 0;
}

.sidebar {
  position: sticky;
  top: 100px;
}

.news-image {
  width: 100%;
  border-radius: 20px;
  margin-bottom: 40px;
  object-fit: cover;
  box-shadow: 0 8px 20px rgba(0, 255, 183, 0.1);
}

.news-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #ffffff;
}

.news-meta {
  color: #aaa;
  font-size: 0.95rem;
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.category {
  color: #00d4ff;
  text-transform: uppercase;
  font-weight: 600;
}

.dot {
  color: #555;
}

.news-content {
  font-size: 1.05rem;
  color: #d1d1d8;
  line-height: 1.8;
  margin-bottom: 50px;
}

.back-link,
.external-link {
  color: #00d4ff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
  display: inline-block;
  margin-top: 20px;
}

.back-link:hover,
.external-link:hover {
  color: #00d4ff;
}

@media (max-width: 768px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .sidebar {
    position: static;
  }

  .news-title {
    font-size: 1.8rem;
  }

  .news-content {
    font-size: 0.95rem;
  }
}
</style>
