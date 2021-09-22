import { ApiServiceProvider } from "./provider.types";
import { ApiClient } from "./resource";

export const provider = (): ApiServiceProvider => ({
  resource: new ApiClient(),
});
