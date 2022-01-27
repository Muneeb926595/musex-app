import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { PlayerHeader, Container } from 'components';
import { Cover, SongDetails, PlayerOptions, PlayerWave } from './components';

const index = ({ navigation, route }) => {
  return (
    <>
      <PlayerHeader navigation={navigation} />
      <Container
        hasScroll
        pad={`${wp(12)}px ${wp(5)}px ${wp(25)}px ${wp(5)}px`}>
        <Cover youtubeVideoId={route?.params?.youtubeVideoId} />
        <SongDetails />
        <PlayerOptions />
        <PlayerWave />
      </Container>
    </>
  );
};

export default index;
