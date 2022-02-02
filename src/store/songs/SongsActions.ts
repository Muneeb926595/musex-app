import {SongsActionTypes} from '../redux/actionTypes';

import {getSongsFromStorage, setSongsToStorage} from '../search/services';

export const getSongs = () => {
  return async (dispatch) => {
    dispatch({
      type: SongsActionTypes.GET_SONGS_START,
      payload: {},
    });
    try {
      const songs = await getSongsFromStorage();
      getSongsSuccess(dispatch, songs);
    } catch (err) {
      getSongsFail(dispatch, err);
    }
  };
};
const getSongsFail = (dispatch, errorMessage) => {
  console.log(errorMessage);
  dispatch({
    type: SongsActionTypes.GET_SONGS_FAIL,
    payload: {
      errorMessage,
    },
  });
};
const getSongsSuccess = (dispatch, songs) => {
  dispatch({
    type: SongsActionTypes.GET_SONGS_SUCCESS,
    payload: {
      songs,
    },
  });
};

export const setSongs = (song) => {
  return async (dispatch) => {
    dispatch({
      type: SongsActionTypes.GET_SONGS_START,
      payload: {},
    });

    try {
      await setSongsToStorage(song);
      setSongsSuccess(dispatch);
    } catch (err) {
      setSongsFail(dispatch, err);
    }
  };
};
const setSongsFail = (dispatch, errorMessage) => {
  console.log(errorMessage);
  dispatch({
    type: SongsActionTypes.GET_SONGS_FAIL,
    payload: {
      errorMessage,
    },
  });
};
const setSongsSuccess = (dispatch) => {
  dispatch(getSongs());
};
