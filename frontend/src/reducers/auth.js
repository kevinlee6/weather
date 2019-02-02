import { AUTH_USER } from 'actions/types';
import { suffixAsync } from 'helpers';
const [AUTH_USER_REQUEST, AUTH_USER_SUCCESS, AUTH_USER_FAILURE] = suffixAsync(
  AUTH_USER
);

const initialState = {
  loading: false,
  authenticated: '',
  error: '',
};

export default (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case AUTH_USER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case AUTH_USER_SUCCESS: {
      const { email } = payload;
      return {
        ...state,
        authenticated: email,
        error: '',
        loading: false,
      };
    }
    case AUTH_USER_FAILURE: {
      const { error } = payload;
      return {
        ...state,
        authenticated: '',
        error,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
