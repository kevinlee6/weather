import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, message } from 'antd';
import { Link } from 'react-router-dom';
import { signOut } from 'actions';
import styled from 'styled-components';

const Authenticated = ({ handleSignOut }) => (
  <Button onClick={handleSignOut}>Sign out</Button>
);

const NotAuthenticated = () => (
  <Button.Group>
    <Button>
      <Link to="/signin">Sign In</Link>
    </Button>
    <Button>
      <Link to="/register">Register</Link>
    </Button>
  </Button.Group>
);

const AuthButtonContainer = styled.div`
  margin: 0 15px;
  @media (max-width: 576px) {
    display: none;
  }
`;

class AuthButtons extends Component {
  handleSignOut = () => {
    const { signOut } = this.props;
    signOut()
      .then(_ => message.success('Signed out'))
      .catch(err => console.log(err));
  };

  renderAuthenticated = () => {
    const { authenticated } = this.props;
    return authenticated ? (
      <Authenticated handleSignOut={this.handleSignOut} />
    ) : (
      <NotAuthenticated />
    );
  };

  render() {
    return (
      <AuthButtonContainer>{this.renderAuthenticated()}</AuthButtonContainer>
    );
  }
}

const mapStateToProps = state => {
  const authenticated = state.auth.authenticated;
  return { authenticated };
};

export default connect(
  mapStateToProps,
  { signOut }
)(AuthButtons);
