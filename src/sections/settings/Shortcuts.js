import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  Typography,
} from '@mui/material';
import { Stack } from 'phosphor-react';
import React, { forwardRef } from 'react';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Shortcuts = ({ open, handleClose }) => {
  const list = [
    {
      key: 0,
      title: 'Mark as read',
      combination: ['Cmd', 'Shift', 'U'],
    },
    {
      key: 1,
      title: 'Mark as read',
      combination: ['Cmd', 'Shift', 'U'],
    },
    {
      key: 2,
      title: 'Mark as read',
      combination: ['Cmd', 'Shift', 'U'],
    },
    {
      key: 3,
      title: 'Mark as read',
      combination: ['Cmd', 'Shift', 'U'],
    },
    {
      key: 4,
      title: 'Mark as read',
      combination: ['Cmd', 'Shift', 'U'],
    },
    {
      key: 5,
      title: 'Mark as read',
      combination: ['Cmd', 'Shift', 'U'],
    },
  ];
  return (
    <Dialog
      fullWidth
      maxWidth={'md'}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ p: 4 }}
    >
      <DialogTitle>Keyboard Shortcuts</DialogTitle>
      <DialogContent sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {list.map(({ key, title, combination }) => (
            <Box key={key}>
              <Grid item xs={6}>
                <Stack
                  sx={{ width: '100%' }}
                  justifyContent={'space-between'}
                  spacing={3}
                  direction={'row'}
                  alignItems={'center'}
                >
                  <Typography variant="caption" sx={{ fontSize: 14 }}>
                    {title}
                  </Typography>

                  <Stack spacing={2} direction={'row'}>
                    {combination.map((el) => {
                      return (
                        <Button
                          disable
                          variant="contained"
                          sx={{ color: '#212121' }}
                        >
                          {el}
                        </Button>
                      );
                    })}
                  </Stack>
                </Stack>
              </Grid>
            </Box>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default Shortcuts;
