import React, {useRef} from 'react';
import Video from 'react-native-video';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const VideoPlayer = ({
  uri,
  width,
  height,
  size,
  borderRadius,
  marginBottom,
  marginRight,
}) => {
  const videoRef = useRef();

  return (
    <Video
      source={{uri: uri}}
      onError={(err) => {
        console.log('err', err);
      }}
      autoPlay={true}
      controls={true}
      ref={videoRef}
      resizeMode="cover"
      style={{
        width: width ? width : size || 25,
        height: height ? height : size || 25,
        marginTop: 1,
        marginBottom: marginBottom ? marginBottom : 0,
        borderRadius: borderRadius ? borderRadius : 0,
        marginRight: marginRight ? marginRight : 0,
        alignSelf: 'center',
        borderColor: 'white',
        backgroundColor: '#ffffff',
      }}
    />
  );
};

export default VideoPlayer;
