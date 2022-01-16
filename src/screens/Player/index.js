import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {PlayerHeader, Container} from 'components';
import {Cover, SongDetails, PlayerOptions, PlayerWave} from './components';

const index = ({navigation}) => {
  return (
    <>
      <PlayerHeader navigation={navigation} />
      <Container
        hasScroll
        pad={`${wp(12)}px ${wp(5)}px ${wp(25)}px ${wp(5)}px`}>
        <Cover />
        <SongDetails />
        <PlayerOptions />
        <PlayerWave />
      </Container>
    </>
  );
};

export default index;
