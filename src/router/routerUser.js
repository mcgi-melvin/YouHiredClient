import routerCandidate from "@/router/routerCandidate";
import routerEmployer from "@/router/routerEmployer";
import routerPage from "@/router/routerPage";

export default {
    path: "/user", // TODO: add user id or token in the param
    name: "user",
    component: () => import("@/views/user/UserMain.vue"),
    children: [
        routerCandidate,
        routerEmployer,
        {
            path: "message",
            name: "user-message",
            component: () => import("@/views/user/page/UserMessages.vue"),
            redirect: { name: "message-list" },
            children: [
                {
                    path: "list",
                    name: "message-list",
                    component: () => import("@/views/user/message/UserMessageList.vue")
                },
                {
                    path: ":id",
                    name: "message-view",
                    component: () => import("@/views/user/message/UserMessageVIew.vue")
                }
            ]
        },
        {
            path: "setup",
            name: "user-setup",
            component: () => import("@/views/user/page/UserSetup.vue"),
            redirect: { name: "user-settings" },
            children: [
                {
                    path: "settings",
                    name: "user-settings",
                    component: () => import("@/views/user/setup/UserSettings.vue")
                },
                {
                    path: "profile",
                    name: "user-profile",
                    component: () => import("@/views/candidate/SetupProfile.vue")
                }
            ]
        }
    ]
}