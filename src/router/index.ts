import { createRouter, createWebHistory } from 'vue-router'
import { WelcomePage } from '@/pages/welcome'
import { AboutMePage } from '@/pages/about-me'
import { ContactMePage } from '@/pages/contact-me'
import { ProjectsPage } from '@/pages/projects'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomePage,
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: AboutMePage,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsPage,
    },
    {
      path: '/contact-me',
      name: 'contact-me',
      component: ContactMePage,
    },
  ],
})

export default router
