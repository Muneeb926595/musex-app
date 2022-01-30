import RNFetchBlob from 'rn-fetch-blob';
import {Platform} from 'react-native';
import {getSongsFromStorage} from 'store/search/services';

export const downloadMusic = async (song) => {
  //check if song already exists in local storage
  let songs = await getSongsFromStorage();
  const alreadyFoundInStorage = songs.find((item) => item.id === song.id);
  if (alreadyFoundInStorage) return {};

  //download if song dosen't exists in local storage
  const {
    fs: {dirs},
  } = RNFetchBlob;
  const PATH_TO_LIST = dirs.DocumentDir;
  const dest = `${PATH_TO_LIST}/${song.title}.mp4`;
  const tmpPath = `${dest}.download`;

  RNFetchBlob.fs.ls(PATH_TO_LIST).then((files) => {
    console.log(files);
  });

  RNFetchBlob.fs
    .exists(tmpPath)
    .then((ext) => {
      if (ext) {
        if (Platform.OS === 'android') {
          return RNFetchBlob.fs.stat(dest);
        }
        return RNFetchBlob.fs.appendFile(dest, tmpPath, 'uri').then(() => {
          return RNFetchBlob.fs.stat(tmpPath);
        });
      }
      return Promise.resolve({size: 0});
    })
    .then(async (stat) => {
      const songRes = await RNFetchBlob.config({
        IOSBackgroundTask: true, // required for both upload
        IOSDownloadTask: true, // Use instead of IOSDownloadTask if uploading
        path: Platform.OS === 'android' ? tmpPath : dest,
        fileCache: true,
      })
        .fetch('GET', `https://www.youtube.com/watch?v=${song?.id}`, {
          Range: Platform.OS === 'android' ? `bytes=${stat.size}-` : '',
        })
        .progress((receivedStr, totalStr) => {
          // Do any things
          console.log('download progress', receivedStr, totalStr);
        });
      song.path = songRes.path();
    })
    .then((file) => {
      if (Platform.OS === 'android') {
        return RNFetchBlob.fs.appendFile(dest, file.path(), 'uri');
      }
    })
    // remove tmp file ( file at ${dest}.download )
    .then(() => {
      if (Platform.OS === 'android') {
        return RNFetchBlob.fs.unlink(tmpPath);
      }
      return null;
    })
    // stat dest to get info downloaded of a video
    .then(() => {
      return RNFetchBlob.fs.stat(dest);
    })
    .then(async (stat) => {
      const imgRes = await RNFetchBlob.config({
        path: `${dirs.DocumentDir}/${song.title}.jpg`,
      }).fetch('GET', song.thumb, {});
      song.thumb = imgRes.path();
      console.log('download success', song);
    })
    .catch((err) => {
      console.log('download error', err);
    });
};

// export const downloadMusic = (songUri, successCallback, errorCallback) => {
//   RNFetchBlob.fetch(
//     'GET',
//     'https://images.unsplash.com/photo-1643381023493-d5d362b471f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
//   )
//     .then((res) => {
//       let status = res.info().status;
//       console.log('responge', res, 'status', status);
//       if (status == 200) {
//         // the conversion is done in native code
//         let base64Str = res.base64();
//         // the following conversions are done in js, it's SYNC
//         let text = res.text();
//         let json = res.json();
//       }
//       successCallback();
//     })
//     // Something went wrong:
//     .catch((errorMessage) => {
//       console.log('errorMessage, statusCode', errorMessage);
//       errorCallback();
//     });
// };

// export const downloadMusic = async (song) => {
//   try {

//     let dirs = RNFetchBlob.fs.dirs;
//     let songInfo = {url: 'https://www.youtube.com/watch?v=ZawBD4JKw3E'};
//     const songRes = await RNFetchBlob.config({
//       path: `${dirs.DocumentDir}/${song.title}.mp4`,
//     })
//       .fetch('GET', songInfo.url, {})
//       .progress((received, total) => {
//         console.log(received / total, song.id);
//       });

//     let updatedSongs = await Utils.setSongsToStorage(
//       DOWNLOADED_SONGS,
//       recover,
//     );
// };
