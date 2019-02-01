import React from 'react';
import { Form, Input, Icon } from 'antd';
import { titleCase } from 'helpers';

export default ({ getFieldDecorator, field, inputType, icon }) => (
  <Form.Item>
    {getFieldDecorator(
      { field },
      {
        rules: [{ required: true, message: `${titleCase(field)} required.` }],
      }
    )(
      <Input
        type={inputType}
        prefix={<Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder={titleCase(field)}
      />
    )}
  </Form.Item>
);
