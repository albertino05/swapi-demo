import Vue from "vue";
import { makeStorage, ApiStore } from "@/store";

export const prepareStorage = (store: ApiStore): void => {
  store.$storage = makeStorage(store);

  Vue.mixin({
    beforeCreate() {
      this.$storage = store.$storage;
    },
  });
};
