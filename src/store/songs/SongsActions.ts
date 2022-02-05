import {SongsActionTypes} from '../redux/actionTypes';

import {
  getSongsFromStorage,
  setSongsToStorage,
  updateRecentSongsInStorage,
  getRecentSongsFromStorage,
} from '../search/services';

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

export const getRecentsSongs = () => {
  return async (dispatch) => {
    dispatch({
      type: SongsActionTypes.GET_RECENT_SONGS_START,
      payload: {},
    });

    try {
      const songs = await getRecentSongsFromStorage();
      getRecentsSongsSuccess(dispatch, songs);
    } catch (err) {
      getRecentsSongsFail(dispatch, err);
    }
  };
};
const getRecentsSongsFail = (dispatch, errorMessage) => {
  console.log(errorMessage);
  dispatch({
    type: SongsActionTypes.GET_RECENT_SONGS_FAIL,
    payload: {
      errorMessage,
    },
  });
};
const getRecentsSongsSuccess = (dispatch, songs) => {
  dispatch({
    type: SongsActionTypes.GET_RECENT_SONGS_SUCCESS,
    payload: {
      songs,
    },
  });
};

export const updateRecentsSongs = (song) => {
  return async (dispatch) => {
    dispatch({
      type: SongsActionTypes.UPDATE_RECENTS_START,
      payload: {},
    });

    try {
      const songs = await updateRecentSongsInStorage(song);
      updateRecentsSongsSuccess(dispatch, songs);
    } catch (err) {
      updateRecentsSongsFail(dispatch, err);
    }
  };
};
const updateRecentsSongsFail = (dispatch, errorMessage) => {
  console.log(errorMessage);
  dispatch({
    type: SongsActionTypes.UPDATE_RECENTS_FAIL,
    payload: {
      errorMessage,
    },
  });
};
const updateRecentsSongsSuccess = (dispatch, songs) => {
  dispatch({
    type: SongsActionTypes.UPDATE_RECENTS_FAIL,
    payload: {
      songs,
    },
  });
};
