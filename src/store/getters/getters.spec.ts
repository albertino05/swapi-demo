import { getters } from "./getters";
import { mockState, mockStore } from "../store.mock";

describe(">>> Getters", () => {
  const state = mockState();
  const store = mockStore();

  describe(">> getSections", () => {
    it("should return all sections from the store", () => {
      expect(getters.getSections.bind(store)(state)).toStrictEqual(
        state.sections
      );
    });
  });

  describe(">> getResources", () => {
    it("should return all resources from the store", () => {
      expect(getters.getResources.bind(store)(state)).toStrictEqual(
        state.resources
      );
    });
  });

  describe(">> getResource", () => {
    it("should return one resource from the store", () => {
      expect(getters.getResource.bind(store)(state)).toStrictEqual(
        state.resource
      );
    });
  });
});
