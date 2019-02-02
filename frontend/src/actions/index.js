import axios from 'axios';
import { AUTH_USER } from './types';
import { APPJSON } from 'constant';

const options = {
  headers: { Accept: APPJSON, 'Content-Type': APPJSON },
  withCredentials: true,
};

export const register = payload => ({
  type: AUTH_USER,
  callAPI: () => axios.post('/users', payload, options),
});

export const verify = () => ({
  type: AUTH_USER,
  callAPI: () => axios.post('/auth/verify', {}, options),
});
