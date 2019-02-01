import axios from 'axios';
import { AUTH_USER } from './types';

export const register = payload => ({
  type: AUTH_USER,
  callAPI: () => axios.post('/register', payload),
});
