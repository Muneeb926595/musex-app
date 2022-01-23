import {SearchActionTypes} from './../redux/actionTypes';
import {SearchState} from '../redux/state';

const INITIAL_STATE: SearchState = {
  searchResults: {},
  totalPages: 0,
  currentPage: 0,
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
    case SearchActionTypes.SEARCH_BY_PLAYLIST_START: {
      if (action.payload.pageNo === 1) {
        state.searchResults = [];
        state.totalPages = '0';
        state.currentPage = 0;
        state.loading = false;
        return {...state, loading: true};
      } else {
        return {...state, loading: false};
      }
    }
    case SearchActionTypes.SEARCH_BY_PLAYLIST_SUCCESS: {
      if (action.payload.currentPage === 1) {
        state.searchResults = [];
        return {
          ...state,
          searchResults: action.payload.searchResults,
          totalPages: action.payload.totalPages,
          currentPage: action.payload.currentPage,
          loading: false,
        };
      } else {
        return {
          ...state,
          searchResults: [
            ...state.searchResults,
            ...action.payload.searchResults,
          ],
          totalPages: action.payload.totalPages,
          currentPage: action.payload.currentPage,
          loading: false,
        };
      }
    }
    case SearchActionTypes.SEARCH_BY_PLAYLIST_FAIL: {
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
