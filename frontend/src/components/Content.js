import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Content } = Layout;
const formatIntoCSS = str =>
  `url('/backgrounds/${str.toLowerCase()}.jpg') no-repeat`;
const formatWeather = str => (str ? formatIntoCSS(str) : '');

const SContent = styled(Content)`
  margin-top: 64px;
  padding: 3%;
  min-height: 87vh !important;
  ${({ background }) =>
    background
      ? `background: ${background} !important; 
        background-size: cover !important;`
      : null}
`;

export default ({ weather, children }) => (
  <SContent background={formatWeather(weather)}>{children}</SContent>
);
