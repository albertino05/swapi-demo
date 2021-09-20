import { ApiServiceProviderMock } from "./provider.types";
import { mockResourcesService } from "./resource";

export const mockProvider = (): ApiServiceProviderMock => ({
  resource: mockResourcesService(),
});
