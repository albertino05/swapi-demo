import { ApiResource } from "./resource.types";

export class Resource implements ApiResource {
  readonly id?: number;
  readonly url?: string;

  constructor(data: ApiResource) {
    this.id = data.id;
    this.url = data.url;
  }
}
