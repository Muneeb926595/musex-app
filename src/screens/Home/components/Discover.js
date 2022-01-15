import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Row, MyText, Icon, Col, Avatar} from 'components';
import DiscoverCard from './DiscoverCard';

const Discover = () => {
  return (
    <Col noFlex>
      <Row noFlex center between>
        <MyText weight="bold" size={`${RFValue(17)}px`}>
          Discover
        </MyText>
        <Row noFlex center>
          <MyText weight="300" color="#9d9d9d">
            All
          </MyText>
          <Icon marg={`0 0 0 ${wp(1)}px`} size={wp(2.4)} type="right-arrow" />
        </Row>
      </Row>
      <Row noFlex between pad={`0 ${wp(2)}px`} marg={`${wp(8)}px 0`}>
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
      </Row>
    </Col>
  );
};

export default Discover;
