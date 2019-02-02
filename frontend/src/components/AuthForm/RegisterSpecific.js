import React from 'react';
import { PrefixIcon, ErrorSpan } from './Styled';
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
    <ErrorSpan>
      <ErrorMessage name="password_confirmation" />
    </ErrorSpan>
  </Form.Item>
);
