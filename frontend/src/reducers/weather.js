import { FETCH_WEATHER, UPDATE_WEATHER, TOGGLE_FAVORITE } from 'actions/types';
import { suffixAsync, extractData, convertUnitsInState } from 'helpers';

const [
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
] = suffixAsync(FETCH_WEATHER);

const initialState = {
  loading: false,
  favorite: false,
  datetime: '',
  condition: '',
  location: {
    city: '',
    country: '',
  },
  temp: {
    min: '',
    max: '',
    cur: '',
  },
  humidity: '',
  windSpeed: '',
  city_id: '',
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case UPDATE_WEATHER: {
      const { unit } = payload;
      const newState = convertUnitsInState(state, unit);
      return newState;
    }
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
        ...data,
        loading: false,
      };
    }
    case FETCH_WEATHER_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case TOGGLE_FAVORITE: {
      const { favorite } = payload;
      return {
        ...state,
        favorite: !favorite,
      };
    }
    default: {
      return state;
    }
  }
};
