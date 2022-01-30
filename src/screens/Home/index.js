import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {RecentPlayed, Discover, RecentlyDownloaded} from './components';
import {MainHeader, Container} from 'components';

const index = ({navigation}) => {
  return (
    <>
      <MainHeader navigation={navigation} />
      <Container
        hasScroll
        pad={`${wp(12)}px ${wp(5)}px ${wp(25)}px ${wp(5)}px`}>
        <RecentlyDownloaded navigation={navigation} />
        <RecentPlayed navigation={navigation} />
        <Discover navigation={navigation} />
      </Container>
    </>
  );
};

export default index;
