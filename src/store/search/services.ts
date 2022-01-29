import {StorageHelper} from 'helpers';

export const filterOutDwonloadedSongs = async (songs) => {
  let downloadedSongs = await getSongsFromStorage();
  return songs?.map((song) => {
    const songFound = downloadedSongs.find(
      (downloadedSong) => downloadedSong.id === song.id,
    );
    if (songFound) {
      songFound.downloaded = true;
      return songFound;
    }

    return song;
  });
};

export const formateSearchResults = (searchData) => {
  return searchData.items.map((item) => {
    return {
      id: item.id.videoId,
      artist: item.snippet.channelTitle,
      title: item.snippet.title,
      thumb: item.snippet.thumbnails.high.url,
      //   path: getSongUrl(item.id.videoId),
    };
  });
};

export const getSongsFromStorage = async () => {
  let songs = await StorageHelper.getItem(StorageHelper.StorageKeys.SONGS);
  songs = songs || JSON.stringify([]);
  return JSON.parse(songs);
};

export const getSongFromStorage = async (id) => {
  let songs = await StorageHelper.getItem(StorageHelper.StorageKeys.SONGS);
  songs = songs || JSON.stringify([]);
  const song = JSON.parse(songs).find((song) => song.id === id);
  return song;
};
