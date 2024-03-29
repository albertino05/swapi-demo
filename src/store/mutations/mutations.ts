import { ApiMutations } from "./mutations.types";
import { ApiSections, ApiResource, Pagination } from "@/entity";
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
  setLoading(state: ApiState, payload: boolean): void {
    state.loading = payload;
  },
  setPagination(state: ApiState, payload: Pagination): void {
    state.pagination = payload;
  },
};
