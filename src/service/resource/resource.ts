import { ApiPagedResource, ApiSections, Resource } from "@/entity";
import { ApiResourceService } from "./resource.types";

export class ApiClient implements ApiResourceService {
  async sections(): Promise<ApiSections> {
    return this.get();
  }
  async resources(type: string, page = 1): Promise<ApiPagedResource<Resource>> {
    return this.get(`${type}?page=${page}`);
  }
  async resource(type: string, id: number): Promise<Resource> {
    return this.get(`${type}/${id}`);
  }

  private async get<T>(path = ""): Promise<T> {
    return fetch(`https://swapi.dev/api/${path}`)
      .then((resp: Response) => {
        if (!resp.ok) {
          throw new Error(resp.statusText);
        }
        return resp.json();
      })
      .then((data) => {
        if (Array.isArray(data.results)) {
          data.results.forEach(this.addId);
        }
        if (typeof data.url === "string") {
          this.addId(data);
        }
        if (
          typeof data.previous !== undefined &&
          typeof data.next !== undefined
        ) {
          this.fixPagination(data);
        }
        return data;
      });
  }

  private addId(el: { url: string; id: number }): void {
    el.id = Number(el.url.split("/").reverse()[1]);
  }
  private fixPagination(data: { previous?: string; next?: string }): void {
    const { previous, next } = data;

    if (previous) {
      const page = previous.substring(previous.indexOf("?") + 1);
      const params = new URLSearchParams(page);
      data.previous = params.get("page") || "";
    }

    if (next) {
      const page = next.substring(next.indexOf("?") + 1);
      const params = new URLSearchParams(page);
      data.next = params.get("page") || "";
    }
  }
}
