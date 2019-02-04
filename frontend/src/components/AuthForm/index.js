import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { message } from 'antd';
import styled from 'styled-components';
import EmailAndPasswordFields from './EmailAndPasswordFields';
// import SignInSpecific from './SignInSpecific';
import RegisterSpecific from './RegisterSpecific';
import Buttons from './Buttons';
import { register, signIn } from 'actions';
import { REGISTER, SIGN_IN } from 'constant';
import { SignInSchema, RegisterSchema } from './schema';

const SForm = styled(Form)`
  width: 70%;
  margin: auto;
`;

class AuthForm extends Component {
  handleSubmit = values => {
    const { signIn, register, command, history } = this.props;
    switch (command) {
      case REGISTER: {
        return register(values).then(
          resolve => {
            const error = resolve && resolve.error;
            if (error) {
              return message.error(error);
            } else {
              history.push('/');
              message.success('Welcome!');
            }
          },
          reject => {
            return message.error(reject);
          }
        );
      }
      case SIGN_IN: {
        return signIn(values).then(
          resolve => {
            const error = resolve && resolve.error;
            if (error) {
              message.error(error);
            } else {
              history.push('/');
              message.success('Signed in');
            }
          },
          reject => {
            return message.error(reject);
          }
        );
      }
      default: {
        return;
      }
    }
  };

  renderSpecific = (command, field) =>
    command === SIGN_IN ? // <SignInSpecific field={field} />
    null : (
      <RegisterSpecific field={field} />
    );

  genInitialValues = command => {
    const initialValues = { email: '', password: '' };
    return command === SIGN_IN
      ? initialValues
      : { ...initialValues, password_confirmation: '' };
  };

  render() {
    const { command } = this.props;
    const schema = command === SIGN_IN ? SignInSchema : RegisterSchema;
    return (
      <Formik
        initialValues={this.genInitialValues(command)}
        onSubmit={values => {
          this.handleSubmit(values);
        }}
        validationSchema={schema}
        render={({ field }) => (
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

export default withRouter(
  connect(
    null,
    { register, signIn }
  )(AuthForm)
);
