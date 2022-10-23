
export type Mode = {
  name: string;
  id: number;
}

export type Client = {
  Name: string;
  Key: string;
}

export type TablesRequest = {
  datasourceId?: number;
  database?: string;
}

export type DBRequest = {
  datasourceId?: number;
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

export interface ListTasksRequest {
  pageNumber: number;
  name?: string;
}

export interface StartTaskRequest {
  taskId: number;
}

export interface TaskLists {
  code: number,
  message: string,
  data: TaskData,
}

export interface TaskData {
  pageNumber:number,
  total:number,
  items: TaskItem[],
}

export interface TaskItem {
  id: number;
  name: string,
  client: string,
  status: number,
  createTime: string,
  finishTime: string,
}

export interface Responses<T> {
  code: number,
  message: string,
  data: T,
}
