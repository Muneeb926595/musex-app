import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Search} from './components';
import {Container} from 'components';

const index = ({navigation}) => {
  return (
    <Container hasScroll pad={`${wp(12)}px ${wp(5)}px ${wp(25)}px ${wp(5)}px`}>
      <Search navigation={navigation} />
    </Container>
  );
};

export default index;
