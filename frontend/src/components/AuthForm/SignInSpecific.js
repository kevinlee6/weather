import React, { Component } from 'react';
import { Form, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
`;

export default () => <Form.Item>Future update</Form.Item>;

// export default class extends Component {
//   render() {
//     return (
//       <Form.Item>
//         <div>Future update</div>
//         {/* <Div>
//           {getFieldDecorator('remember', {
//             valuePropName: 'checked',
//             initialValue: false,
//           })(<Checkbox>Stay signed in</Checkbox>)}
//           <Link to="forgotpassword">Forgot your password?</Link>
//         </Div> */}
//       </Form.Item>
//     );
//   }
// }
