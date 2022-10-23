import { getListDataSource } from "@/api/apiRequest";
import LimitTags from "@/components/common/Select";
import useRequest from "@/hooks/useRequest";
import { DataSource } from "@/types/api/common";
import { CreateTaskParams } from "@/types/Common";
import { renderInput } from "./add-task-source-select-table";

interface AddTaskSourceDatasourceProps {
  data: CreateTaskParams;
  setData: React.Dispatch<React.SetStateAction<CreateTaskParams>>;
}

function AddTaskSourceDatasource(props: AddTaskSourceDatasourceProps) {
  const { setData, data } = props;
  const [
    open,
    setOpen,
    options,
    setOptions,
    loading
  ] = useRequest<DataSource>(getListDataSource);

  return (
    <LimitTags
      open={open}
      setOpen={setOpen}
      label="select-source-datasource"
      loading={loading}
      options={options}
      labelKey={"name"}
      value={data.source?.datasourceName}
      handleChange={(event, value: DataSource, reason) => {
        value && setData((data) => {
          return {
            ...data,
            source: {
              ...data.source,
              datasource: value['id'],
              datasourceName: value['name'],
            }
          }
        });
      }}
      renderInput={(params) =>
        renderInput(params, loading, "选择数据源", "Datasource")
      }
    />
  );
}

export default AddTaskSourceDatasource;
