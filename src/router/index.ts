import { createRouter, createWebHistory } from 'vue-router'
import { HelloPage } from '@/pages/hello'
import { AboutMePage } from '@/pages/about-me'
import { ContactMePage } from '@/pages/contact-me'
import { ProjectsPage } from '@/pages/projects'
import { EditorLayout } from '@/components/layout/editor-layout'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloPage,
    },
    {
      path: '/about-me',
      component: EditorLayout,
      children: [
        {
          path: '',
          name: 'about-me',
          component: AboutMePage,
        },
      ],
    },
    {
      path: '/projects',
      component: EditorLayout,
      children: [
        {
          path: '',
          name: 'projects',
          component: ProjectsPage,
        },
      ],
    },
    {
      path: '/contact-me',
      component: EditorLayout,
      children: [
        {
          path: '',
          name: 'contact-me',
          component: ContactMePage,
        },
      ],
    },
  ],
})

export default router
