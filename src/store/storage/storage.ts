import { ApiStorage } from "./storage.types";
import { ApiStore } from "../store.types";
import { ApiSections, ApiResource, Pagination } from "@/entity";
import {
  FetchResouceActionPayload,
  FetchResoucesActionPayload,
} from "../actions";

export const makeStorage = (store: ApiStore): ApiStorage => ({
  getters: {
    getSections(): ApiSections {
      return store.getters.getSections;
    },
    getResources(): ApiResource[] {
      return store.getters.getResources;
    },
    getResource(): ApiResource {
      return store.getters.getResource;
    },
    getLoading(): boolean {
      return store.getters.getLoading;
    },
  },

  actions: {
    fetchSections(): void {
      store.dispatch("fetchSections");
    },
    fetchResources(payload: FetchResoucesActionPayload): void {
      store.dispatch("fetchResources", payload);
    },
    fetchResource(payload: FetchResouceActionPayload): void {
      store.dispatch("fetchResource", payload);
    },
  },

  mutations: {
    fetchSections(payload: ApiSections): void {
      store.commit("fetchSections", payload);
    },
    fetchResources(payload: ApiResource[]): void {
      store.commit("fetchResources", payload);
    },
    fetchResource(payload: ApiResource): void {
      store.commit("fetchResource", payload);
    },
    setLoading(loading: boolean): void {
      store.commit("setLoading", loading);
    },
    setPagination(payload: Pagination): void {
      store.commit("setPagination", payload);
    },
  },
});
