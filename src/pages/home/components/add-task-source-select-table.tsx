import { getTables } from "@/api/apiRequest";
import LimitTags from "@/components/common/Select";
import useRequest from "@/hooks/useRequest";
import { Table, TablesRequest } from "@/types/api/common";
import { CreateTaskParams } from "@/types/Common";
import { AutocompleteRenderInputParams, CircularProgress, TextField } from "@mui/material";
import { Fragment } from "react";

export const renderInput = (
  params: AutocompleteRenderInputParams,
  loading: boolean,
  label: string,
  placeholder: string
) => (
  <TextField
    {...params}
    label={label}
    placeholder={placeholder}
    InputProps={{
      ...params.InputProps,
      endAdornment: (
        <Fragment>
          {
            loading ?
              <CircularProgress color="inherit" size={20} /> : null
          }
          {params.InputProps.endAdornment}
        </Fragment>
      ),
    }}
  />
);

export interface SelectComponentProps {
  data: CreateTaskParams;
  setData: React.Dispatch<React.SetStateAction<CreateTaskParams>>;
}

export default function AddTaskSourceSelectTable(props: SelectComponentProps) {
  const { setData, data } = props;
  const [
    open,
    setOpen,
    options,
    setOptions,
    loading
  ] = useRequest<Table, TablesRequest>(
    getTables,
    {
      database: data?.source?.database ?? "",
      datasourceId: data?.source?.datasource
    }
  );

  return (
    <LimitTags
      open={open}
      setOpen={setOpen}
      label="select-table"
      loading={loading}
      options={options}
      labelKey={"name"}
      disableCloseOnSelect
      value={data.source.table}
      handleChange={(event, value: Table[], reason) => {
        value && setData((data) => {
          return {
            ...data,
            source: {
              ...data.source,
              table: value.map((obj: Table) => {
                if (typeof obj === "object") {
                  return obj['name'];
                } else {
                  return obj;
                }
              })
            }
          }
        });
      }}
      multiple
      renderInput={(params) =>
        renderInput(params, loading, "选择Table - 多选", "Table")
      }
    />
  );
}
