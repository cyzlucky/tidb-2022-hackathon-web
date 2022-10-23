import { request } from "@/api/config";
import { AxiosResponse } from "axios";
import { Client, DataSource, DB, DBRequest, ListTasksRequest, Mode, Responses, StartTaskRequest, Table, TablesRequest, TaskLists } from "@/types/api/common";
import { CreateTaskParams } from "@/types/Common";

type ListDataSourceResponse = Promise<AxiosResponse<Responses<DataSource[]>>>;

export function getListDataSource():ListDataSourceResponse {
  return request.post(
    '/datasource',
    {},
    {
      headers: {
        "action": "ListDataSource"
      }
    }
  );
}

type TablesResponse = Promise<AxiosResponse<Responses<Table[]>, TablesRequest>>;

export function getTables(params?: TablesRequest):TablesResponse {
  return request.post(
    '/datasource',
    {...params},
    {
      headers: {
        "action": "listTables"
      }
    }
  );
}

type ClientResponse = Promise<AxiosResponse<Responses<Client[]>>>;

export function getClient():ClientResponse {
  return request.post(
    '/client',
    {},
    {
      headers: {
        "action": "ListClient"
      }
    }
  );
}

type DBResponse = Promise<AxiosResponse<Responses<DB[]>>>;

export function getDB(params?: DBRequest):DBResponse {
  return request.post(
    '/datasource',
    {...params},
    {
      headers: {
        "action": "ListDataBase"
      }
    }
  );
}

type ModeResponse = Promise<AxiosResponse<Responses<Mode[]>>>;

export function getMode():ModeResponse {
  return request.post(
    '/task',
    {},
    {
      headers: {
        "action": "listTaskMode"
      }
    }
  );
}

type ExportModeResponse = Promise<AxiosResponse<Responses<Mode[]>>>;

export function getExportMode():ExportModeResponse {
  return request.post(
    '/task',
    {},
    {
      headers: {
        "action": "listExportMode"
      }
    }
  );
}

type AddTaskResponse = Promise<AxiosResponse<Responses<null>>>;

export function createTask(params: CreateTaskParams):AddTaskResponse {
  return request.post(
    '/task',
    {...params},
    {
      headers: {
        "action": "createTask"
      }
    }
  );
}

type TaskListResponse = Promise<AxiosResponse<TaskLists>>;

export function listTasks(params: ListTasksRequest):TaskListResponse {
  return request.post(
    '/task',
    {...params},
    {
      headers: {
        "action": "listTasks"
      }
    }
  );
}

type StartTaskResponse = Promise<AxiosResponse<Responses<null>>>;

export function startTask(params: StartTaskRequest):StartTaskResponse {
  return request.post(
    '/task',
    {...params},
    {
      headers: {
        "action": "startTask"
      }
    }
  );
}

type StopTaskResponse = Promise<AxiosResponse<Responses<null>>>;

export function stopTask(params: StartTaskRequest):StopTaskResponse {
  return request.post(
    '/task',
    {...params},
    {
      headers: {
        "action": "stopTask"
      }
    }
  );
}

type TaskProgressResponse = Promise<AxiosResponse<Responses<string>>>;

export function taskProgress(params: {taskId: number}):TaskProgressResponse {
  return request.post(
    '/task',
    {...params},
    {
      headers: {
        "action": "getTaskProgress"
      }
    }
  );
}
