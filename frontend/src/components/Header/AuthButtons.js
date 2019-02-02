import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Authenticated = () => <Button>Sign out</Button>;

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

const AuthButtons = ({ authenticated }) =>
  authenticated ? <Authenticated /> : <NotAuthenticated />;

const mapStateToProps = state => {
  const authenticated = state.auth.authenticated;
  return { authenticated };
};

export default connect(mapStateToProps)(AuthButtons);
