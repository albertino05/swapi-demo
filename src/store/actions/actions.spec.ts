import { mockActionsContext } from "./actions.mock";
import { actions } from "./actions";
import { mockStore } from "../store.mock";
import { ApiSections, ApiResource, ApiPagedResource } from "@/entity";
import {
  FetchResouceActionPayload,
  FetchResoucesActionPayload,
} from "./actions.types";

describe(">>> Actions", () => {
  describe(">> fetchSections", () => {
    const store = mockStore();
    const context = mockActionsContext();

    it("should fetch all sections and then commit sections mutation", async () => {
      const sections: ApiSections = {
        name: "val",
      };

      store.$services.resource.sections.mockResolvedValueOnce(sections);

      actions.fetchSections.bind(store)(context);
      expect(store.$services.resource.sections).toBeCalled();

      //?
      // expect(store.$storage.mutations.fetchSections).toBeCalledWith(sections);
    });

    it("should call service to fetch resources and then resources mutation", () => {
      const resources: ApiPagedResource<ApiResource> = {
        count: 0,
        previous: "xxx",
        next: undefined,
        results: [{}, {}],
      };
      store.$services.resource.resources.mockResolvedValueOnce(resources);

      const payload: FetchResoucesActionPayload = { type: "people" };
      actions.fetchResources.bind(store)(context, payload);

      expect(store.$services.resource.resources).toBeCalledWith(payload.type);

      // ?
      // expect(store.$storage.mutations.fetchResources).toBeCalledWith({
      //   resources,
      // });
    });

    it("should call service to fetch resource and then resource mutation", () => {
      const resource: ApiResource = {};
      store.$services.resource.resource.mockResolvedValueOnce(resource);

      const payload: FetchResouceActionPayload = { type: "people", id: 1 };
      actions.fetchResource.bind(store)(context, payload);

      expect(store.$services.resource.resource).toBeCalledWith(
        payload.type,
        payload.id
      );

      // ?
      // expect(store.$storage.mutations.fetchResource).toBeCalledWith({
      //   resource,
      // });
    });
  });
});
