import { getClient, getDB, getExportMode } from "@/api/apiRequest";
import LimitTags from "@/components/common/Select";
import useRequest from "@/hooks/useRequest";
import { Client, DB, DBRequest, Mode } from "@/types/api/common";
import { CreateTaskParams } from "@/types/Common";
import { renderInput } from "./add-task-source-select-table";

interface AddTaskTargetExportModeProps {
  data: CreateTaskParams;
  setData: React.Dispatch<React.SetStateAction<CreateTaskParams>>;
}

function AddTaskTargetExportMode(props: AddTaskTargetExportModeProps) {
  const { setData, data } = props;
  const [
    open,
    setOpen,
    options,
    setOptions,
    loading
  ] = useRequest<Mode>(getExportMode);

  return (
    <LimitTags
      open={open}
      setOpen={setOpen}
      label="select-target-export-mode"
      loading={loading}
      options={options}
      labelKey={"name"}
      value={data.target.importDataModeName}
      handleChange={(event, value: Mode, reason) => {
        value && setData((data) => {
          return {
            ...data,
            target: {
              ...data.target,
              importDataMode: value['id'],
              importDataModeName: value['name'],
            }
          }
        });
      }}
      renderInput={(params) =>
        renderInput(params, loading, "导入模式", "Export Mode")
      }
    />
  );
}

export default AddTaskTargetExportMode;
