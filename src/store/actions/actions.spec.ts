import { mockActionsContext } from "./actions.mock";
import { actions } from "./actions";
import { mockStore } from "../store.mock";
import { ApiSections, ApiResource, ApiPagedResource } from "@/entity";
import {
  FetchResouceActionPayload,
  FetchResoucesActionPayload,
} from "./actions.types";

describe(">>> Actions", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe(">> fetchSections", () => {
    const store = mockStore();
    const context = mockActionsContext();

    it("should set loading, fetch all sections then commit sections mutation and remove loading", async () => {
      const sections: ApiSections = {
        name: "val",
      };

      store.$services.resource.sections.mockResolvedValueOnce(sections);

      await actions.fetchSections.bind(store)(context);
      expect(store.$storage.mutations.setLoading).toBeCalledWith(true);
      await expect(store.$services.resource.sections).toBeCalled();

      expect(store.$storage.mutations.fetchSections).toBeCalledWith(sections);

      expect(store.$storage.mutations.setLoading).toBeCalledWith(false);
      expect(store.$storage.mutations.setLoading).toBeCalledTimes(2);
    });

    it("should set loading, call service to fetch resources then resources mutation and remove loading", async () => {
      const resources: ApiPagedResource<ApiResource> = {
        count: 0,
        previous: undefined,
        next: "1",
        results: [{}, {}],
      };
      store.$services.resource.resources.mockResolvedValueOnce(resources);

      const payload: FetchResoucesActionPayload = { type: "people" };
      await actions.fetchResources.bind(store)(context, payload);

      expect(store.$storage.mutations.setLoading).toBeCalledWith(true);
      await expect(store.$services.resource.resources).toBeCalledWith(
        payload.type,
        undefined
      );

      const { count, previous, next, ...rest } = resources;

      expect(store.$storage.mutations.setPagination).toBeCalledWith({
        count,
        previous,
        next,
      });

      expect(store.$storage.mutations.fetchResources).toBeCalledWith(
        rest.results
      );

      expect(store.$storage.mutations.setLoading).toBeCalledWith(false);
      expect(store.$storage.mutations.setLoading).toBeCalledTimes(2);
    });

    it("should set loading, call service to fetch resource then resource mutation and remove loading", async () => {
      const resource: ApiResource = {};
      store.$services.resource.resource.mockResolvedValueOnce(resource);

      const payload: FetchResouceActionPayload = { type: "people", id: 1 };
      await actions.fetchResource.bind(store)(context, payload);
      expect(store.$storage.mutations.setLoading).toBeCalledWith(true);

      expect(store.$services.resource.resource).toBeCalledWith(
        payload.type,
        payload.id
      );

      expect(store.$storage.mutations.fetchResource).toBeCalledWith(resource);

      expect(store.$storage.mutations.setLoading).toBeCalledWith(false);
      expect(store.$storage.mutations.setLoading).toBeCalledTimes(2);
    });
  });
});
