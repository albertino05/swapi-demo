import { Resource } from "./resource";
import { ApiSections, ApiResource } from "./resource.types";

export const mockResourcesData = (): ApiResource[] => [
  {
    id: 1,
    url: "https://swapi.dev/api/people/1/",
  },
  {
    id: 2,
    url: "https://swapi.dev/api/people/2/",
  },
];

export const mockResources = (
  data: Resource[] = mockResourcesData()
): Resource[] => data.map((item) => new Resource(item));

export const mockSections = (): ApiSections => ({ people: "url" });
export const mockResource = (): Resource => ({ url: "foo" });
