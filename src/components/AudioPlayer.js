import React, {useEffect} from 'react';
import {Image} from 'react-native';
import Sound from 'react-native-sound';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const playBackgroundSound = (soundPath) => {
  Sound.setCategory('Playback', false);

  var mySound = new Sound(soundPath, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('Error loading sound: ' + error);
      return;
    } else {
      mySound.play((success) => {});
    }
  });
  mySound.setVolume(1);
};

const AudioPlayer = ({uri}) => {
  useEffect(() => {
    playBackgroundSound(uri);
  }, [uri]);

  return (
    <Image
      source={{
        uri: 'https://images.unsplash.com/photo-1536811145290-bc394643e51e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwZ2lybCUyMGRhbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      }}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: wp(5),
      }}
    />
  );
};

export default AudioPlayer;
