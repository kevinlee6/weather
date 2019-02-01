import React, { Fragment } from 'react';
import { PrefixIcon } from './Styled';
import { Field } from 'formik';
import { Form, Input } from 'antd';

export default () => (
  <Fragment>
    <Form.Item>
      <Field
        type="email"
        name="email"
        render={({ field }) => (
          <Input
            {...field}
            prefix={<PrefixIcon type="user" />}
            placeholder="Email"
          />
        )}
      />
    </Form.Item>
    <Form.Item>
      <Field
        name="password"
        render={({ field }) => (
          <Input.Password
            {...field}
            prefix={<PrefixIcon type="lock" />}
            placeholder="Password"
          />
        )}
      />
    </Form.Item>
  </Fragment>
);
