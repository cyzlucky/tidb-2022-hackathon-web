import { getClient } from "@/api/apiRequest";
import LimitTags from "@/components/common/Select";
import useRequest from "@/hooks/useRequest";
import { Client } from "@/types/api/common";
import { CreateTaskParams } from "@/types/Common";
import { renderInput } from "./add-task-source-select-table";

interface AddTaskSourceSelectClientProps {
  data: CreateTaskParams;
  setData: React.Dispatch<React.SetStateAction<CreateTaskParams>>;
}

function AddTaskSourceSelectClient(props: AddTaskSourceSelectClientProps) {
  const { setData, data } = props;
  const [
    open,
    setOpen,
    options,
    setOptions,
    loading
  ] = useRequest<Client>(getClient);

  return (
    <LimitTags
      open={open}
      setOpen={setOpen}
      label="select-client"
      loading={loading}
      options={options}
      labelKey={"Name"}
      value={data.source.client}
      handleChange={(event, value: Client, reason) => {
        value && setData((data) => {
          return {
            ...data,
            source: {
              ...data.source,
              client: value['Name']
            }
          }
        });
      }}
      renderInput={(params) =>
        renderInput(params, loading, "选择客户端", "Client")
      }
    />
  );
}

export default AddTaskSourceSelectClient;
