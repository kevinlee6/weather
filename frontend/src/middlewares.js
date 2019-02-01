import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { suffixAsync } from 'helpers';

const callAPIMiddleware = ({ dispatch }) => {
  return next => async action => {
    const { type, callAPI } = action;
    if (!type || !callAPI) {
      // Normal action: pass it on
      return next(action);
    }

    if (typeof type !== 'string') {
      throw new Error('Expected a string.');
    }

    if (typeof callAPI !== 'function') {
      throw new Error('Expected callAPI to be a function.');
    }

    // return type: capitalized strings
    const [REQUEST, SUCCESS, FAILURE] = suffixAsync(type);

    dispatch({
      type: REQUEST,
    });

    // Response should return object with either token or error
    const response = await callAPI();
    // In case response is somehow undefined/null, do not break
    const { token, error } = {} && response.data;
    return token
      ? dispatch({ type: SUCCESS, payload: token })
      : dispatch({ type: FAILURE, payload: error });
  };
};

const middlewares = [thunk, callAPIMiddleware];
export default applyMiddleware(...middlewares);
