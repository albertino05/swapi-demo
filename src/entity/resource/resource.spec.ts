import { Resource } from "./resource";
import { mockResourcesData } from "./resource.mock";

describe(">>> Resource", () => {
  describe(">> Generic", () => {
    it("instantiates and saves correct data", () => {
      const resource = new Resource({
        ...mockResourcesData()[0],
        id: 2,
      });
      expect(resource).toBeInstanceOf(Resource);
      expect(resource).toEqual({
        ...mockResourcesData()[0],
        id: 2,
      });
    });
  });
});
