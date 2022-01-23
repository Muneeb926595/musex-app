import {combineReducers} from 'redux';

import auth from '../auth/AuthReducers';
import search from '../search/SearchReducers';

const Musex = combineReducers({
  auth,
  search,
});

export default Musex;
