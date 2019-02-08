import React, { Component } from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import Logo from './HeaderTitle';
import UnitButtons from './UnitButtons';
import AuthButtons from './AuthButtons';
import styled from 'styled-components';

const { Header } = Layout;
export default class extends Component {
  render() {
    return (
      <HeaderContainer>
        <InnerHeader>
          <DivLeft>
            <Sidebar />
            <Logo />
          </DivLeft>
          <DivRight>
            <UnitButtons />
            <AuthButtons />
          </DivRight>
        </InnerHeader>
      </HeaderContainer>
    );
  }
}

const HeaderContainer = styled(Header)`
  color: white;
  padding: 0 !important;
  position: fixed;
  z-index: 1;
`;

const InnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Div = styled.div`
  width: 50vw;
  display: flex;
  align-items: center;
`;

const DivLeft = styled(Div)`
  justify-content: flex-start;
`;

const DivRight = styled(Div)`
  justify-content: flex-end;
`;
