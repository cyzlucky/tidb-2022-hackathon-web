import { getClient, getDB } from "@/api/apiRequest";
import LimitTags from "@/components/common/Select";
import useRequest from "@/hooks/useRequest";
import { Client, DB, DBRequest } from "@/types/api/common";
import { CreateTaskParams } from "@/types/Common";
import { renderInput } from "./add-task-source-select-table";

interface AddTaskSourceSelectDBProps {
  data: CreateTaskParams;
  setData: React.Dispatch<React.SetStateAction<CreateTaskParams>>;
}

function AddTaskSourceSelectDB(props: AddTaskSourceSelectDBProps) {
  const { setData, data } = props;
  const [
    open,
    setOpen,
    options,
    setOptions,
    loading
  ] = useRequest<DB, DBRequest>(getDB, {datasourceId: data.source.datasource});

  return (
    <LimitTags
      open={open}
      setOpen={setOpen}
      label="select-db"
      loading={loading}
      options={options}
      labelKey={"name"}
      handleChange={(event, value: DB, reason) => {
        value && setData((data) => {
          return {
            ...data,
            source: {
              ...data.source,
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

export default AddTaskSourceSelectDB;
