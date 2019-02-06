import { combineReducers } from 'redux';
import auth from './auth';
import weather from './weather';
import unit from './unit';

export default combineReducers({ auth, weather, unit });
