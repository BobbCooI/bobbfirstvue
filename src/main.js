import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store.js";
//import 'vue-material/dist/theme/all.scss'
createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
//    "development": "NODE_ENV=development concurrently --kill-others \"npm run serve\" \"npm run server\"",
