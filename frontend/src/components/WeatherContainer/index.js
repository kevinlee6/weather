import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <Div>
    <WeatherForm />
    <WeatherInfo />
  </Div>
);
