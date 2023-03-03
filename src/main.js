import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "@/assets/css/global.css";

createApp(App).use(store).use(router).mount("#app");
