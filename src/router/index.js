import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import Login from '../views/Login.vue';
const routes = [
  {
    path: '/',
    name: 'homePage',
    component: Home
  },
  {
    path: '/login',
    name: 'loginPage',
    component: Login
  },
  { path: "/:catchAll(.*)", name: "NotFound", component: NotFound }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
export default router;
