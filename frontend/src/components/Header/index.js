import React, { Component } from 'react';
import { Layout } from 'antd';
import Logo from './HeaderTitle';
import AuthButtons from './AuthButtons';
import styled from 'styled-components';

const { Header } = Layout;
const SHeader = styled(Header)`
  display: flex;
  color: white;
  justify-content: space-between;
`;

export default class extends Component {
  render() {
    return (
      <SHeader>
        <Logo />
        <AuthButtons />
      </SHeader>
    );
  }
}
