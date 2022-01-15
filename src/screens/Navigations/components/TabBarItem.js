import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components';

import {MyText, Row, Col, Icon} from 'components';
import {playBackgroundSound} from 'helpers';

const TabBarItem = (props) => {
  const theme = useTheme();
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
    <Col
      centerAll
      marg={
        navigateTo === 'RecipeHub'
          ? `0 ${wp(16)}px 0 0`
          : navigateTo === 'Market'
          ? `0 0 0 ${wp(16)}px `
          : ``
      }>
      {focused && (
        <Row
          noFlex
          bg={theme?.PRIMARY}
          wid="50%"
          hasBorder={`${wp(0.7)}px solid red`}
          bottomLeftRadius={`${wp(2.5)}px`}
          bottomRightRadius={`${wp(2.5)}px`}></Row>
      )}
      <TouchableOpacity
        style={{
          marginTop: wp(2),
          paddingHorizontal: wp(5),
          paddingVertical: !focused ? wp(2.5) : 0,
        }}
        onPress={() => {
          //To play navigation sound
          playBackgroundSound('switch_page.aac');

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
      {focused && (
        <MyText
          Rubik
          size={
            activeMenu === 'RecipeHub'
              ? `${RFValue(9.5)}px`
              : `${RFValue(11)}px`
          }
          marg={`${wp(2)}px 0 0 0`}
          color={theme?.PRIMARY}
          weight="500">
          {text}
        </MyText>
      )}
    </Col>
  );
};

export default TabBarItem;
