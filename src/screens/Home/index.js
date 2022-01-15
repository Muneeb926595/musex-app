import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {RecentPlayed, Discover, FollowArtists} from './components';
import {Col, MainHeader, Container} from 'components';

const index = ({navigation}) => {
  return (
    <>
      <MainHeader navigation={navigation} />
      <Container
        hasScroll
        pad={`${wp(12)}px ${wp(5)}px ${wp(25)}px ${wp(5)}px`}>
        <FollowArtists />
        <RecentPlayed />
        <Discover />
      </Container>
    </>
  );
};

export default index;
