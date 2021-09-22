import { ApiResourceService, ApiResourceServiceMock } from "./resource";

export interface ApiServiceProvider {
  resource: ApiResourceService;
}

export interface ApiServiceProviderMock {
  resource: ApiResourceServiceMock;
}
