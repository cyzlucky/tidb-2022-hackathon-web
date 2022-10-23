import { getMode } from "@/api/apiRequest";
import LimitTags from "@/components/common/Select";
import useRequest from "@/hooks/useRequest";
import {  Mode } from "@/types/api/common";
import { CreateTaskParams } from "@/types/Common";
import { renderInput } from "./add-task-source-select-table";

interface AddTaskSourceSelectModeProps {
  setData: React.Dispatch<React.SetStateAction<CreateTaskParams>>;
}

function AddTaskSourceSelectMode(props: AddTaskSourceSelectModeProps) {
  const { setData } = props;
  const [
    open,
    setOpen,
    options,
    setOptions,
    loading
  ] = useRequest<Mode>(getMode);

  return (
    <LimitTags
      open={open}
      setOpen={setOpen}
      label="select-mode"
      loading={loading}
      options={options}
      labelKey={"name"}
      handleChange={(event, value: Mode, reason) => {
        value && setData((data) => {
          return {
            ...data,
            source: {
              ...data.source,
              taskSplitMode: value['id']
            }
          }
        });
      }}
      renderInput={(params) =>
        renderInput(params, loading, "拆分模式", "Mode")
      }
    />
  );
}

export default AddTaskSourceSelectMode;
