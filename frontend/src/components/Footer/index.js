import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
const { Footer } = Layout;

const SFooter = styled(Footer)`
  background-color: #001529 !important;
  color: white !important;
  display: flex;
  justify-content: center;
`;

export default () => <SFooter>Footer</SFooter>;
