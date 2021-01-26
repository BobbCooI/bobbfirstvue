import { createRouter, createWebHistory } from "vue-router";
import App from '../App.vue';
/*import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import Login from '../views/Login.vue';*/
import Load from '../components/Load.vue';
const routes = [
  {
    path: '/',
    name: 'homePage',
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: '/login',
    name: 'loginPage',
    component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue")

  },
  { path: "/:catchAll(.*)", name: "NotFound", component: () => import(/* webpackChunkName: "notFound" */  "../views/NotFound.vue") }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
scrollBehavior (to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash
      // , offset: { x: 0, y: 10 }
    }
  }
}
});
router.beforeEach((to, from, next)=> {
  Load.methods.toggleLoad(); 
  NProgress.start();
  setTimeout(() =>{
     Load.methods.toggleLoad(); 
next();
}, 2000)
  
                  });
router.afterEach((to, from) => {
  NProgress.done();
})
export default router;
