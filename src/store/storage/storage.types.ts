import { ApiSections, ApiResource } from "@/entity";
import {
  FetchResouceActionPayload,
  FetchResoucesActionPayload,
} from "../actions";

export interface ApiStorage {
  getters: {
    getSections(): ApiSections;
    getResources(): ApiResource[];
    getResource(): ApiResource;
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
  };
}

export interface ApiStorageMock extends ApiStorage {
  getters: {
    getSections: jest.Mock<ApiSections>;
    getResources: jest.Mock<ApiResource[]>;
    getResource: jest.Mock<ApiResource>;
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
  };
}
