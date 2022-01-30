import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {MainHeader, Col, MyText, Box} from 'components';

const index = ({navigation}) => {
  return (
    <>
      <MainHeader navigation={navigation} title="Settings" hideSearch />
      {/* <Box pad={`0 ${wp(5)}px ${wp(25)}px ${wp(5)}px`}> */}
      <Col centerAll>
        <MyText
          marg={`0 0 0 ${wp(3.4)}px`}
          color="#9d9d9d"
          size={`${RFValue(17)}px`}>
          Under Progress
        </MyText>
      </Col>
      {/* </Box> */}
    </>
  );
};

export default index;
