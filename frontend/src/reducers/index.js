import { combineReducers } from 'redux';
import auth from './auth';
import weather from './weather';
import unit from './unit';
import favorite from './favorite';

export default combineReducers({ auth, weather, unit, favorite });
