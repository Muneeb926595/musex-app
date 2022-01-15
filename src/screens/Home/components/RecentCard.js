import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Row, MyText, Col, Avatar, Clickable} from 'components';

const RecentCard = ({navigation}) => {
  const handleCardClick = () => {
    navigation.navigate('Player');
  };
  return (
    <Clickable onClick={handleCardClick}>
      <Row
        between
        pad={`${wp(4)}px ${wp(6)}px`}
        hasShadow="0 0 30px #cdcdcd45"
        hasRadius="10"
        bg="#ffffff"
        center>
        <Row center>
          <Avatar
            uri="https://images.unsplash.com/photo-1498746607408-1e56960e3bdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            size={wp(14)}
          />
          <Col marg={`0 0 0 ${wp(4)}px`} noFlex>
            <MyText weight="300" marg={`0 0 ${wp(0.8)}px 0`} color="#9d9d9d">
              The Weeknd
            </MyText>
            <MyText weight="bold" size={`${RFValue(17)}px`}>
              Faith
            </MyText>
          </Col>
        </Row>
        <Row></Row>
      </Row>
    </Clickable>
  );
};

export default RecentCard;
