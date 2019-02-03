import { SET_UNIT } from '../actions/types';
import { METRIC } from 'constant';

const initialState = METRIC;

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
