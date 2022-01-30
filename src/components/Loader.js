import React from 'react';
import {ActivityIndicator} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Loader = () => {
  return (
    <ActivityIndicator
      animating={true}
      color="#3F70EC"
      style={{
        width: wp(5),
        height: wp(5),
      }}
    />
  );
};
export default Loader;
