import { combineReducers } from 'redux';
import auth from './auth';
import weather from './weather';
import unit from './unit';
import favorite from './favorite';
import sidebar from './sidebar';

export default combineReducers({ auth, weather, unit, favorite, sidebar });
