import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Row, Icon, MyText} from 'components';

const PlayerWave = () => {
  return (
    <Row between center marg={`${wp(8)}px 0`}>
      <MyText
        marg={`0 0 ${wp(2)}px  0`}
        weight="bold"
        size={`${RFValue(12)}px`}>
        3:20
      </MyText>
      <Row noFlex center>
        <MyText>Here Goes My PLayer Timeline</MyText>
      </Row>
      <MyText
        marg={`0 0 ${wp(2)}px  0`}
        weight="bold"
        size={`${RFValue(12)}px`}>
        4:43
      </MyText>
    </Row>
  );
};

export default PlayerWave;
