import {getSearchSongsUrl} from '../../api/Endpoint';
import {SearchActionTypes} from '../redux/actionTypes';
import {REACT_APP_IS_YOUTUBE_API_KEY} from '@env';

import {formateSearchResults, filterOutDwonloadedSongs} from './services';

export const searchSongs = (limit, searchText) => {
  return (dispatch) => {
    dispatch({
      type: SearchActionTypes.SEARCH_SONGS_START,
      payload: {},
    });

    const url = getSearchSongsUrl(
      limit,
      searchText,
      REACT_APP_IS_YOUTUBE_API_KEY,
    );

    fetch(url)
      .then(async (response) => {
        console.log('response', response);
        const searchData = await response.json();
        const filterResults = await filterOutDwonloadedSongs(
          formateSearchResults(searchData),
        );

        console.log('filterResults', filterResults);
        if (filterResults?.length > 0) {
          searchSongsSuccess(dispatch, filterResults);
        } else {
          searchSongsFail(dispatch, 'There was an error connection');
        }
      })
      .catch((error) => {
        searchSongsFail(dispatch, error);
      });
  };
};
const searchSongsFail = (dispatch, errorMessage) => {
  console.log(errorMessage);
  dispatch({
    type: SearchActionTypes.SEARCH_SONGS_FAIL,
    payload: {
      errorMessage,
    },
  });
};
const searchSongsSuccess = (dispatch, searchResults) => {
  dispatch({
    type: SearchActionTypes.SEARCH_SONGS_SUCCESS,
    payload: {
      searchResults,
    },
  });
};

export const getDiscoverSongs = (limit, searchText) => {
  return (dispatch) => {
    dispatch({
      type: SearchActionTypes.GET_DISCOVER_SONGS_START,
      payload: {},
    });

    const url = getSearchSongsUrl(
      limit,
      searchText,
      REACT_APP_IS_YOUTUBE_API_KEY,
    );

    fetch(url)
      .then(async (response) => {
        console.log('response', response);
        const searchData = await response.json();
        const filterResults = await filterOutDwonloadedSongs(
          formateSearchResults(searchData),
        );

        if (filterResults?.length > 0) {
          getDiscoverSongsSuccess(dispatch, filterResults);
        } else {
          getDiscoverSongsFail(dispatch, 'There was an error connection');
        }
      })
      .catch((error) => {
        getDiscoverSongsFail(dispatch, error);
      });
  };
};
const getDiscoverSongsFail = (dispatch, errorMessage) => {
  console.log(errorMessage);
  dispatch({
    type: SearchActionTypes.GET_DISCOVER_SONGS_FAIL,
    payload: {
      errorMessage,
    },
  });
};
const getDiscoverSongsSuccess = (dispatch, discoverResults) => {
  dispatch({
    type: SearchActionTypes.GET_DISCOVER_SONGS_SUCCESS,
    payload: {
      discoverResults,
    },
  });
};
