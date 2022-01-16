import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native';

import {Col, Icon} from 'components';

const TabBarItem = (props) => {
  const {
    text,
    icon,
    iconWid,
    iconHt,
    navigation,
    navigateTo,
    setActiveMenu,
    activeMenu,
  } = props;
  const focused = activeMenu === navigateTo;

  return (
    <Col centerAll>
      <TouchableOpacity
        style={{
          marginTop: wp(4),
        }}
        onPress={() => {
          setActiveMenu(navigateTo);
          if (navigateTo === 'FoodandI') {
            //Passing userId null so that on fooder page it always show data of logedin user instead of the last viewed user profile
            navigation.navigate(navigateTo, {userId: null});
          } else {
            navigation.navigate(navigateTo);
          }
        }}>
        <Icon
          type={focused ? icon + '-active' : icon}
          width={iconWid}
          height={iconHt}
        />
      </TouchableOpacity>
    </Col>
  );
};

export default TabBarItem;
