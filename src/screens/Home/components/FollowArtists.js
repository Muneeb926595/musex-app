import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Row, MyText, Icon, Col, Avatar} from 'components';

const FollowArtists = () => {
  return (
    <Col noFlex>
      <Row noFlex center between>
        <MyText weight="bold" size={`${RFValue(17)}px`}>
          Follow artists
        </MyText>
        <Row noFlex center>
          <MyText weight="300" color="#9d9d9d">
            Others
          </MyText>
          <Icon marg={`0 0 0 ${wp(1)}px`} size={wp(2.4)} type="right-arrow" />
        </Row>
      </Row>
      <Row noFlex center between marg={`${wp(8)}px 0`}>
        <Col centerAll noFlex>
          <Avatar
            uri="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            size={wp(14)}
          />
          <MyText marg={`${wp(3)}px 0 0 0`} weight="400" color="#9d9d9d">
            Others
          </MyText>
        </Col>
      </Row>
    </Col>
  );
};

export default FollowArtists;
