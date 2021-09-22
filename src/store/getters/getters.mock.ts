import { ApiGettersMock } from "./getters.types";

export const mockGetters = (): ApiGettersMock => ({
  getSections: jest.fn(),
  getResources: jest.fn(),
  getResource: jest.fn(),
  getLoading: jest.fn(),
});
