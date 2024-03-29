import { ApiSections, ApiResource, Pagination } from "@/entity";
import { Store } from "vuex";
import { ApiActionsMock } from "./actions";
import { ApiMutationsMock } from "./mutations";
import { ApiGettersMock } from "./getters";
import { ApiStorageMock } from "./storage";
import { ApiServiceProviderMock } from "@/service";

export interface ApiRootState {
  version: number;
}

export interface ApiState extends ApiRootState {
  sections: ApiSections;
  resources: ApiResource[];
  resource: ApiResource;
  loading: boolean;
  pagination: Pagination;
}

export type ApiStore = Store<ApiState>;

export interface ApiStoreMock extends ApiStore {
  $storage: ApiStorageMock;
  $services: ApiServiceProviderMock;
  state: ApiState;
  actions: ApiActionsMock;
  mutations: ApiMutationsMock;
  getters: ApiGettersMock;
}
