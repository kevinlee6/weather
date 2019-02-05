import React, { Fragment } from 'react';
import { PrefixIcon } from './Styled';
import { Form, Input, Tooltip } from 'antd';
import { Field, ErrorMessage } from 'formik';

export default () => (
  <Form.Item>
    <Field
      name="password_confirmation"
      render={({ field }) => (
        <Fragment>
          <ErrorMessage
            render={msg => (
              <Tooltip title={msg} visible={!!msg} placement="topLeft" />
            )}
            name="password_confirmation"
          />
          <Tooltip />
          <Input.Password
            {...field}
            prefix={<PrefixIcon type="lock" />}
            placeholder="Password confirmation"
          />
        </Fragment>
      )}
    />
  </Form.Item>
);
