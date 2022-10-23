import { getListDataSource } from "@/api/apiRequest";
import LimitTags from "@/components/common/Select";
import useRequest from "@/hooks/useRequest";
import { DataSource } from "@/types/api/common";
import { CreateTaskParams } from "@/types/Common";
import { renderInput } from "./add-task-source-select-table";

interface AddTaskTargetDatasourceProps {
  data: CreateTaskParams;
  setData: React.Dispatch<React.SetStateAction<CreateTaskParams>>;
}

function AddTaskTargetDatasource(props: AddTaskTargetDatasourceProps) {
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
      label="select-target-datasource"
      loading={loading}
      options={options}
      labelKey={"name"}
      value={data.target?.datasourceName}
      handleChange={(event, value: DataSource, reason) => {
        value && setData((data) => {
          return {
            ...data,
            target: {
              ...data.target,
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

export default AddTaskTargetDatasource;
