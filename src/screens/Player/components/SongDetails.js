import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Row, Col, MyText} from 'components';

const SongDetails = () => {
  return (
    <Row marg={`${wp(8)}px 0`}>
      <Col noFlex>
        <MyText
          marg={`0 0 ${wp(2)}px  0`}
          weight="bold"
          size={`${RFValue(18)}px`}>
          Faith
        </MyText>
        <MyText
          weight="400"
          size={`${RFValue(13)}px`}
          marg={`0 0 ${wp(0.8)}px 0`}
          color="#9d9d9d">
          The Weeknd
        </MyText>
      </Col>
    </Row>
  );
};

export default SongDetails;
