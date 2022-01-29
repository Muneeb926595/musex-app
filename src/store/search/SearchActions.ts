import {getSearchSongsUrl} from '../../api/Endpoint';
import {SearchActionTypes} from '../redux/actionTypes';
import {REACT_APP_IS_YOUTUBE_API_KEY} from '@env';

import {formateSearchResults} from './services';

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
        const searchData = await response.json();

        const filterResults = formateSearchResults(searchData);

        console.log('searchData', searchData);
        console.log('filterResults', filterResults);
        if (filterResults.length > 0) {
          searchSongsSuccess(dispatch, filterResults);
        } else {
          searchSongsFail(dispatch, 'There was an error connection');
        }
      })
      .catch((error) => {
        searchSongsFail(dispatch, 'There was an error connection2');
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
