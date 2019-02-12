import styled from 'styled-components';
import { Input } from 'antd';

export const ErrorSpan = styled.span`
  color: red;
  padding: 4px 8px;
  background: rgba(222, 222, 222, 0.8);
  border-radius: 10px;
`;

export const ErrorDiv = styled.div`
  height: 1px;
`;

// 16px to disable auto-zoom in mobile devices when focus
export const SInput = styled(Input)`
  font-size: 16px !important;
  width: ${props => props.width}% !important;
`;
