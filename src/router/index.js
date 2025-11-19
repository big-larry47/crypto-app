import { createRouter, createWebHistory } from 'vue-router'
import { useLoader } from '@/composables/useLoader'

// Views
import Home from '@/pages/Home/Home.vue'
import AboutView from '@/pages/About/About.vue'
import FaqView from '@/pages/Faq/Faq.vue'
import ServicesView from '@/pages/Services/Services.vue'
import TutorialsView from '@/pages/Tutorials/Tutorials.vue'
import ContactView from '@/pages/Contact/Contact.vue'
import News from '@/pages/News/News.vue'
import NewsDetail from '@/pages/News/NewsPage.vue'

const loader = useLoader()

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/faq', name: 'Faq', component: FaqView },
  { path: '/services', name: 'Services', component: ServicesView },
  { path: '/tutorials', name: 'Tutorials', component: TutorialsView },
  { path: '/contact', name: 'Contact', component: ContactView },

  { path: '/news', name: 'News', component: News },

  {
    path: '/news/:id',
    name: 'NewsDetail',
    component: NewsDetail,
    props: true,
  },

  {
    path: '/tutorial/:id',
    name: 'TutorialDetails',
    component: () => import('@/pages/Tutorials/TutorialDetails.vue'),
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// 🌀 Show loading on route switch
router.beforeEach(() => {
  loader.showLoader()
})

// 🌀 Hide loading once route finishes rendering
router.afterEach(() => {
  setTimeout(() => loader.hideLoader(), 350)
})

export default router
