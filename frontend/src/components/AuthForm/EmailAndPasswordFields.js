import React, { Fragment } from 'react';
import { PrefixIcon } from './Styled';
import { Field, ErrorMessage } from 'formik';
import { Form, Input, Tooltip } from 'antd';

export default () => (
  <Fragment>
    <Form.Item>
      <Field
        type="email"
        name="email"
        render={({ field }) => (
          <Fragment>
            <ErrorMessage
              render={msg => (
                <Tooltip title={msg} visible={!!msg} placement="topLeft" />
              )}
              name="email"
            />
            <Input
              {...field}
              size="large"
              prefix={<PrefixIcon type="user" />}
              placeholder="Email"
            />
          </Fragment>
        )}
      />
    </Form.Item>
    <br />
    <Form.Item>
      <Field
        name="password"
        render={({ field }) => (
          <Fragment>
            <ErrorMessage
              render={msg => (
                <Tooltip title={msg} visible={!!msg} placement="topLeft" />
              )}
              name="password"
            />
            <Input.Password
              {...field}
              size="large"
              prefix={<PrefixIcon type="lock" />}
              placeholder="Password"
            />
          </Fragment>
        )}
      />
    </Form.Item>
  </Fragment>
);
