import { ApiPagedResource, ApiSections, Resource } from "@/entity";
import { ApiResourceService } from "./resource.types";

export class ApiClient implements ApiResourceService {
  async sections(): Promise<ApiSections> {
    return this.get();
  }
  async resources(type: string): Promise<ApiPagedResource<Resource>> {
    return this.get(type);
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
        return data;
      });
  }

  private addId(el: { url: string; id: number }): void {
    el.id = Number(el.url.split("/").reverse()[1]);
  }
}
