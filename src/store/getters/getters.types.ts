import { ApiState, ApiRootState } from "../store.types";
import { GetterTree } from "vuex";

export type ApiGetters = GetterTree<ApiState, ApiRootState>;

export interface ApiGettersMock {}
