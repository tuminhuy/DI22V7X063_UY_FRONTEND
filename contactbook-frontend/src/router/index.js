<<<<<<< HEAD
import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
const routes = [
{
path: "/",
name: "contactbook",
component: ContactBook,
},
];
const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes,
});
export default router;
=======
import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
const routes = [
{
path: "/",
name: "contactbook",
component: ContactBook,
},
{
path: "/:pathMatch(.*)*",
name: "notfound",
component: () => import("@/views/NotFound.vue"),
},
];
const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes,
});
export default router;

>>>>>>> f0bd00aeecad63bd0f1ab1498673a424e6759436
