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
import { register, signIn, initUnit, updateWeather } from 'actions';
import { REGISTER, SIGN_IN } from 'constant';
import { SignInSchema, RegisterSchema } from './schema';

class AuthForm extends Component {
  handleSubmit = values => {
    const {
      signIn,
      register,
      initUnit,
      updateWeather,
      command,
      history,
    } = this.props;
    const currUnit = this.props.unit;
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
              const unit = resolve && resolve.unit;
              if (unit && currUnit !== unit) {
                initUnit(unit);
                updateWeather(unit);
              }
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

  renderSpecific = field =>
    this.props.command === SIGN_IN ? null : ( // <SignInSpecific field={field} />
      <RegisterSpecific field={field} />
    );

  renderTitleMessage = () =>
    this.props.command === SIGN_IN ? 'Welcome back!' : "Let's get started";

  genInitialValues = () => {
    const initialValues = { email: '', password: '' };
    return this.props.command === SIGN_IN
      ? initialValues
      : { ...initialValues, password_confirmation: '' };
  };

  render() {
    const { command } = this.props;
    const schema = command === SIGN_IN ? SignInSchema : RegisterSchema;
    return (
      <Formik
        initialValues={this.genInitialValues()}
        onSubmit={values => {
          this.handleSubmit(values);
        }}
        validationSchema={schema}
        render={({ field }) => (
          <SForm>
            <Title title={this.renderTitleMessage()} />
            <br />
            <EmailAndPasswordFields field={field} />
            <br />
            {this.renderSpecific(field)}
            <br />
            <Buttons command={command} />
          </SForm>
        )}
      />
    );
  }
}

const mapStateToProps = state => ({ unit: state.unit.unit });

export default withRouter(
  connect(
    mapStateToProps,
    { register, signIn, initUnit, updateWeather }
  )(AuthForm)
);

const SForm = styled(Form)`
  width: 40%;
  margin: auto;
  padding: 30px;
  border-radius: 30px;
  background-color: rgba(222, 222, 222, 0.8);

  @media (max-width: 992px) {
    width: 70%;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const Title = ({ title }) => <h2>{title}</h2>;
