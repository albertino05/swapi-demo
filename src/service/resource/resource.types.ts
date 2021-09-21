import { ApiPagedResource, ApiSections, ApiResource } from "@/entity";

export interface ApiResourceService {
  sections(): Promise<ApiSections>;
  resources(type: string): Promise<ApiPagedResource<ApiResource>>;
  resource(type: string, id: number): Promise<ApiResource>;
}

export interface ApiResourceServiceMock {
  sections: jest.Mock<Promise<ApiSections>>;
  resources: jest.Mock<Promise<ApiPagedResource<ApiResource>>>;
  resource: jest.Mock<Promise<ApiResource>>;
}
