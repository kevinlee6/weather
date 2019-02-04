import { combineReducers } from 'redux';
import auth from './auth';
import unit from './unit';
import weather from './weather';

export default combineReducers({ auth, weather, unit });
