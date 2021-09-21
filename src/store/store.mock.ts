import { ApiState, ApiRootState, ApiStoreMock } from "./store.types";
import { mockActions } from "./actions";
import { mockMutations } from "./mutations";
import { mockGetters } from "./getters";
import { mockStorage } from "./storage";
import { mockProvider } from "@/service";
import { mockResource, mockResources, mockSections } from "@/entity";

export const mockRootState = (): ApiRootState => ({
  version: 0,
});

export const mockState = (): ApiState => ({
  version: 0,
  sections: mockSections(),
  resources: mockResources(),
  resource: mockResource(),
});

export const mockStore = (): ApiStoreMock => ({
  $storage: mockStorage(),
  $services: mockProvider(),
  state: mockState(),
  actions: mockActions(),
  mutations: mockMutations(),
  getters: mockGetters(),
  replaceState: jest.fn(),
  dispatch: jest.fn(),
  commit: jest.fn(),
  subscribe: jest.fn(),
  subscribeAction: jest.fn(),
  watch: jest.fn(),
  registerModule: jest.fn(),
  unregisterModule: jest.fn(),
  hotUpdate: jest.fn(),
  hasModule: jest.fn(),
});
