import { ApiSections, ApiResource, Pagination } from "@/entity";
import { MutationTree, Store } from "vuex";
import { ApiState } from "../store.types";

export interface ApiMutations extends MutationTree<ApiState> {
  fetchSections(
    this: Store<ApiState>,
    state: ApiState,
    payload: ApiSections
  ): void;
  fetchResources(
    this: Store<ApiState>,
    state: ApiState,
    payload: ApiResource[]
  ): void;
  fetchResource(
    this: Store<ApiState>,
    state: ApiState,
    payload: ApiResource
  ): void;
  setLoading(this: Store<ApiState>, state: ApiState, payload: boolean): void;
  setPagination(
    this: Store<ApiState>,
    state: ApiState,
    payload: Pagination
  ): void;
}

export interface ApiMutationsMock extends ApiMutations {
  fetchSections: jest.Mock<void>;
  fetchResources: jest.Mock<void>;
  fetchResource: jest.Mock<void>;
  setLoading: jest.Mock<void>;
  setPagination: jest.Mock<void>;
}
