import VueRouter from "vue-router"
import Vue from 'vue'
Vue.use(VueRouter);
const routes = [
    {        
        path: '/',
        redirect: '/Inicio'
    },    
    {
        path: "/",
        component: {
            render(c) {
                return c("router-view")
            }
        },
        children: [
            {
                path: '/Inicio',
                name: 'Inicio',
                component: () => import("../components/Inicio.vue")
            },             
            {
                path: '/Formulario',
                name: 'Formulario',
                component: () => import("../components/Formulario.vue")
            }, 
            {
                path: '/Paginacion',
                name: 'Paginacion',
                component: () => import("../components/Paginacion.vue")
            },            
        ],
    }
]

const router = new VueRouter({ routes });
export default router;