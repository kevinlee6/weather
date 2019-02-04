import React, { Component } from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import Logo from './HeaderTitle';
import UnitButtons from './UnitButtons';
import AuthButtons from './AuthButtons';
import styled from 'styled-components';

const { Header } = Layout;
const SHeader = styled(Header)`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px !important;
`;

const Div = styled.div`
  flex-grow: 6;
  display: flex;
  align-items: center;
`;

const DivLeft = styled(Div)`
  justify-content: flex-start;
`;

const DivRight = styled(Div)`
  justify-content: flex-end;
  padding-right: 20px;
`;

export default class extends Component {
  render() {
    return (
      <SHeader>
        <DivLeft>
          <Sidebar />
          <Logo />
        </DivLeft>
        <DivRight>
          <UnitButtons />
          <AuthButtons />
        </DivRight>
      </SHeader>
    );
  }
}
