import React from 'react';
import {Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {MyText, Box} from 'components';

const DiscoverCard = ({item}) => {
  return (
    <Box
      hasShadow="0 0 30px #cdcdcd35"
      hasRadius="20"
      relative
      wid={`${wp(32)}px`}
      marg={`0 ${wp(4)}px 0 0`}
      ht={`${wp(42)}px`}>
      <Image
        source={{
          uri: item?.thumb,
        }}
        style={{
          borderTopLeftRadius: wp(5),
          borderTopRightRadius: wp(5),
          width: '100%',
          height: '100%',
        }}
      />
      <Box
        absolute
        bottom="5%"
        left="5%"
        bg="#ffffff"
        hasRadius="100"
        pad={`${wp(2)}px ${wp(6)}px`}>
        <MyText weight="bold" size={`${RFValue(11)}px`}>
          {item?.title?.toString()?.substring(0, 10)}
        </MyText>
      </Box>
    </Box>
  );
};

export default DiscoverCard;
