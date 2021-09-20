import { ApiPagedResource, ApiSections, Resource } from "@/entity";

export interface ApiResourceService {
  sections(): Promise<ApiSections>;
  resources(type: string): Promise<ApiPagedResource<Resource>>;
  resource(type: string, id: number): Promise<Resource>;
}

export interface ApiResourceServiceMock {
  sections: jest.Mock<Promise<ApiSections>>;
  resources: jest.Mock<Promise<ApiPagedResource<Resource>>>;
  resource: jest.Mock<Promise<Resource>>;
}
