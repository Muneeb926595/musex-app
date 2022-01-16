import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Row, Icon} from 'components';

const PlayerOptions = () => {
  return (
    <Row between center marg={`${wp(8)}px 0`}>
      <Icon type="header-search" size={wp(6)} />
      <Row noFlex center>
        <Icon type="header-search" size={wp(6)} />
        <Icon type="header-search" size={wp(6)} />
        <Icon type="header-search" size={wp(6)} />
      </Row>
      <Icon type="header-search" size={wp(6)} />
    </Row>
  );
};

export default PlayerOptions;
