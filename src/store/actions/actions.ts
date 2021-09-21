import { ApiSections, ApiPagedResource, ApiResource } from "@/entity";
import {
  ApiActions,
  Context,
  FetchResouceActionPayload,
  FetchResoucesActionPayload,
} from "./actions.types";

export const actions: ApiActions = {
  fetchSections(): void {
    this.$services.resource.sections().then((data: ApiSections) => {
      this.$storage.mutations.fetchSections(data);
    });
  },
  fetchResources(context: Context, payload: FetchResoucesActionPayload): void {
    this.$services.resource
      .resources(payload.type)
      .then((data: ApiPagedResource<ApiResource>) => {
        // @todo pagination"

        return data.results;
      })
      .then((data: ApiResource[]) => {
        this.$storage.mutations.fetchResources(data);
      });
  },
  fetchResource(context: Context, payload: FetchResouceActionPayload): void {
    this.$services.resource
      .resource(payload.type, payload.id)
      .then((data: ApiResource) => {
        this.$storage.mutations.fetchResource(data);
      });
  },
};
