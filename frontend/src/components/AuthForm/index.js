import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { message } from 'antd';
import styled from 'styled-components';
import EmailAndPasswordFields from './EmailAndPasswordFields';
import SignInSpecific from './SignInSpecific';
import RegisterSpecific from './RegisterSpecific';
import Buttons from './Buttons';
import { register } from 'actions';
import { REGISTER, SIGN_IN } from 'constant';

const SForm = styled(Form)`
  width: 70%;
  margin: auto;
`;

class AuthForm extends Component {
  handleSubmit = async (values, actions) => {
    const { command } = this.props;
    console.log(values, actions);
    switch (command) {
      case REGISTER: {
        const res = await register(values);
        console.log(res);
        // const { token, error } = {} && res && res.data;
        console.log();
        return;
      }
      case SIGN_IN: {
        // todo
        return;
      }
      default: {
        return message.warning('Unknown command.');
      }
    }
  };

  renderSpecific = (command, field) =>
    command === SIGN_IN ? (
      <SignInSpecific field={field} />
    ) : (
      <RegisterSpecific field={field} />
    );

  genInitialValues = command => {
    const initialValues = { email: '', password: '' };
    return command === SIGN_IN
      ? initialValues
      : { ...initialValues, confirm: '' };
  };

  render() {
    const { command } = this.props;
    return (
      <Formik
        initialValues={this.genInitialValues(command)}
        onSubmit={(values, actions) => {
          this.handleSubmit(values, actions);
        }}
        render={({ errors, status, touched, isSubmitting, field }) => (
          <SForm>
            <EmailAndPasswordFields field={field} />
            {this.renderSpecific(command, field)}
            <Buttons command={command} />
          </SForm>
        )}
      />
    );
  }
}

export default connect(
  null,
  { register }
)(AuthForm);
