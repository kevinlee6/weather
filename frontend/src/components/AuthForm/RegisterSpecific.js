import React from 'react';
import { PrefixIcon } from './Styled';
import { Form, Input } from 'antd';
import { Field } from 'formik';

export default () => (
  <Form.Item>
    <Field
      name="confirm"
      render={({ field }) => (
        <Input.Password
          {...field}
          prefix={<PrefixIcon type="lock" />}
          placeholder="Password confirmation"
        />
      )}
    />
  </Form.Item>
);
