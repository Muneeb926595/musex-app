import firebase from '@react-native-firebase/app';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import TabBarItem from './TabBarItem';
import {Home, Browser} from 'screens';
import {MyText} from 'components';

const firebaseConfig = {
  apiKey: 'AIzaSyAnglS7dFbdn7zmKxrshAIXsRSlSe50jCU',
  authDomain: 'musex-1a8ac.firebaseapp.com',
  projectId: 'musex-1a8ac',
  storageBucket: 'musex-1a8ac.appspot.com',
  messagingSenderId: '18736113160',
  appId: '1:18736113160:web:8e07bd541775433d1353bd',
};
if (!firebase?.apps?.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Tab = createBottomTabNavigator();

const Market = () => {
  return (
    <MyText>
      MarketHi there testing this new version of my app just a new testfor a
      very long text
    </MyText>
  );
};
const Settings = () => {
  return (
    <MyText>
      Settings there testing this new version of my app just a new testfor a
      very long text
    </MyText>
  );
};

const TabNav = ({navigation}) => {
  const [activeMenu, setActiveMenu] = useState('Home');

  return (
    <React.Fragment>
      <Tab.Navigator
        lazy={true}
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: wp(24),
            backgroundColor: 'white',
          },
        }}
        sceneContainerStyle={{
          backgroundColor: '#ffffff',
        }}
        tabBarOptions={{
          keyboardHidesTabBar: true,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarButton: (props) => (
              <TabBarItem
                {...props}
                tabNumber={1}
                iconHt={wp(8)}
                iconWid={wp(8)}
                navigateTo="Home"
                activeMenu={activeMenu}
                icon="home"
                focused={props.focused}
                navigation={navigation}
                setActiveMenu={setActiveMenu}
              />
            ),
            tabBarLabel: (props) => null,
          }}
        />
        <Tab.Screen
          name="Browser"
          component={Browser}
          options={{
            tabBarButton: (props) => (
              <TabBarItem
                {...props}
                tabNumber={1}
                iconHt={wp(7)}
                iconWid={wp(7)}
                navigateTo="Browser"
                activeMenu={activeMenu}
                icon="safari"
                focused={props.focused}
                navigation={navigation}
                setActiveMenu={setActiveMenu}
              />
            ),
            tabBarLabel: (props) => null,
          }}
        />
        <Tab.Screen
          name="Market"
          component={Market}
          options={{
            tabBarButton: (props) => (
              <TabBarItem
                {...props}
                tabNumber={1}
                iconHt={wp(8)}
                iconWid={wp(8)}
                navigateTo="Market"
                activeMenu={activeMenu}
                icon="music-library"
                focused={props.focused}
                navigation={navigation}
                setActiveMenu={setActiveMenu}
              />
            ),
            tabBarLabel: (props) => null,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarButton: (props) => (
              <TabBarItem
                {...props}
                tabNumber={1}
                iconHt={wp(8)}
                iconWid={wp(8)}
                navigateTo="Settings"
                activeMenu={activeMenu}
                icon="settings"
                focused={props.focused}
                navigation={navigation}
                setActiveMenu={setActiveMenu}
              />
            ),
            tabBarLabel: (props) => null,
          }}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
};

export default TabNav;
