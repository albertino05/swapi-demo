import Vue from "vue";
import Vuex, { Store } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";
import { ApiState } from "./store.types";

Vue.use(Vuex);

export const makeStore = (): Store<ApiState> =>
  new Vuex.Store<ApiState>({
    state: {
      version: 1,
      sections: {},
      resources: [],
      resource: {},
      loading: false,
    },
    actions,
    mutations,
    getters,
  });
