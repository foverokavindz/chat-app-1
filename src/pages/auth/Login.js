import { Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AuthSocial from '../../sections/settings/auth/AuthSocial';
import LoginForm from '../../sections/settings/auth/LoginForm';

const Login = () => {
  return (
    <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
      <Typography variant="h6">Login to .Talk</Typography>

      <Stack direction={'row'} spacing={0.5}>
        <Typography variant="body2">New user? </Typography>
        <Link to="/auth/register" component={RouterLink} variant="subtitle2">
          Create an account
        </Link>
      </Stack>

      {/**Login form */}
      <LoginForm />
      <AuthSocial />
      {/**auth social */}
    </Stack>
  );
};

export default Login;
