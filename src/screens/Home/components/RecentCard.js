import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Row, MyText, Col, Avatar, Clickable} from 'components';

const RecentCard = ({item, navigation}) => {
  const handleCardClick = () => {
    navigation.navigate('Player', {item});
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
          <Avatar uri={item?.thumb} size={wp(14)} />
          <Col marg={`0 0 0 ${wp(4)}px`} noFlex>
            <MyText weight="300" marg={`0 0 ${wp(0.8)}px 0`} color="#9d9d9d">
              {item?.title?.toString()?.substring(0, 10)}
            </MyText>
            <MyText weight="bold" size={`${RFValue(17)}px`}>
              {item?.artist?.toString()?.substring(0, 10)}
            </MyText>
          </Col>
        </Row>
        <Row></Row>
      </Row>
    </Clickable>
  );
};

export default RecentCard;
