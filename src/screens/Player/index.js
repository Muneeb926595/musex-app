import React, {useState} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {PlayerHeader, Container} from 'components';
import {Cover, SongDetails, PlayerOptions, PlayerWave} from './components';

const index = ({navigation, route}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <>
      <PlayerHeader navigation={navigation} />
      <Container
        hasScroll
        pad={`${wp(12)}px ${wp(5)}px ${wp(25)}px ${wp(5)}px`}>
        <Cover
          item={route?.params?.item}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
        <SongDetails />
        <PlayerOptions isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <PlayerWave />
      </Container>
    </>
  );
};

export default index;
