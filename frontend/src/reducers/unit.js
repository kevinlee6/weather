import { SET_UNIT, INIT_UNIT } from '../actions/types';
import { IMPERIAL } from 'constant';
import { suffixAsync } from 'helpers';

const [SET_UNIT_REQUEST, SET_UNIT_SUCCESS, SET_UNIT_FAILURE] = suffixAsync(
  SET_UNIT
);

const initialState = {
  loading: false,
  unit: IMPERIAL,
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case INIT_UNIT: {
      const { unit } = payload;
      return {
        ...state,
        unit,
      };
    }
    case SET_UNIT: {
      const { unit } = payload;
      return {
        ...state,
        unit,
      };
    }
    case SET_UNIT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_UNIT_SUCCESS:
    case SET_UNIT_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
