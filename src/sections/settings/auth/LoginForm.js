import React, { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '../../../components/hook-form/FormProvider';
import { Alert, Stack } from '@mui/material';
import { RHFTextField } from '../../../components/hook-form';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  // use Yup - famouse validator
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email must be a valid email'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: 'demo@talk.com',
    password: 'demo1234',
  };

  const methods = useForm({ resolver: yupResolver(LoginForm), defaultValues });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      // submit data to backend
    } catch (error) {
      console.log('error', error);
      reset();
      setError('afterSubmit', {
        ...error,
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {' '}
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
      </Stack>

      <RHFTextField name="email" label="Email address" />
    </FormProvider>
  );
};

export default LoginForm;
