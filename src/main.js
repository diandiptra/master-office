import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";

import TheHeader from "./components/UI/TheHeader.vue";

const app = createApp(App);

app.use(router);

app.use(store);

app.component("the-header", TheHeader);

app.mount("#app");
