import { getClient, getDB } from "@/api/apiRequest";
import LimitTags from "@/components/common/Select";
import useRequest from "@/hooks/useRequest";
import { Client, DB, DBRequest } from "@/types/api/common";
import { CreateTaskParams } from "@/types/Common";
import { renderInput } from "./add-task-source-select-table";

interface AddTaskTargetSelectDBProps {
  data: CreateTaskParams;
  setData: React.Dispatch<React.SetStateAction<CreateTaskParams>>;
}

function AddTaskTargetSelectDB(props: AddTaskTargetSelectDBProps) {
  const { setData, data } = props;
  const [
    open,
    setOpen,
    options,
    setOptions,
    loading
  ] = useRequest<DB, DBRequest>(getDB, {datasourceId: data?.target?.datasource});

  return (
    <LimitTags
      open={open}
      setOpen={setOpen}
      label="select-target-db"
      loading={loading}
      options={options}
      labelKey={"name"}
      value={data.target.database}
      handleChange={(event, value: DB, reason) => {
        value && setData((data) => {
          return {
            ...data,
            target: {
              ...data.target,
              database: value['name']
            }
          }
        });
      }}
      renderInput={(params) =>
        renderInput(params, loading, "选择DB", "DB")
      }
    />
  );
}

export default AddTaskTargetSelectDB;
