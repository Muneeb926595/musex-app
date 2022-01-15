import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Row, MyText, Icon, Col, Avatar, Box} from 'components';
import RecentCard from './RecentCard';

const RecentPlayed = ({navigation}) => {
  return (
    <Col noFlex>
      <Row noFlex center between>
        <MyText weight="bold" size={`${RFValue(17)}px`}>
          Recent played
        </MyText>
        <Row noFlex center>
          <MyText weight="300" color="#9d9d9d">
            More
          </MyText>
          <Icon marg={`0 0 0 ${wp(1)}px`} size={wp(2.4)} type="right-arrow" />
        </Row>
      </Row>
      <Col pad={`0 ${wp(2)}px`} marg={`${wp(8)}px 0`}>
        <RecentCard navigation={navigation} />
        <RecentCard navigation={navigation} />
      </Col>
    </Col>
  );
};

export default RecentPlayed;
