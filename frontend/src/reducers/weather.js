import { FETCH_WEATHER } from 'actions/types';
import { suffixAsync, extractData } from 'helpers';
const [
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
] = suffixAsync(FETCH_WEATHER);

const initialState = {
  loading: false,
  weather: '',
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
      const data = extractData(payload);
      return {
        ...state,
        loading: false,
        ...data,
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
