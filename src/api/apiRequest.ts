import { request } from "@/api/config";
import { AxiosResponse } from "axios";
import { Client, DataSource, DB, DBRequest, Mode, Responses, Table, TablesRequest } from "@/types/api/common";

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
