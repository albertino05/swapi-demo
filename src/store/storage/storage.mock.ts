import { ApiStorageMock } from "./storage.types";

export const mockStorage = (): ApiStorageMock => ({
  getters: {
    getSections: jest.fn(),
    getResources: jest.fn(),
    getResource: jest.fn(),
    getLoading: jest.fn(),
  },
  actions: {
    fetchSections: jest.fn(),
    fetchResources: jest.fn(),
    fetchResource: jest.fn(),
  },
  mutations: {
    fetchSections: jest.fn(),
    fetchResources: jest.fn(),
    fetchResource: jest.fn(),
    setLoading: jest.fn(),
    setPagination: jest.fn(),
  },
});
