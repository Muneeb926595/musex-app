import React, {useRef, useState, useEffect} from 'react';
import Video from 'react-native-video';
import MusicControl, {Command} from 'react-native-music-control';

const VideoPlayer = ({
  uri,
  item,
  width,
  height,
  size,
  borderRadius,
  marginBottom,
  marginRight,
  isPlaying,
  setIsPlaying,
}) => {
  const videoRef = useRef();
  const [areControlsSetup, setAreControlsSetup] = useState(false);

  useEffect(() => {
    MusicControl.enableBackgroundMode(true);
    MusicControl.enableControl(Command.closeNotification, true, {
      when: 'always',
    });
    MusicControl.on(Command.play, () => setIsPlaying(true));
    MusicControl.on(Command.pause, () => setIsPlaying(false));
    return () => {
      console.log('stop control');
      MusicControl.stopControl();
    };
  }, [setIsPlaying]);

  const setupControls = (data) => {
    if (!areControlsSetup) {
      MusicControl.setNowPlaying({
        title: 'demo video',
        artist: 'Pedrito el Pupito',
        duration: data.playableDuration,
        elapsedTime: data.currentTime,
        artwork: item?.thumb,
      });
      MusicControl.enableControl(Command.play, true);
      MusicControl.enableControl(Command.pause, true);
      console.log('playing!!', data.playableDuration);
    }
  };

  return (
    <Video
      source={{uri: uri}}
      onError={(err) => {
        console.log('err', err);
      }}
      paused={!isPlaying}
      muted={!isPlaying}
      ref={videoRef}
      playInBackground={true}
      playWhenInactive={true}
      onProgress={setupControls}
      ignoreSilentSwitch="ignore"
      mixWithOthers="mix"
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
