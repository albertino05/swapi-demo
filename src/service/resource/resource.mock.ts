import { ApiResourceServiceMock } from "./resource.types";

export const mockResourcesService = (): ApiResourceServiceMock => ({
  sections: jest.fn(),
  resources: jest.fn(),
  resource: jest.fn(),
});
