import React from 'react';
import { Provider } from 'react-redux';
import createStore from './createStore';

export default ({ children, initialState }) => (
  <Provider store={createStore(initialState)}>{children}</Provider>
);
