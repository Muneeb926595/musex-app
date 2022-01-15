import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native';

import {MyText, Col, Icon} from 'components';

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
      <MyText
        Rubik
        size={
          activeMenu === 'RecipeHub' ? `${RFValue(9.5)}px` : `${RFValue(11)}px`
        }
        color={focused ? 'blue' : 'grey'}
        weight="500">
        {text}
      </MyText>
    </Col>
  );
};

export default TabBarItem;
