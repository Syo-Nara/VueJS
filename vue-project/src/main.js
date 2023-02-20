import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import naive from "naive-ui";

import "./assets/main.css";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(faUserSecret);

const pinia = createPinia();

const app = createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(pinia);


app.use(router);
app.use(naive);

app.mount("#app");
