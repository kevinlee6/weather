import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const Protected = ({ authenticated, render, ...rest }) => (
  <Route
    {...rest}
    render={authenticated ? () => <Redirect to="/" /> : render}
  />
);

const mapStateToProps = state => {
  const { auth } = state;
  const { authenticated } = auth;
  return { authenticated };
};

export default connect(mapStateToProps)(Protected);
