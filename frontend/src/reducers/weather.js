import { FETCH_WEATHER } from 'actions/types';
import { suffixAsync } from 'helpers';
const [
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
] = suffixAsync(FETCH_WEATHER);

const initialState = {
  loading: false,
  city: '',
  country: '',
  temp: '',
  minTemp: '',
  maxTemp: '',
  humidity: '',
  windSpeed: '',
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case FETCH_WEATHER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_WEATHER_SUCCESS: {
      return {
        ...state,
        loading: false,
        ...payload,
      };
    }
    case FETCH_WEATHER_FAILURE: {
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
