import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Row, MyText, Avatar, Icon, Box, Clickable} from 'components';

const MainHeader = ({navigation, title, hideSearch}) => {
  const handlePressSearch = () => {
    navigation.navigate('Search');
  };

  return (
    <Row
      noFlex
      center
      between
      pad={`${wp(14)}px ${wp(5)}px ${wp(2)}px ${wp(5)}px`}>
      <Row center>
        {/* <Avatar
          uri="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          size={wp(12)}
        /> */}
        <MyText
          marg={`0 0 0 ${wp(3.4)}px`}
          weight="bold"
          size={`${RFValue(17)}px`}>
          {title}
        </MyText>
      </Row>
      {!hideSearch && (
        <Clickable onClick={handlePressSearch}>
          <Box border="1px #bdbdbd" pad={`${wp(2)}px`} hasRadius="100">
            <Icon type="header-search" size={wp(4.6)} />
          </Box>
        </Clickable>
      )}
    </Row>
  );
};

export default MainHeader;
