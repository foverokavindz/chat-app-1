import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

import { Sidebar } from './sidebar';

const DashboardLayout = () => {
  return (
    <>
      <Box>
        <Stack direction={'row'}>
          {/* sidebar */}
          <Sidebar />
          <Outlet />
        </Stack>
      </Box>
    </>
  );
};

export default DashboardLayout;
