import { mutations } from "./mutations";
import { mockState, mockStore } from "../store.mock";
import { ApiSections, ApiResource } from "@/entity";

describe(">>> Mutations", () => {
  describe(">> fetchSections", () => {
    it("should add all provided sections to the store", () => {
      const state = mockState();
      const payload: ApiSections = { ...state.sections, ...{ type: "name" } };
      const expected = {
        ...state,
        sections: { ...state.sections, ...payload },
      };

      mutations.fetchSections.bind(mockStore())(state, payload);

      expect(state).toEqual(expected);
    });

    it("should add all provided resources to the store", () => {
      const state = mockState();
      const payload: ApiResource[] = { ...state.resources, ...{ id: 22 } };
      const expected = {
        ...state,
        resources: { ...state.resources, ...payload },
      };

      mutations.fetchResources.bind(mockStore())(state, payload);

      expect(state).toEqual(expected);
    });

    it("should add provided resource to the store", () => {
      const state = mockState();
      const payload: ApiResource = { ...state.resource, ...{ new: "foo" } };
      const expected = {
        ...state,
        resource: { ...state.resource, ...payload },
      };

      mutations.fetchResource.bind(mockStore())(state, payload);

      expect(state).toEqual(expected);
    });
  });
});
