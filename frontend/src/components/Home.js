import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import WeatherContainer from './WeatherContainer';
import { Alert } from 'antd';
import { SIGN_IN, REGISTER } from 'constant';
import styled from 'styled-components';

const SAlert = styled(Alert)`
  font-size: 1.2em !important;
  font-weight: 500 !important;
  margin-bottom: 15px !important;
`;

const Register = () => <Link to={`/${REGISTER}`}>Create an account</Link>;

const SignIn = () => <Link to={`/${SIGN_IN}`}>sign in</Link>;

const WELCOME_MESSAGE = () => (
  <span>
    Get the latest weather! {<Register />} or {<SignIn />} to have access to
    saved locations.
  </span>
);

const NotLoggedInMessage = () => (
  <SAlert message={<WELCOME_MESSAGE />} type="info" closable={true} />
);

class Home extends Component {
  renderIfAuth = () => {
    const { authenticated } = this.props;
    return authenticated ? null : <NotLoggedInMessage />;
  };

  render() {
    return (
      <div>
        {this.renderIfAuth()}
        <WeatherContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const authenticated = state.auth.authenticated;
  return { authenticated };
};

export default connect(mapStateToProps)(Home);
