import React from 'react';
import { shallow } from 'enzyme';
import EmailAndPasswordFields from '../EmailAndPasswordFields';
import { Form } from 'antd';

let wrapped = shallow(<EmailAndPasswordFields />);

it('has two input fields (wrapped in form item)', () => {
  expect(wrapped.find(Form.Item).length).toBe(2);
});
