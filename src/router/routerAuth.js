export default {
    path: '/auth',
    name: 'auth',
    component: () => import("@/views/auth/AuthMain.vue"),
    redirect: { name: 'auth-login' },
    children: [
        {
            path: "/auth/login",
            name: "auth-login",
            component: () => import("@/views/auth/AuthLogin.vue")
        },
        {
            path: "/auth/register",
            name: "auth-register",
            component: () => import("@/views/auth/AuthRegister.vue")
        },
        {
            path: "/auth/forgot-password",
            name: "auth-forgot-password",
            component: () => import("@/views/auth/AuthForgotPassword.vue")
        }
    ]
}