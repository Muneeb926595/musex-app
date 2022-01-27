import {getSearchSongsUrl} from '../../api/Endpoint';
import {SearchActionTypes} from '../redux/actionTypes';
import {REACT_APP_IS_YOUTUBE_API_KEY} from '@env';

export const searchSongs = (page, limit, searchText) => {
  return (dispatch) => {
    dispatch({
      type: SearchActionTypes.SEARCH_SONGS_START,
      payload: {
        pageNo: page,
      },
    });

    const url = getSearchSongsUrl(
      page,
      limit,
      searchText,
      REACT_APP_IS_YOUTUBE_API_KEY,
    );

    fetch(url)
      .then(async (response) => {
        const data = await response.json();
        console.log('data', data);
        if (data?.items?.length > 0) {
          searchSongsSuccess(
            dispatch,
            data?.items,
            data?.pageInfo?.totalResults,
            data?.pageInfo?.resultsPerPage,
          );
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
const searchSongsSuccess = (
  dispatch,
  searchResults,
  usersTotalPages,
  usersCurrentPage,
) => {
  dispatch({
    type: SearchActionTypes.SEARCH_SONGS_SUCCESS,
    payload: {
      searchResults,
      usersTotalPages,
      usersCurrentPage,
    },
  });
};
