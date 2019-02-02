import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { suffixAsync, titleCase } from 'helpers';

const callAPIMiddleware = ({ dispatch }) => next => action => {
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
  return callAPI().then(
    resolve => {
      const { email } = resolve.data;
      dispatch({ type: SUCCESS, payload: { email } });
    },
    reject => {
      const { data } = reject.response;
      const keys = Object.keys(data);
      const firstKey = keys[0];
      const firstError = data[firstKey][0];
      // Show only one error, so user doesn't get overwhelmed
      const error = `${titleCase(firstKey)} ${firstError}`;
      dispatch({ type: FAILURE, payload: { error } });
    }
  );
};

const middlewares = [thunk, callAPIMiddleware];
export default applyMiddleware(...middlewares);
