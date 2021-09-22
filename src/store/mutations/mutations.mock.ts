import { ApiMutationsMock } from "./mutations.types";

export const mockMutations = (): ApiMutationsMock => ({
  fetchSections: jest.fn(),
  fetchResources: jest.fn(),
  fetchResource: jest.fn(),
  setLoading: jest.fn(),
});
