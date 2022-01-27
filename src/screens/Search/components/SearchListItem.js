import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { Row, Clickable, MyText, PostImage } from 'components';

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
        center
        bg="#ffffff"
        pad={`${wp(6)}px ${wp(2)}px`}>
        <PostImage width={wp(16)} height={wp(16)} uri={item?.thumbnails?.default?.url} borderRadius={20} />
        <MyText marg={`0 0 0 ${wp(3)}px`} style={{ width: '75%' }} size={`${RFValue(12)}px`}>{item?.title}</MyText>
      </Row>
    </Clickable>
  );
};

export default SearchListItem;
