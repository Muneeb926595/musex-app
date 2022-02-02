import {combineReducers} from 'redux';

import auth from '../auth/AuthReducers';
import search from '../search/SearchReducers';
import songs from '../songs/SongsReducers';

const Musex = combineReducers({
  auth,
  search,
  songs,
});

export default Musex;
