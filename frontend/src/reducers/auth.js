import { AUTH_USER, SIGN_OUT } from 'actions/types';
import { suffixAsync } from 'helpers';
const [AUTH_USER_REQUEST, AUTH_USER_SUCCESS, AUTH_USER_FAILURE] = suffixAsync(
  AUTH_USER
);
const [SIGN_OUT_REQUEST, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE] = suffixAsync(
  SIGN_OUT
);

const initialState = {
  loading: false,
  authenticated: '',
  error: '',
};

export default (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case SIGN_OUT_REQUEST:
    case AUTH_USER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case SIGN_OUT_SUCCESS:
    case AUTH_USER_SUCCESS: {
      const { email } = payload;
      return {
        ...state,
        authenticated: email,
        error: '',
        loading: false,
      };
    }
    case SIGN_OUT_FAILURE:
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
