import { SET_UNIT } from '../actions/types';
import { IMPERIAL } from 'constant';
import { suffixAsync } from 'helpers';

const [SET_UNIT_REQUEST, SET_UNIT_SUCCESS, SET_UNIT_FAILURE] = suffixAsync(
  SET_UNIT
);

const initialState = IMPERIAL;

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case SET_UNIT: {
      const { unit } = payload;
      return unit;
    }
    default: {
      return state;
    }
  }
};
