import React from 'react';
import { PrefixIcon } from './Styled';
import { ErrorDiv } from 'components/Styled';
import { Form, Input } from 'antd';
import { Field, ErrorMessage } from 'formik';

export default () => (
  <Form.Item>
    <Field
      name="password_confirmation"
      render={({ field }) => (
        <Input.Password
          {...field}
          prefix={<PrefixIcon type="lock" />}
          placeholder="Password confirmation"
        />
      )}
    />
    <ErrorMessage component={ErrorDiv} name="password_confirmation" />
  </Form.Item>
);
