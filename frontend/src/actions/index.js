import axios from 'axios';
import {
  AUTH_USER,
  SIGN_OUT,
  SET_BACKGROUND,
  FETCH_WEATHER,
  SET_UNIT,
  RESET_FAVORITE,
  UPDATE_WEATHER,
  TOGGLE_FAVORITE,
  INIT_UNIT,
  INIT_FAVORITE,
  REORDER_FAVORITE,
  SHOW_SIDEBAR,
  HIDE_SIDEBAR,
} from './types';
import { APPJSON } from 'constant';
import { setUrl } from 'helpers';

const options = {
  headers: { Accept: APPJSON, 'Content-Type': APPJSON },
  withCredentials: true,
};

// auth
export const register = payload => ({
  type: AUTH_USER,
  callAPI: () => axios.post('/users', payload, options),
});

export const verify = () => ({
  type: AUTH_USER,
  callAPI: () => axios.post('/auth/verify', {}, options),
});

export const signIn = payload => ({
  type: AUTH_USER,
  callAPI: () => axios.post('/auth', payload, options),
});

export const signOut = () => ({
  type: SIGN_OUT,
  callAPI: () => axios.delete('/auth', options),
});

// favorite
export const resetFavorite = () => ({
  type: RESET_FAVORITE,
});

export const initFavorite = favorite => ({
  type: INIT_FAVORITE,
  payload: { favorite },
});

export const toggleFavorite = payload => ({
  type: TOGGLE_FAVORITE,
  callAPI: () => axios.post('/user_locations', payload, options),
});

export const reorderFavorite = payload => ({
  type: REORDER_FAVORITE,
  callAPI: () => axios.patch('/user_locations', payload, options),
  payload,
  reduxFirst: true,
});

// weather
export const fetchWeather = payload => ({
  type: FETCH_WEATHER,
  callAPI: () => axios.get(setUrl(payload)),
});

export const updateWeather = unit => ({
  type: UPDATE_WEATHER,
  payload: { unit },
});

// unit
export const initUnit = unit => ({
  type: INIT_UNIT,
  payload: { unit },
});

export const setUnit = unit => ({
  type: SET_UNIT,
  callAPI: () => axios.post('/users/toggle_unit', { unit }, options),
  payload: { unit },
  reduxFirst: true,
});

// sidebar
export const showSidebar = () => ({
  type: SHOW_SIDEBAR,
});

export const hideSidebar = () => ({
  type: HIDE_SIDEBAR,
});

export const setBackground = payload => ({
  type: SET_BACKGROUND,
  payload,
});
