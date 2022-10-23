export interface RouterObj {
  path: string;
  element: JSX.Element;
  children?: RouterObj[];
}

export interface CreateTaskParams {
  name: string | null;
  source:{
    client: string | null;
    datasource: number;
    datasourceName: string | null;
    database: string | null;
    table: string[];
    selectSql: string | null;
    taskSplitMode: number;
    taskSplitModeName: string | null;
  };
  target:{
    datasource: number;
    datasourceName: string | null;
    database: string | null;
    importDataMode: number;
    importDataModeName: string | null;
  };
  concurrent: number;
  isSyncSchema: boolean;
}

export interface CreateTaskInputParams {
  name: string;
  selectSql: string;
}

export type ErrorField<T> = {
  [P in keyof T]?: boolean;
}

export interface SuspenseLoadingProps {
  children?: React.ReactNode;
}
