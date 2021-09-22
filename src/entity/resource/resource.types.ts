export type Gender = "male" | "female";

export interface ApiSections {
  [section: string]: string;
}

export interface Pagination {
  count?: number;
  next?: string;
  previous?: string;
}

export interface ApiPagedResource<T> extends Pagination {
  results: T[];
}

export interface ApiResource {
  id?: number;
  edited?: string;
  created?: string;
  url?: string;
}

export interface ApiPerson extends ApiResource {
  birthYear: string;
  gender?: Gender;
  eyeColor: string;
  mass: number;
}
