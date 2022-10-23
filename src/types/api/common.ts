
export type Mode = {
  name: string;
  id: number;
}

export type Client = {
  Name: string;
  Key: string;
}

export type TablesRequest = {
  datasourceId: number;
  database: string;
}

export type DBRequest = {
  datasourceId: number;
}

export interface DB {
  name: string;
}

export interface Table {
  name: string;
}

export interface DataSource {
  name: string;
  id: number;
}

export interface Responses<T> {
  code: number,
  message: string,
  data: T,
}
