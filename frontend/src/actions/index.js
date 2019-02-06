import axios from 'axios';
import {
  AUTH_USER,
  SET_BACKGROUND,
  FETCH_WEATHER,
  SET_UNIT,
  UPDATE_WEATHER,
  TOGGLE_FAVORITE,
} from './types';
import { APPJSON } from 'constant';
import { setUrl } from 'helpers';

const options = {
  headers: { Accept: APPJSON, 'Content-Type': APPJSON },
  withCredentials: true,
};

// auth reducer
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
  type: AUTH_USER,
  callAPI: () => axios.delete('/auth', options),
});

// weather reducer
export const fetchWeather = payload => ({
  type: FETCH_WEATHER,
  callAPI: () => axios.get(setUrl(payload)),
});

export const setUnit = unit => ({
  type: SET_UNIT,
  payload: { unit },
});

export const setBackground = payload => ({
  type: SET_BACKGROUND,
  payload,
});

export const updateWeather = unit => ({
  type: UPDATE_WEATHER,
  payload: { unit },
});

export const toggleFavorite = payload => ({
  type: TOGGLE_FAVORITE,
  callAPI: () => axios.post('/user_locations', payload, options),
});
