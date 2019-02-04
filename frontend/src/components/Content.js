import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Content } = Layout;
const formatIntoCSS = str =>
  `url('/backgrounds/${str.toLowerCase()}.jpg') no-repeat`;
const formatWeather = str => (str ? formatIntoCSS(str) : '');

const SContent = styled(Content)`
  padding: 3%;
  min-height: 84vh !important;
  ${({ background }) =>
    background
      ? `background: ${background} !important; 
        background-size: cover !important;`
      : null}
`;

const ConnectedContent = ({ weather, children }) => (
  <SContent background={formatWeather(weather)}>{children}</SContent>
);

const mapStateToProps = state => {
  const { weather } = state.weather;
  return { weather };
};

export default connect(mapStateToProps)(ConnectedContent);
