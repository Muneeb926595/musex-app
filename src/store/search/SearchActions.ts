import {getSearchByPlayListUrl} from '../../api/Endpoint';
import {SearchActionTypes} from '../redux/actionTypes';
import {REACT_APP_IS_YOUTUBE_API_KEY} from '@env';

export const getSearchByPlayList = (page, limit, searchText) => {
  return (dispatch) => {
    dispatch({
      type: SearchActionTypes.SEARCH_BY_PLAYLIST_START,
      payload: {
        pageNo: page,
      },
    });

    const url = getSearchByPlayListUrl(
      page,
      limit,
      'PL0QogTHgGHMVh26RRFstAPBpxa2ZTWIQL',
      REACT_APP_IS_YOUTUBE_API_KEY,
    );
    console.log(url);
    fetch(url)
      .then(async (response) => {
        const data = await response.json();
        console.log('data', data);
        if (data?.items?.length > 0) {
          searchUsersSuccess(
            dispatch,
            data?.items,
            data?.pageInfo?.totalResults,
            data?.pageInfo?.resultsPerPage,
          );
        } else {
          searchUsersFail(dispatch, 'There was an error connection');
        }
      })
      .catch((error) => {
        searchUsersFail(dispatch, 'There was an error connection2');
      });
  };
};
const searchUsersFail = (dispatch, errorMessage) => {
  console.log(errorMessage);
  dispatch({
    type: SearchActionTypes.SEARCH_BY_PLAYLIST_FAIL,
    payload: {
      errorMessage,
    },
  });
};
const searchUsersSuccess = (
  dispatch,
  users,
  usersTotalPages,
  usersCurrentPage,
) => {
  dispatch({
    type: SearchActionTypes.SEARCH_BY_PLAYLIST_SUCCESS,
    payload: {
      users,
      usersTotalPages,
      usersCurrentPage,
    },
  });
};
