import { Box, Grid } from "@mui/material";
import BasicSelect from "./Select";

interface AddTaskTargetProps {

}

export default function AddTaskTarget(props: AddTaskTargetProps) {
  const { } = props;

  return (
    <Grid
      sx={{ marginLeft: 4 }}
    >
      <Grid
        sx={{ fontWeight: 600, paddingBottom: "24px" }}
      >
        目标集群
      </Grid>
      <BasicSelect
        label=''
        name='选择数据源'
      />
      <Box sx={{ height: 32 }} />
      <BasicSelect
        label=''
        name='选择DB'
      />
      <Box sx={{ height: 32 }} />
      <BasicSelect
        label=''
        name='导入模式'
      />
    </Grid>
  );
}
