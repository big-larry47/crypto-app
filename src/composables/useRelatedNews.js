// src/pages/News/composables/useRelatedNews.js

export function useRelatedNews(allArticles, currentArticle) {
    if (!currentArticle || !allArticles) return []
  
    // Related by category
    const related = allArticles.filter(
      a => a.category === currentArticle.category && a.id !== currentArticle.id
    )
  
    // If not enough related, fallback to random ones
    if (related.length < 3) {
      const randomFill = allArticles
        .filter(a => a.id !== currentArticle.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3 - related.length)
  
      return [...related, ...randomFill]
    }
  
    return related.slice(0, 3)
  }
  