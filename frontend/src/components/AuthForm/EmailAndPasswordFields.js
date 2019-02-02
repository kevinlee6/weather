import React, { Fragment } from 'react';
import { PrefixIcon, ErrorSpan } from './Styled';
import { Field, ErrorMessage } from 'formik';
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
      <ErrorSpan>
        <ErrorMessage name="email" />
      </ErrorSpan>
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
      <ErrorSpan>
        <ErrorMessage name="password" />
      </ErrorSpan>
    </Form.Item>
  </Fragment>
);
