import Vue from 'vue'
import VueRouter from 'vue-router'
import Ping from '@/components/Ping'
import Books from '@/components/Books'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Books',
        component: Books,
    },
    {
        path: '/ping',
        name: 'Ping',
        component: Ping,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router