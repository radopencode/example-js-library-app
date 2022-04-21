import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Legra from "legra";

createApp(App).use(router).mount("#app");

const ctx = myCanvas.getContext("2d");

const legra = new Legra(ctx, 32, { color: "blue" });
