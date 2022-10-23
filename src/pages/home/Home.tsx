import { Grid, styled, GridProps, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Button from '@mui/material/Button';
import AddTaskDialog from "./components/Add-Task";
import { useEffect, useState } from "react";
import { listTasks } from "@/api/apiRequest";
import { sleep } from "@/components/common/Select";
import { TaskLists } from "@/types/api/common";
import BasicTable from "./components/task-list-table";

const MenuGrid = styled((props: GridProps) => (
  <Grid {...props} />
))(({ theme }) => ({
  height: "64px",
  display: "flex",
  alignItems: "center",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  borderBottom: "1px solid rgb(227, 227, 227)"
}));

const LogoGrid = styled((props: GridProps) => (
  <Grid {...props} />
))(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontWeight: 600,
  fontSize: "20px"
}));

export default function Home() {
  const [open, setOpen] = useState(false);
  const [taskList, setTaskList] = useState<TaskLists>();
  const [update, setUpdate] = useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    listTasks({ pageNumber: 0 }).then((response) => {
      if (response.data.code === 0) {
        console.log(response.data);
        setTaskList(response.data);
        setTimeout(() => {setUpdate((u) => u + 1);}, 1000);
      }
    });
  }, [update]);

  return (
    <>
      <MenuGrid>
        <Box sx={{ width: "16px" }} />
        <LogoGrid>
          数据迁移
        </LogoGrid>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          variant="contained"
          color="info"
          endIcon={<AddIcon />}
          sx={{
            color: "white"
          }}
          onClick={handleClickOpen}
        >
          创建任务
        </Button>
        <Box sx={{ width: "16px" }} />
      </MenuGrid>
      <AddTaskDialog
        open={open}
        handleClose={handleClose}
      />
      <Grid>
        <BasicTable taskList={taskList}/>
      </Grid>
    </>
  );
}
