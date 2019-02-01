import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const AuthButtons = ({ isSignedIn }) => (
  <Button.Group>
    <Button>
      <Link to="/signin">Sign In</Link>
    </Button>
    <Button>
      <Link to="/register">Register</Link>
    </Button>
  </Button.Group>
);

export default connect(null)(AuthButtons);
