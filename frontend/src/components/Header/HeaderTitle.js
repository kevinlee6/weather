import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default () => (
  <SLink to="/">
    <Div>
      <Logo />
      <Title />
    </Div>
  </SLink>
);

const Img = styled.img`
  max-width: 66px;
  padding: 0 10px;
`;

const H1 = styled.h1`
  color: white;
  margin: 0;
  white-space: nowrap;
`;

const SLink = styled(Link)`
  color: transparent;
  transition: none;
`;

const Div = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  min-width: 120px;
  max-width: 250px;
`;

const Logo = () => <Img src="/logo.png" />;
const Title = () => <H1>Weather</H1>;
