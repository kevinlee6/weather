import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, message } from 'antd';
import { Link } from 'react-router-dom';
import { signOut } from 'actions';

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

class AuthButtons extends Component {
  handleSignOut = () => {
    const { signOut } = this.props;
    signOut()
      .then(_ => message.success('Signed out'))
      .catch(err => console.log(err));
  };

  render() {
    const { authenticated } = this.props;
    return authenticated ? (
      <Authenticated handleSignOut={this.handleSignOut} />
    ) : (
      <NotAuthenticated />
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
