import styled from 'styled-components';
import { Input } from 'antd';

export const ErrorDiv = styled.div`
  color: red;
`;

export const SInput = styled(Input)`
  width: ${props => props.width}% !important;
`;
