import { ApiSections, ApiResource, Pagination } from "@/entity";
import {
  FetchResouceActionPayload,
  FetchResoucesActionPayload,
} from "../actions";

export interface ApiStorage {
  getters: {
    getSections(): ApiSections;
    getResources(): ApiResource[];
    getResource(): ApiResource;
    getLoading(): boolean;
  };

  actions: {
    fetchSections(): void;
    fetchResources(payload: FetchResoucesActionPayload): void;
    fetchResource(payload: FetchResouceActionPayload): void;
  };

  mutations: {
    fetchSections(payload: ApiSections): void;
    fetchResources(payload: ApiResource[]): void;
    fetchResource(payload: ApiResource): void;
    setLoading(loading: boolean): void;
    setPagination(payload: Pagination): void;
  };
}

export interface ApiStorageMock extends ApiStorage {
  getters: {
    getSections: jest.Mock<ApiSections>;
    getResources: jest.Mock<ApiResource[]>;
    getResource: jest.Mock<ApiResource>;
    getLoading: jest.Mock<boolean>;
  };

  actions: {
    fetchSections: jest.Mock<void>;
    fetchResources: jest.Mock<void>;
    fetchResource: jest.Mock<void>;
  };

  mutations: {
    fetchSections: jest.Mock<void>;
    fetchResources: jest.Mock<void>;
    fetchResource: jest.Mock<void>;
    setLoading: jest.Mock<void>;
    setPagination: jest.Mock<void>;
  };
}
