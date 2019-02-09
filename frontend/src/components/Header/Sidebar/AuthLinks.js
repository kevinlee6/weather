import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { signOut } from 'actions';
import { ListItem } from './Styled';

const AuthLinks = ({ authenticated, signOut }) => (
  <div>
    {authenticated ? (
      <ListItem handleClick={signOut}>Sign out</ListItem>
    ) : (
      <Fragment>
        <ListItem link="/signin">Sign in</ListItem>
        <ListItem link="/register">Register</ListItem>
      </Fragment>
    )}
  </div>
);

const mapStateToProps = state => {
  const { authenticated } = state.auth;
  return { authenticated };
};

export default connect(
  mapStateToProps,
  { signOut }
)(AuthLinks);
