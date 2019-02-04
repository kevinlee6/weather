import React from 'react';
import { Field } from 'formik';
import { SInput } from 'components/Styled';
import { titleCase } from 'helpers';

const removeUnderscores = str => str.replace('_', ' ');
const format = str => titleCase(removeUnderscores(str));

export default ({ cityOrZip }) => (
  <Field
    name={cityOrZip}
    render={({ field }) => (
      <SInput {...field} width={60} placeholder={format(cityOrZip)} />
    )}
  />
);
