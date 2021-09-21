import { makeStorage } from "./storage";
import { mockStore } from "../store.mock";
import {
  FetchResouceActionPayload,
  FetchResoucesActionPayload,
} from "../actions";
import { ApiSections, Resource } from "@/entity";

describe(">>> Storage", () => {
  const store = mockStore();
  const storage = makeStorage(store);

  describe(">> Getters", () => {
    it("should proxy getSections", () => {
      expect(storage.getters.getSections()).toBe(store.getters.getSections);
    });

    it("should proxy getResources", () => {
      expect(storage.getters.getResources()).toBe(store.getters.getResources);
    });

    it("should proxy getResource", () => {
      expect(storage.getters.getResource()).toBe(store.getters.getResource);
    });
  });

  describe(">> Actions", () => {
    it("should proxy fetchSections", () => {
      storage.actions.fetchSections();
      expect(store.dispatch).toBeCalledWith("fetchSections");
    });
    it("should proxy fetchResources", () => {
      const payload: FetchResoucesActionPayload = { type: "people" };
      storage.actions.fetchResources(payload);
      expect(store.dispatch).toBeCalledWith("fetchResources", payload);
    });
    it("should proxy fetchResource", () => {
      const payload: FetchResouceActionPayload = { type: "people", id: 1 };
      storage.actions.fetchResource(payload);
      expect(store.dispatch).toBeCalledWith("fetchResource", payload);
    });
  });

  describe(">> Mutations", () => {
    it("should proxy fetchSections", () => {
      const payload: ApiSections = { name: "value" };
      storage.mutations.fetchSections(payload);
      expect(store.commit).toBeCalledWith("fetchSections", payload);
    });
    it("should proxy fetchResources", () => {
      const payload: Resource[] = [{}, {}];
      storage.mutations.fetchResources(payload);
      expect(store.commit).toBeCalledWith("fetchResources", payload);
    });
    it("should proxy fetchResource", () => {
      const payload: Resource = {};
      storage.mutations.fetchResource(payload);
      expect(store.commit).toBeCalledWith("fetchResource", payload);
    });
  });
});
