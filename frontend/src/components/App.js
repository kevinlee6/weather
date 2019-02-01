import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
const { Content } = Layout;

const SContent = styled(Content)`
  padding: 3%;
  min-height: 84vh !important;
`;

export default ({ children }) => (
  <Layout>
    <Header />
    <SContent>{children}</SContent>
    <Footer>Footer</Footer>
  </Layout>
);
