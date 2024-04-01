import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import GalleryPage from '../views/GalleryPage.vue'
import HobbyList from '../views/HobbyList.vue'



const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/gallery', component: GalleryPage },
  { path: '/hobbies', component: HobbyList }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
