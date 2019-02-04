import { combineReducers } from 'redux';
import auth from './auth';
import background from './background';
import unit from './unit';
import weather from './weather';

export default combineReducers({ auth, background, weather, unit });
