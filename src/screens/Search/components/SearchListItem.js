import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Row, Col, MyText} from 'components';

const SearchListItem = ({item}) => {
  console.log('item', item);
  return (
    <Row
      noFlex
      marg={`${wp(2)}px 0`}
      hasShadow="0 0 30px #cdcdcd45"
      hasRadius="10"
      bg="#ffffff"
      pad={`${wp(8)}px`}>
      <MyText size={`${RFValue(12)}px`}>{item?.title}</MyText>
    </Row>
  );
};

export default SearchListItem;
