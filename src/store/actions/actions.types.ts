import { ActionContext, ActionTree, Store } from "vuex";
import { ApiState, ApiRootState } from "../store.types";

export type Context = ActionContext<ApiState, ApiRootState>;

export interface ApiActions extends ActionTree<ApiState, ApiState> {
  fetchSections(this: Store<ApiState>, context: Context): void;
  fetchResources(
    this: Store<ApiState>,
    context: Context,
    payload: FetchResoucesActionPayload
  ): void;
  fetchResource(
    this: Store<ApiState>,
    context: Context,
    payload: FetchResouceActionPayload
  ): void;
}

export interface ApiActionsMock extends ApiActions {
  fetchSections: jest.Mock<void>;
  fetchResources: jest.Mock<void>;
  fetchResource: jest.Mock<void>;
}

export interface FetchResouceActionPayload {
  readonly type: string;
  readonly id: number;
}

export interface FetchResoucesActionPayload
  extends Omit<FetchResouceActionPayload, "id"> {
  readonly page?: number;
  readonly search?: string;
}
