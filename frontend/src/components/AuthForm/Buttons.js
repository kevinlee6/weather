import React from 'react';
import { Link } from 'react-router-dom';
import { SIGN_IN } from 'constant';
import { urlFriendly } from 'helpers';
import { Form, Button } from 'antd';
import styled from 'styled-components';

const WideButton = styled(Button)`
  width: 100%;
`;

const FormItem = styled(Form.Item)`
  text-align: center;
`;

export default ({ command, isSubmitting }) => {
  const [first, second] =
    command === SIGN_IN ? ['Sign In', 'Register'] : ['Register', 'Sign In'];
  return (
    <FormItem>
      <WideButton disabled={isSubmitting} htmlType="submit" type="primary">
        {first}
      </WideButton>
      <p>
        or <Link to={`/${urlFriendly(second)}`}>{second}</Link>
      </p>
    </FormItem>
  );
};
