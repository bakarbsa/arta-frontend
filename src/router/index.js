import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/artamart',
        name: 'Artamart',
        component: () => import('../views/products/Artamart.vue')
    },
    {
        path: '/articles',
        name: 'Articles',
        component: () => import('../views/article/Article.vue')
    },
    {
        path: '/articles/articledetails',
        name: 'Article Details',
        component: () => import('../views/article/ArticleDetails')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
    }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router   