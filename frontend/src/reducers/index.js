import { combineReducers } from 'redux';
import auth from './auth';
import background from './background';
import unit from './unit';

export default combineReducers({ auth, background, unit });
