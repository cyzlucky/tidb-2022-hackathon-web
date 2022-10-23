import { CreateTaskParams } from "@/types/Common";
import { Box, Grid, TextField } from "@mui/material";
import React from "react";
import AddTaskSourceDatasource from "./add-task-source-datasource";
import AddTaskSourceSelectClient from "./add-task-source-select-client";
import AddTaskSourceSelectDB from "./add-task-source-select-db";
import AddTaskSourceSelectMode from "./add-task-source-select-mode";
import AddTaskSourceSelectTable from "./add-task-source-select-table";

export interface AddTaskSourceProps {
  data: CreateTaskParams;
  setData: React.Dispatch<React.SetStateAction<CreateTaskParams>>;
}

export default function AddTaskSource(props: AddTaskSourceProps) {
  return (
    <>
      <Grid
        sx={{ marginRight: 4 }}
      >
        <Grid
          sx={{ fontWeight: 600, paddingBottom: "24px" }}
        >
          源集群
        </Grid>
        <AddTaskSourceSelectClient {...props}/>
        <Box sx={{ height: 32 }} />
        <AddTaskSourceDatasource {...props}/>
        <Box sx={{ height: 32 }} />
        <AddTaskSourceSelectDB {...props}/>
        <Box sx={{ height: 32 }} />
        <AddTaskSourceSelectTable {...props}/>
        <Box sx={{ height: 32 }} />
        <TextField
          id="task-name"
          label="查询语句"
          variant="outlined"
          sx={{ minWidth: "360px" }}
        />
        <Box sx={{ height: 32 }} />
        <AddTaskSourceSelectMode {...props}/>
      </Grid>
    </>
  );
}
