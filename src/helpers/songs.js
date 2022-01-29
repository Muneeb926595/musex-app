import RNFetchBlob from 'rn-fetch-blob';

const {
  fs: {dirs},
} = RNFetchBlob;
const PATH_TO_LIST = dirs.DocumentDir;
const dest = `${PATH_TO_LIST}/big_buck_bunny_720p_10mb.mp4`;
const tmpPath = `${dest}.download`;

const startDownloading = () => {
  RNFetchBlob.fs.ls(PATH_TO_LIST).then((files) => {
    console.log(files);
  });
  fs.exists(tmpPath)
    .then((ext) => {
      if (ext) {
        if (this.isAndroid) {
          this.startTime = new Date().valueOf();
          return fs.stat(dest);
        }
        return fs.appendFile(dest, tmpPath, 'uri').then(() => {
          this.startTime = new Date().valueOf();
          return fs.stat(tmpPath);
        });
      }
      this.startTime = new Date().valueOf();
      return Promise.resolve({size: 0});
    })
    .then((stat) => {
      this.downtask = RNFetchBlob.config({
        IOSBackgroundTask: true, // required for both upload
        IOSDownloadTask: true, // Use instead of IOSDownloadTask if uploading
        path: this.isAndroid ? tmpPath : dest,
        fileCache: true,
      })
        .fetch('GET', url, {
          Range: this.isAndroid ? `bytes=${stat.size}-` : '',
        })
        .progress((receivedStr, totalStr) => {
          // Do any things
        });
      this.downtask.catch(async (err) => {
        // Check error
      });
    })
    .then((file) => {
      if (Platform.OS === 'android') {
        return fs.appendFile(dest, file.path(), 'uri');
      }
    })

    // remove tmp file ( file at ${dest}.download )
    .then(() => {
      if (Platform.OS === 'android') {
        return fs.unlink(tmpPath);
      }
      return null;
    })
    // stat dest to get info downloaded of a video
    .then(() => {
      return fs.stat(dest);
    })
    .then(async (stat) => {
      // Downloaded successfully
    });
};

export const downloadMusic = (songUri, successCallback, errorCallback) => {
  RNFetchBlob.fetch(
    'GET',
    'https://images.unsplash.com/photo-1643381023493-d5d362b471f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  )
    .then((res) => {
      let status = res.info().status;
      console.log('responge', res, 'status', status);
      if (status == 200) {
        // the conversion is done in native code
        let base64Str = res.base64();
        // the following conversions are done in js, it's SYNC
        let text = res.text();
        let json = res.json();
      }
      successCallback();
    })
    // Something went wrong:
    .catch((errorMessage) => {
      console.log('errorMessage, statusCode', errorMessage);
      errorCallback();
    });
};
