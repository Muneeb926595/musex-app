import React from 'react';
import {Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {MyText, Box} from 'components';

const DiscoverCard = () => {
  return (
    <Box
      hasShadow="0 0 30px #cdcdcd35"
      hasRadius="20"
      relative
      bg="red"
      wid="31%"
      ht={`${wp(40)}px`}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
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
          Test
        </MyText>
      </Box>
    </Box>
  );
};

export default DiscoverCard;
