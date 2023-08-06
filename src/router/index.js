import { createRouter, createWebHistory } from 'vue-router'
import routerAuth from "@/router/routerAuth";
import routerUser from "@/router/routerUser";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("@/views/Home.vue")
        },
        routerAuth,
        routerUser
    ]
})

export default router