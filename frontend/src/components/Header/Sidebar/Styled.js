import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List } from 'antd';
import { hideSidebar } from 'actions';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  width: 80%;
  font-size: 1.6em;
`;

export const ListItem = connect(
  null,
  { hideSidebar }
)(({ children, link = '/', handleClick, hideSidebar }) => (
  <List.Item>
    <StyledLink
      to={link}
      onClick={() => hideSidebar() && handleClick && handleClick()}
    >
      {children}
    </StyledLink>
  </List.Item>
));
