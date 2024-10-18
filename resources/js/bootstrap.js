import axios from "axios";

import { createApp } from "vue";
window.axios = axios;

import App from "./components/App.vue";
import router from "./router";

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

createApp(App).use(router).mount("#app");
