import { ActionContext, ActionTree } from "vuex";
import { ApiState, ApiRootState } from "../store.types";

export type Context = ActionContext<ApiState, ApiRootState>;

export type ApiActions = ActionTree<ApiState, ApiState>;

export type ApiActionsMock = ApiActions;
