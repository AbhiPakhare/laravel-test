import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "products.index",
        component: () => import("../products/Index.vue"),
    },
    {
        path: "/products/create",
        name: "products.create",
        component: () => import("../products/ProductCreate.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notFound",
        component: () => import("../components/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
