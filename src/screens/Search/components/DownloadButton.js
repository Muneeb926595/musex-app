import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CircularProgress from 'react-native-circular-progress-indicator';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Icon, Clickable} from 'components';
import {downloadMusic} from 'helpers';

const DOWNLOADING_STATES = {
  INTITAL: 'initial',
  DOWNLOAING: 'downloading',
  DOWNLOADED: 'downloaded',
  PREPARING: 'preparing',
};

const DownloadButton = ({item}) => {
  const [downloading, setDownloading] = useState(DOWNLOADING_STATES.INTITAL);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const handelDownload = () => {
    setDownloading(DOWNLOADING_STATES.PREPARING);
    const handleStartDownloading = () => {
      setDownloading(DOWNLOADING_STATES.DOWNLOAING);
    };
    const successCallback = () => {
      setDownloading(DOWNLOADING_STATES.DOWNLOADED);
    };
    const errorCallback = () => {
      setDownloading(DOWNLOADING_STATES.INTITAL);
      alert('something went wrong');
    };
    const handleDownloadProgress = (value) => {
      setDownloadProgress(value);
    };
    downloadMusic(
      item,
      handleStartDownloading,
      handleDownloadProgress,
      successCallback,
      errorCallback,
    );
  };
  return (
    <>
      {item?.downloaded || downloading === DOWNLOADING_STATES.DOWNLOADED ? (
        <></>
      ) : downloading === DOWNLOADING_STATES.INTITAL && !item?.downloaded ? (
        <Clickable onClick={handelDownload}>
          <Icon type="download" size={wp(5)} />
        </Clickable>
      ) : downloading === DOWNLOADING_STATES.PREPARING ? (
        <ActivityIndicator
          style={{width: wp(5), height: wp(5)}}
          color="#3F70EC"
        />
      ) : downloading === DOWNLOADING_STATES.DOWNLOAING ? (
        <CircularProgress
          value={downloadProgress}
          inActiveStrokeColor={'#9d9d9d'}
          inActiveStrokeOpacity={0.4}
          textColor={'#000000'}
          textStyle={{
            fontSize: RFValue(9),
          }}
          radius={wp(5)}
          activeStrokeColor="#3F70ECdf"
          inActiveStrokeWidth={wp(1.2)}
          activeStrokeWidth={wp(1.2)}
        />
      ) : (
        <ActivityIndicator
          animating={true}
          color="#3F70EC"
          style={{
            width: wp(5),
            height: wp(5),
          }}
        />
      )}
    </>
  );
};

export default DownloadButton;
