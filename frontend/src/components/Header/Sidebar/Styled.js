import React from "react";
import { Link } from "react-router-dom";
import { List } from "antd";
import styled from "styled-components";

const StyledLink = styled(Link)`
  width: 80%;
  font-size: 1.6em;
`;

export const ListItem = ({ children, link = "/", handleClick }) => (
  <List.Item>
    <StyledLink to={link} onClick={handleClick}>
      {children}
    </StyledLink>
  </List.Item>
);
