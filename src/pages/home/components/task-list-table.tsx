import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TaskLists } from '@/types/api/common';
import { Box, Button, Grid } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import StopIcon from '@mui/icons-material/Stop';
import { startTask, stopTask } from '@/api/apiRequest';
import { useSnackbar } from 'notistack';
import TaskInfo from './task-info';

interface BasicTableProps {
  taskList: TaskLists | undefined;
}

export default function BasicTable(props: BasicTableProps) {
  const { taskList } = props;
  const { enqueueSnackbar } = useSnackbar();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>任务名称</TableCell>
            <TableCell align="right">客户端名称</TableCell>
            <TableCell align="center">任务状态</TableCell>
            <TableCell align="right">创建时间</TableCell>
            <TableCell align="right">完成时间</TableCell>
            <TableCell align="right">操作</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {taskList?.data?.items?.map((row) => (
            <TableRow
              key={row.createTime}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row?.name}
              </TableCell>
              <TableCell align="right">{row?.client}</TableCell>
              <TableCell align="center">
                <Grid
                  sx={{
                    backgroundColor: row?.status === 0 ? "#959595" : row?.status === 1 ? "#0088cc" : row?.status === 3 ? "red" : "#00ffa0",
                    color: "white",
                    borderRadius: "6px",
                    padding: "2px",
                  }}
                >
                  {row?.status === 0 ? "待启动" : row?.status === 1 ? "运行中" : row?.status === 3 ? "运行失败" : "已完成" }
                </Grid>
              </TableCell>
              <TableCell align="right">{row?.createTime}</TableCell>
              <TableCell align="right">{row?.finishTime}</TableCell>
              <TableCell align="right">
                <Button
                  variant={ "outlined"}
                  startIcon={row?.status === 1 ? <StopIcon /> : <PlayCircleFilledWhiteIcon />}
                  onClick={() => {
                    if (row?.status === 1) {
                      stopTask({taskId: row.id = 1}).then((response) => {
                        if (response.data.code === 0) {
                          enqueueSnackbar("停止成功", {
                            variant: "success",
                          });
                        } else {
                          enqueueSnackbar("停止失败", {
                            variant: "error",
                          });
                        }
                      });
                    } else {
                      startTask({taskId: row.id}).then((response) => {
                        if (response.data.code === 0) {
                          enqueueSnackbar("启动成功", {
                            variant: "success",
                          });
                        } else {
                          enqueueSnackbar("启动失败", {
                            variant: "error",
                          });
                        }
                      });
                    }
                  }}
                >
                  {row?.status === 1 ? "停止" : "开启" }
                </Button>
                <TaskInfo row={row}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
