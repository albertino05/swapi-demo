import { ApiState, ApiRootState } from "../store.types";
import { GetterTree, Store } from "vuex";
import { ApiSections, ApiResource } from "@/entity";

export interface ApiGetters extends GetterTree<ApiState, ApiRootState> {
  getSections(this: Store<ApiState>, state: ApiState): ApiSections;
  getResources(this: Store<ApiState>, state: ApiState): ApiResource[];
  getResource(this: Store<ApiState>, state: ApiState): ApiResource;
}

export interface ApiGettersMock {
  getSections: jest.Mock<ApiSections>;
  getResources: jest.Mock<ApiResource[]>;
  getResource: jest.Mock<ApiResource>;
}
