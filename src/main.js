import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store.js";
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
const myMixin = {
  methods: {
     getAllFuncs(toCheck) {var props = [];var obj = toCheck;  do {props = props.concat(Object.getOwnPropertyNames(obj));} while (obj = Object.getPrototypeOf(obj));return props.sort().filter(function(e, i, arr) {  if (e!=arr[i+1] && typeof toCheck[e] == 'function') return true;});}
  }
}
createApp(App)
  .use(router)
  .use(store)
.use(VuePlyr)
  .mount("#app");
//    "development": "NODE_ENV=development concurrently --kill-others \"npm run serve\" \"npm run server\"",
