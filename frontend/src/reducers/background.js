import { SET_BACKGROUND } from 'actions/types';
import { WEATHER } from 'constant';
const initialState = { weather: '' };

const { SUNNY, RAIN, CLOUDS, THUNDERSTORM, MIST } = WEATHER;

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case SET_BACKGROUND: {
      const { weather } = payload;
      return {
        ...state,
        weather,
      };
    }
    default: {
      return state;
    }
  }
};
