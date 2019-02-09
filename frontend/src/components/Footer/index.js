import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
const { Footer } = Layout;

const SFooter = styled(Footer)`
  background-color: #001529 !important;
  color: white !important;
  display: flex;
  justify-content: center;

  a {
    color: white;
    text-decoration: none;

    :hover {
      color: rgba(222, 222, 222, 0.5);
    }
  }
`;

export default () => (
  <SFooter>
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://github.com/kevinlee6"
    >
      Kevin Lee
    </a>
  </SFooter>
);
