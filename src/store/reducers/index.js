import {combineReducers} from 'redux';

import Musex from '../redux/reducer';

const createReducer = (asyncReducers) =>
  combineReducers({
    Musex,
    ...asyncReducers,
  });

export default createReducer;
