import Vue from "vue";
import { App, router } from "./UI";
import { makeStore } from "./store";

Vue.config.productionTip = false;

const store = makeStore();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
