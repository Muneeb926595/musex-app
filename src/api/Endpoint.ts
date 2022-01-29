export const BASE = 'api end point';

export const getSearchSongsUrl = (
  limit,
  searchText,
  REACT_APP_IS_YOUTUBE_API_KEY,
) => {
  return encodeURI(
    `https://www.googleapis.com/youtube/v3/search?q=${searchText}&type=video&maxResults=${limit}&part=snippet&key=${REACT_APP_IS_YOUTUBE_API_KEY}`,
  );
};

export const getSearchSongsByPlaylistIdUrl = (
  page,
  limit,
  playListId,
  REACT_APP_IS_YOUTUBE_API_KEY,
) => {
  return encodeURI(
    `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playListId}&maxResults=${limit}&part=snippet&key=${REACT_APP_IS_YOUTUBE_API_KEY}`,
  );
};
