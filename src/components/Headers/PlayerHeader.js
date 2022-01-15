import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Row, MyText, Icon, Clickable} from 'components';

const PlayerHeader = () => {
  return (
    <Row
      noFlex
      center
      between
      pad={`${wp(14)}px ${wp(5)}px ${wp(2)}px ${wp(5)}px`}>
      <MyText weight="bold" size={`${RFValue(17)}px`}>
        You're listening
      </MyText>
      <Clickable pad={`${wp(2)}px`}>
        <Icon type="three-dots" size={wp(4.6)} />
      </Clickable>
    </Row>
  );
};

export default PlayerHeader;
