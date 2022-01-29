import {SearchActionTypes} from './../redux/actionTypes';
import {SearchState} from '../redux/state';

const INITIAL_STATE: SearchState = {
  searchResults: {},
  loading: false,
};
interface Action {
  payload: any;
  type: string;
}
const AuthReducer = (
  state: SearchState = INITIAL_STATE,
  action: Action,
): SearchState => {
  switch (action.type) {
    case SearchActionTypes.SEARCH_SONGS_START: {
      return {...state, loading: true};
    }
    case SearchActionTypes.SEARCH_SONGS_SUCCESS: {
      state.searchResults = [];
      return {
        ...state,
        searchResults: action.payload.searchResults,
        loading: false,
      };
    }
    case SearchActionTypes.SEARCH_SONGS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default AuthReducer;
