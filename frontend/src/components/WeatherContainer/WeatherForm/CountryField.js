import React from 'react';
import { Field } from 'formik';
import { SInput } from 'components/Styled';
import { titleCase } from 'helpers';

const COUNTRY = 'country';

export default () => (
  <Field
    name={COUNTRY}
    render={({ field }) => (
      <SInput
        {...field}
        size="large"
        width={40}
        placeholder={titleCase(COUNTRY)}
      />
    )}
  />
);
