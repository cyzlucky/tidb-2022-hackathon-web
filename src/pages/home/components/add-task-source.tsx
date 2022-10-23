import TextInput from "@/components/common/TextInput";
import { CreateTaskInputParams, CreateTaskParams, ErrorField } from "@/types/Common";
import { Box, Grid, TextField } from "@mui/material";
import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { InputParams } from "./Add-Task";
import AddTaskSourceDatasource from "./add-task-source-datasource";
import AddTaskSourceSelectClient from "./add-task-source-select-client";
import AddTaskSourceSelectDB from "./add-task-source-select-db";
import AddTaskSourceSelectMode from "./add-task-source-select-mode";
import AddTaskSourceSelectTable from "./add-task-source-select-table";

export interface AddTaskSourceProps {
  data: CreateTaskParams;
  setData: React.Dispatch<React.SetStateAction<CreateTaskParams>>;
  error: ErrorField<CreateTaskInputParams>;
  register: UseFormRegister<InputParams>;
  errors: FieldError | undefined;
}

export default function AddTaskSource(props: AddTaskSourceProps) {
  const {error, errors, register, ...otherProps} = props;
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
        <AddTaskSourceSelectClient {...otherProps}/>
        <Box sx={{ height: 32 }} />
        <AddTaskSourceDatasource {...otherProps}/>
        <Box sx={{ height: 32 }} />
        <AddTaskSourceSelectDB {...otherProps}/>
        <Box sx={{ height: 32 }} />
        <AddTaskSourceSelectTable {...otherProps}/>
        <Box sx={{ height: 32 }} />
        <TextInput
          title="查询语句"
          label="selectSql"
          register={register}
          error={error}
          errors={errors}
          placeholder=""
          options={{
            required: "查询语句是必须的",
          }}
        />
        <Box sx={{ height: 32 }} />
        <AddTaskSourceSelectMode {...otherProps}/>
      </Grid>
    </>
  );
}
