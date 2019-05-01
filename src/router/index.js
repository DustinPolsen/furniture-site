import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('../views/Dashboard.vue'),
            children: [
                {
                    path: '/',
                    name: 'Home',
                    component: () => import('../views/Home/Home.vue')
                },
                {
                    path: '/about',
                    name: 'about',
                    component: () => import('../views/About/About.vue')
                },
                {
                    path: '/catalog',
                    name: 'catalog',
                    component: () => import('../views/Catalog/Catalog.vue')
                },
                {
                    path: '/contact',
                    name: 'contact',
                    component: () => import('../views/Contact/Contact.vue')
                },
                {
                    path: '/cart',
                    name: 'cart',
                    component: () => import('../views/Cart/Cart.vue')
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'error',
            component: () => import('../views/Error/Error.vue')
        },
    ]
})

export default router