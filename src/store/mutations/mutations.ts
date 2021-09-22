import { ApiMutations } from "./mutations.types";
import { ApiSections, ApiResource } from "@/entity";
import { ApiState } from "../store.types";

export const mutations: ApiMutations = {
  fetchSections(state: ApiState, payload: ApiSections): void {
    state.sections = payload;
  },
  fetchResources(state: ApiState, payload: ApiResource[]): void {
    state.resources = payload;
  },
  fetchResource(state: ApiState, payload: ApiResource): void {
    state.resource = payload;
  },
};
