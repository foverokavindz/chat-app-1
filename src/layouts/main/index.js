import { Container, Stack } from '@mui/material';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import talkLogo from '../../assets/Images/Talk-logo-transparent.png';

const isAuthenticated = true;

const MainLayout = () => {
  if (isAuthenticated) {
    return <Navigate to="/app" />;
  }

  return (
    <>
      <Container sx={{ mt: 5 }} maxWidth="sm">
        <Stack spacing={5}>
          <Stack
            sx={{ width: '100%' }}
            direction={'column'}
            alignItems={'center'}
          >
            <img
              style={{ height: 120, width: 120 }}
              src={talkLogo}
              alt="Logo"
            />
          </Stack>
        </Stack>
        {/** content area */}
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;

// main screen
