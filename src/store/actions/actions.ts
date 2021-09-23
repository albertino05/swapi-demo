import { ApiSections, ApiPagedResource, ApiResource } from "@/entity";
import {
  ApiActions,
  Context,
  FetchResouceActionPayload,
  FetchResoucesActionPayload,
} from "./actions.types";

export const actions: ApiActions = {
  fetchSections(): void {
    this.$storage.mutations.setLoading(true);

    this.$services.resource.sections().then((data: ApiSections) => {
      this.$storage.mutations.fetchSections(data);

      this.$storage.mutations.setLoading(false);
    });
  },
  fetchResources(context: Context, payload: FetchResoucesActionPayload): void {
    this.$storage.mutations.setLoading(true);

    this.$services.resource
      .resources(payload.type, payload.page, payload.search)
      .then((data: ApiPagedResource<ApiResource>) => {
        const { count, previous, next, ...rest } = data;

        this.$storage.mutations.setPagination({ count, previous, next });

        return rest.results;
      })
      .then((data: ApiResource[]) => {
        this.$storage.mutations.fetchResources(data);

        this.$storage.mutations.setLoading(false);
      });
  },
  fetchResource(context: Context, payload: FetchResouceActionPayload): void {
    this.$storage.mutations.setLoading(true);

    this.$services.resource
      .resource(payload.type, payload.id)
      .then((data: ApiResource) => {
        this.$storage.mutations.fetchResource(data);

        this.$storage.mutations.setLoading(false);
      });
  },
};
