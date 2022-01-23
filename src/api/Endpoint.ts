export const BASE = 'api end point';

export const getSearchByPlayListUrl = (
  page,
  limit,
  playListId,
  REACT_APP_IS_YOUTUBE_API_KEY,
) => {
  return encodeURI(
    `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playListId}&maxResults=${limit}&part=snippet%2CcontentDetails&key=${REACT_APP_IS_YOUTUBE_API_KEY}`,
  );
};
