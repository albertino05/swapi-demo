import { ApiActionsMock } from "./actions.types";
import { ActionContext } from "vuex";
import { ApiState, ApiRootState } from "../store.types";
import { mockRootState, mockState } from "../store.mock";
import { mockGetters } from "../getters";

export const mockActionsContext = (): ActionContext<
  ApiState,
  ApiRootState
> => ({
  commit: jest.fn(),
  dispatch: jest.fn(),
  state: mockState(),
  getters: mockGetters(),
  rootState: mockRootState(),
  rootGetters: {},
});

export const mockActions = (): ApiActionsMock => ({
  fetchSections: jest.fn(),
  fetchResources: jest.fn(),
  fetchResource: jest.fn(),
});
