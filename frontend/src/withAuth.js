import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default Component => {
  const Protected = props =>
    props.authenticated ? <Redirect to="/" /> : <Component {...props} />;
  return connect(mapStateToProps)(Protected);
};

const mapStateToProps = state => {
  const { auth } = state;
  const { authenticated } = auth;
  return { authenticated };
};
