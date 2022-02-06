//TODO: directly copied from the web need to change this according to app needs

import {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import MusicControl, {Command} from 'react-native-music-control';

const useLockControls = ({
  videoLoaded,
  paused,
  title,
  duration,
  currentTime,
  handlePlayback,
  skipBackward,
  thumbnail,
  rate,
}) => {
  const [controlsEnabled, setControlsEnabled] = useState(false);
  const [triggerUpdatePlayback, setTriggerUpdatePlayback] = useState(false);
  const [preventUpdate, setPreventUpdate] = useState(true);

  useEffect(() => {
    if (!preventUpdate) {
      MusicControl.updatePlayback({
        state: paused ? MusicControl.STATE_PAUSED : MusicControl.STATE_PLAYING,
        speed: rate,
        elapsedTime: currentTime,
      });
    }

    // You don't need to call this method repeatedly to update the elapsedTime --
    // only call it when you need to update any other property.
    // https://github.com/tanguyantoine/react-native-music-control#update-playback
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, rate, preventUpdate]);

  useEffect(() => {
    if (triggerUpdatePlayback) {
      MusicControl.updatePlayback({
        elapsedTime: currentTime,
      });
      setTriggerUpdatePlayback(false);
    }
  }, [triggerUpdatePlayback, currentTime]);

  useEffect(() => {
    if (videoLoaded) {
      setControlsEnabled(true);
      setPreventUpdate(false);
      MusicControl.enableControl('play', true);
      MusicControl.enableControl('pause', true);
      MusicControl.enableControl('skipBackward', true);
      MusicControl.setNowPlaying({
        title,
        artwork: thumbnail, // URL or RN's image require()
        duration,
        speed: rate,
      });
    }
    if (!videoLoaded) {
      MusicControl.resetNowPlaying();
      setPreventUpdate(true);
    }
  }, [videoLoaded, duration, title, rate, thumbnail]);

  useEffect(() => {
    MusicControl.enableBackgroundMode(true);

    Platform.OS === 'ios' && MusicControl.handleAudioInterruptions(true);

    MusicControl.on(Command.skipBackward, () => {
      skipBackward();
      setTriggerUpdatePlayback(true);
    });

    MusicControl.on(Command.play, () => {
      setTriggerUpdatePlayback(true);
      handlePlayback();
    });

    // on iOS this event will also be triggered by audio router change events
    // happening when headphones are unplugged or a bluetooth audio peripheral disconnects from the device
    MusicControl.on(Command.pause, () => {
      handlePlayback();
    });
  }, [handlePlayback, skipBackward]);

  useEffect(() => {
    return () => {
      if (controlsEnabled) {
        MusicControl.stopControl();
      }
    };
  }, [controlsEnabled]);

  return {setTriggerUpdatePlayback};
};

export default useLockControls;
