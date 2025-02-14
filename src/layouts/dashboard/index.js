import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

import { Sidebar } from './sidebar';

const isAuthenticated = true;

const DashboardLayout = () => {
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }
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
