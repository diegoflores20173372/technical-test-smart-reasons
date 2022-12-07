import electronicBillingRouter from '@/modules/electronic-billing/router'
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

const routes = [
    {
        path: '',
        name: 'Home',
        component: Home
    },
    {
        path: '/bills',
        ...electronicBillingRouter
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
