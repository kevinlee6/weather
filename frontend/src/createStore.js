import { createStore } from 'redux';
import rootReducer from 'reducers';
import enhancedMiddlewares from 'middlewares';

export default (initialState = {}) =>
  createStore(rootReducer, initialState, enhancedMiddlewares);
