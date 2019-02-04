import React from 'react';
import { Field } from 'formik';
import { SInput } from 'components/Styled';
import { QUERY } from 'constant';

export default () => (
  <Field
    name={QUERY}
    render={({ field }) => (
      <SInput {...field} width={60} placeholder="City or Zip Code" />
    )}
  />
);
