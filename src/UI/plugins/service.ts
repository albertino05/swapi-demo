import Vue from "vue";
import { provider } from "@/service";
import { ApiStore } from "@/store";

export const prepareServices = (store: ApiStore): void => {
  store.$services = provider();

  Vue.mixin({
    beforeCreate() {
      this.$services = store.$services;
    },
  });
};
