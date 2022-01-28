import React from 'react';
import YouTube from 'react-native-youtube';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const YouTubeVideoPlayer = ({
  width,
  height,
  size,
  youtubeVideoId,
  marginBottom,
  marginTop,
}) => {
  return (
    <YouTube
      videoId={youtubeVideoId}
      play={true}
      fullscreen={false}
      loop={false}
      onReady={(e) => console.log('player is ready')}
      onChangeQuality={(e) => console.log('change quality', e)}
      onError={(err) => {
        console.log('err', err);
      }}
      style={{
        width: width ? width : size || 25,
        height: height ? height : size || 25,
        marginTop: marginTop || 1,
        marginBottom: marginBottom,
        borderRadius: wp(5),
        alignSelf: 'center',
        borderColor: 'white',
      }}
    />
  );
};

export default YouTubeVideoPlayer;
