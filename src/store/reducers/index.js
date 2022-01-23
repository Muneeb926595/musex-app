import {combineReducers} from 'redux';

import Musex from '../redux/reducer';
import animations from './animations';

const createReducer = (asyncReducers) =>
  combineReducers({
    Musex,
    animations,
    ...asyncReducers,
  });

export default createReducer;
