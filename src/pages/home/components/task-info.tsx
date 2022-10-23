import { Button } from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';
import { TaskItem } from "@/types/api/common";
import { useState } from "react";
import CustomizedDialogs from "./task-info-dialog";

interface TaskInfoProps {
  row: TaskItem;
}

export default function TaskInfo(props: TaskInfoProps) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        sx={{marginLeft: "8px"}}
        variant={"contained"}
        startIcon={<ArticleIcon />}
        onClick={handleClickOpen}
        color={"primary"}
      >
        详情
      </Button>
      <CustomizedDialogs
        open={open}
        handleClose={handleClose}
        row={row}
      />
    </>
  );
}
