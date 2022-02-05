import {SongsActionTypes} from './../redux/actionTypes';
import {SongState} from '../redux/state';

const INITIAL_STATE: SongState = {
  songs: {},
  recent: {},
  playlists: {},
  loading: false,
};
interface Action {
  payload: any;
  type: string;
}
const AuthReducer = (
  state: SongState = INITIAL_STATE,
  action: Action,
): SongState => {
  switch (action.type) {
    case SongsActionTypes.GET_SONGS_START: {
      return {...state, loading: true};
    }
    case SongsActionTypes.GET_SONGS_SUCCESS: {
      state.songs = [];
      return {
        ...state,
        songs: action.payload.songs,
        loading: false,
      };
    }
    case SongsActionTypes.GET_SONGS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case SongsActionTypes.GET_RECENT_SONGS_START: {
      return {...state, loading: true};
    }
    case SongsActionTypes.GET_RECENT_SONGS_SUCCESS: {
      state.recent = [];
      return {
        ...state,
        recent: action.payload.songs,
        loading: false,
      };
    }
    case SongsActionTypes.GET_RECENT_SONGS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case SongsActionTypes.UPDATE_RECENTS_START: {
      return {...state, loading: true};
    }
    case SongsActionTypes.UPDATE_RECENTS_SUCCESS: {
      state.recent = [];
      return {
        ...state,
        recent: action.payload.songs,
        loading: false,
      };
    }
    case SongsActionTypes.UPDATE_RECENTS_FAIL: {
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
