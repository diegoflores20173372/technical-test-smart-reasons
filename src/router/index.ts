import electronicBillingRouter from '@/modules/electronic-billing/router'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [

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
