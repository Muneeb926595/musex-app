import RNFetchBlob from 'rn-fetch-blob';
import {Platform} from 'react-native';
import ytdl from 'react-native-ytdl';

import {getSongsFromStorage, setSongsToStorage} from 'store/search/services';

export const downloadMusic = async (
  song,
  handleStartDownloading,
  handleDownloadProgress,
  successCallback,
  errorCallback,
) => {
  //check if song already exists in local storage
  let songs = await getSongsFromStorage();
  const alreadyFoundInStorage = songs.find((item) => item.id === song.id);
  if (alreadyFoundInStorage) return {};

  //download if song dosen't exists in local storage
  const {
    fs: {dirs},
  } = RNFetchBlob;
  const PATH_TO_LIST = dirs.DocumentDir;
  let dest = `${PATH_TO_LIST}/${song.id}`;
  const tmpPath = `${dest}.download`;

  const youtubeVideoUrl = `https://www.youtube.com/watch?v=${song?.id}`;

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
      let downloadableURL = await ytdl(youtubeVideoUrl, {
        quality: 'highest',
      });
      downloadableURL = downloadableURL?.[0];
      const {url, headers} = downloadableURL;

      handleStartDownloading();

      const songRes = await RNFetchBlob.config({
        IOSBackgroundTask: true, // required for both upload
        IOSDownloadTask: true, // Use instead of IOSDownloadTask if uploading
        path: Platform.OS === 'android' ? tmpPath : dest,
        fileCache: true,
        overwrite: false,
      })
        .fetch('GET', url, headers)
        .progress((received, total) => {
          const progress = (received * (0 + 1)) / (total * 1);
          handleDownloadProgress(Math.floor(progress * 100));
          console.log('progress', progress * 100);
        })
        .catch((err) => console.error(`Could not save:"${path}" Reason:`, err));

      const contentType = songRes.respInfo.headers['Content-Type'];
      if (contentType) {
        const extension = contentType.split('/')[1];
        dest = `${dest}.${extension}`;
        console.log('songRes.path(), path', songRes.path(), dest);
        await RNFetchBlob.fs.mv(songRes.path(), dest);
      }
      song.path = dest;
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
        path: `${dirs.DocumentDir}/${song.id}.jpg`,
      }).fetch('GET', song.thumb, {});
      song.thumb = imgRes.path();
      setSongsToStorage(song);
      successCallback();
    })
    .catch((err) => {
      console.log('download error', err);
      errorCallback();
    });
};
