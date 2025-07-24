import home from '../components/home.vue'
import habitaciones from '../components/habitaciones.vue'
import deportes from '../components/deportes.vue'
import gastronomia from '../components/gastronomia.vue'
import servicios from '../components/servicios.vue'

import {createRouter, createWebHistory} from 'vue-router'


const routes =[
    {path: '/',component: home},
    {path: '/habitaciones',component: habitaciones},
    {path: '/deportes',component: deportes},
    {path: '/gastronomia',component: gastronomia},
    {path: '/servicios',component: servicios},
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
