import { CreateTaskParams } from "@/types/Common";
import { Box, Grid } from "@mui/material";
import AddTaskTargetExportMode from "./add-task-target-export-mode";
import AddTaskTargetSelectDB from "./add-task-target-select-db";
import AddTaskTargetDatasource from "./add-task-target-select-source";

interface AddTaskTargetProps {
  data: CreateTaskParams;
  setData: React.Dispatch<React.SetStateAction<CreateTaskParams>>;
}

export default function AddTaskTarget(props: AddTaskTargetProps) {
  const { data, setData } = props;

  return (
    <Grid
      sx={{ marginLeft: 4 }}
    >
      <Grid
        sx={{ fontWeight: 600, paddingBottom: "24px" }}
      >
        目标集群
      </Grid>
      <AddTaskTargetDatasource
        {...props}
      />
      <Box sx={{ height: 32 }} />
      <AddTaskTargetSelectDB {...props}/>
      <Box sx={{ height: 32 }} />
      <AddTaskTargetExportMode  {...props}/>
    </Grid>
  );
}
