import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { Row, Clickable, MyText } from 'components';

const SearchListItem = ({ item, navigation }) => {
  const handleClick = () => {
    navigation.navigate('Player', { youtubeVideoId: item?.video })
  }
  return (
    <Clickable onClick={handleClick}>
      <Row
        noFlex
        marg={`${wp(2)}px 0`}
        hasShadow="0 0 30px #cdcdcd45"
        hasRadius="10"
        bg="#ffffff"
        pad={`${wp(8)}px`}>
        <MyText size={`${RFValue(12)}px`}>{item?.title}</MyText>
      </Row>
    </Clickable>
  );
};

export default SearchListItem;
