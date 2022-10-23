import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { TaskItem } from '@/types/api/common';
import { useEffect, useState } from 'react';
import { taskProgress } from '@/api/apiRequest';
import { Box } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

interface CustomizedDialogsProps {
  open: boolean;
  handleClose: () => void;
  row: TaskItem;
}

export default function CustomizedDialogs(props: CustomizedDialogsProps) {
  const { open, handleClose, row } = props;
  const [data, setData] = useState<string>();

  useEffect(() => {
    taskProgress({taskId: row.id}).then((response) => {
      if (response.data.code === 0) {
        setData(response.data.data);
      }
    });
  }, [row.id]);

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {row.name}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box sx={{minWidth: "500px"}}/>

          <Typography gutterBottom >
            {data}
          </Typography>
          <Box sx={{minHeight: "200px"}}/>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
