import { ApiState } from "../store.types";
import { MutationTree } from "vuex";

export type ApiMutations = MutationTree<ApiState>;

export type ApiMutationsMock = ApiMutations;
