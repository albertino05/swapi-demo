import { provider } from "./provider";
import { ApiClient } from "./resource";

jest.mock("./resource");
describe(">>> Service Provider", () => {
  it("should instantiate Resource Service", () => {
    provider();
    expect(ApiClient.prototype.constructor).toBeCalled();
  });
});
