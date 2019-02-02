import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import { message } from 'antd';
import styled from 'styled-components';
import EmailAndPasswordFields from './EmailAndPasswordFields';
import SignInSpecific from './SignInSpecific';
import RegisterSpecific from './RegisterSpecific';
import Buttons from './Buttons';
import { register } from 'actions';
import { REGISTER, SIGN_IN } from 'constant';
import { RegisterSchema } from './schema';
import { titleCase } from 'helpers';

const SForm = styled(Form)`
  width: 70%;
  margin: auto;
`;

class AuthForm extends Component {
  handleSubmit = async (values, actions) => {
    try {
      const { command, register } = this.props;
      console.log(values, actions);
      switch (command) {
        case REGISTER: {
          const res = await register(values);
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
    } catch (err) {
      if (err && err.response && err.response.data) {
        const { data } = err.response;
        const keys = Object.keys(data);
        if (keys) {
          const firstKey = keys[0];
          const firstError = data[firstKey][0];
          // Show only one error, so user doesn't get overwhelmed
          message.error(`${titleCase(firstKey)} ${firstError}`);
        } else {
          message.error('Something has gone wrong. Please contact support.');
        }
      } else {
        console.log(err);
        message.error('Something has gone wrong. Please contact support.');
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
      : { ...initialValues, password_confirmation: '' };
  };

  render() {
    const { command } = this.props;
    const schema = command === SIGN_IN ? null : RegisterSchema;
    return (
      <Formik
        initialValues={this.genInitialValues(command)}
        onSubmit={(values, actions) => {
          this.handleSubmit(values, actions);
        }}
        validationSchema={schema}
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
