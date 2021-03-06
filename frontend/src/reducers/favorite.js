import { INIT_FAVORITE, TOGGLE_FAVORITE } from 'actions/types';
import { suffixAsync } from 'helpers';
import { REORDER_FAVORITE, RESET_FAVORITE } from '../actions/types';

const [
  TOGGLE_FAVORITE_REQUEST,
  TOGGLE_FAVORITE_SUCCESS,
  TOGGLE_FAVORITE_FAILURE,
] = suffixAsync(TOGGLE_FAVORITE);

const [
  REORDER_FAVORITE_REQUEST,
  REORDER_FAVORITE_SUCCESS,
  REORDER_FAVORITE_FAILURE,
] = suffixAsync(REORDER_FAVORITE);

const initialState = {
  loading: false,
  allCityIds: [],
  byCityId: {},
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case RESET_FAVORITE: {
      return initialState;
    }
    case INIT_FAVORITE: {
      // favorite is array of objects
      const { favorite } = payload;
      const allCityIds = [];
      const byCityId = {};
      // normal for loop instead of two loops (map / reduce)
      // not keeping/reusing the payload in current form, so will mutate it
      // database sorts it already, but sorting in front end just in case
      favorite.sort((a, b) => a.priority - b.priority);
      favorite.forEach(el => {
        const { city_id, city, country } = el;
        allCityIds.push(city_id);
        byCityId[city_id] = {
          city,
          country,
        };
      });
      return {
        ...state,
        allCityIds,
        byCityId,
      };
    }
    case TOGGLE_FAVORITE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case TOGGLE_FAVORITE_SUCCESS: {
      const { location, favorite } = payload;
      const { allCityIds, byCityId } = state;
      const { city_id, city, country } = location;

      const newAllCityIds = favorite
        ? [...allCityIds, city_id]
        : allCityIds.filter(id => id !== city_id);
      const newByCityId = { ...byCityId };

      favorite
        ? (newByCityId[city_id] = { city, country })
        : delete newByCityId[city_id];

      return {
        ...state,
        loading: false,
        allCityIds: newAllCityIds,
        byCityId: newByCityId,
      };
    }
    case TOGGLE_FAVORITE_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case REORDER_FAVORITE: {
      const destination = payload.destination;
      const source = payload.source;
      const allCityIds = [...state.allCityIds];
      const spliced = allCityIds.splice(source, 1);
      allCityIds.splice(destination, 0, spliced[0]);

      return {
        ...state,
        allCityIds,
      };
    }
    case REORDER_FAVORITE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case REORDER_FAVORITE_SUCCESS:
    case REORDER_FAVORITE_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return {
        ...state,
        loading: false,
      };
    }
  }
};
