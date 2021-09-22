import { ApiSections, ApiResource } from "@/entity";
import { ApiState } from "../store.types";
import { ApiGetters } from "./getters.types";

export const getters: ApiGetters = {
  getSections(state: ApiState): ApiSections {
    return { ...state.sections };
  },
  getResources(state: ApiState): ApiResource[] {
    return [...state.resources];
  },
  getResource(state: ApiState): ApiResource {
    return { ...state.resource };
  },
  getLoading(state: ApiState): boolean {
    return state.loading;
  },
};
