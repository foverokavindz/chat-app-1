import React from 'react';
import { FormProvider as Form } from 'react-hook-form';

const FormProvider = ({ childern, onSubmit, methods }) => {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{childern}</form>
    </Form>
  );
};

export default FormProvider;
