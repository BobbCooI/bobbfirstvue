import { createRouter, createWebHistory } from "vue-router";
/*import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import Login from '../views/Login.vue';*/
const NProgress = require("nprogress");
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
NProgress.configure({ easing: "ease-in-out", parent: ".navbar", speed:300});
const routes = [
  {
    path: "/",
    name: "homePage",
    component: import(/* webpackChunkName: "homePage" */ "../views/Home.vue")

  },
  {
    path: "/login",
    name: "loginPage",
    component: Login
  },
  {
    path: "/register",
    name: "registerPage",
    component: Register


  },
{
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "../views/NotFound.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
        // , offset: { x: 0, y: 10 }
      };
    }
  }
});
router.beforeEach((to, from, next) => {
  if(to.path) {
    NProgress.start();
  
setTimeout(() => {
    next();
}, 1000)
  }
});

router.afterEach((to, from) => {
    NProgress.done();
});
export default router;
