// const filterOutDwonloadedSongs = async () => {
//   let downloadedSongs = await Utils.getSongsFromStorage();
//   return _.map(songs, (song) => {
//     let findedSong = _.findWhere(downloadedSongs, {id: song.id});
//     if (findedSong) {
//       findedSong.downloaded = true;
//       return findedSong;
//     }

//     return song;
//   });
// };

export const formateSearchResults = (searchData) => {
  return searchData.items.map((item) => {
    return {
      id: item.id.videoId,
      artist: item.snippet.channelTitle,
      title: item.snippet.title,
      thumb: item.snippet.thumbnails.default.url,
      //   path: getSongUrl(item.id.videoId),
    };
  });
};
