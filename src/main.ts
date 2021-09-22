import Vue from "vue";
import { App, router } from "./UI";
import { makeStore } from "./store";
import { prepareStorage, prepareServices } from "./UI/plugins";
import "./assets/tailwind.css";

Vue.config.productionTip = false;

const store = makeStore();

prepareStorage(store);
prepareServices(store);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
