import firebase from '@react-native-firebase/app';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import TabBarItem from './TabBarItem';
import {Home} from 'screens';
import {registerToken} from 'store/auth/AuthActions';
import {playBackgroundSound} from 'helpers';
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

const RecipeHub = () => {
  return (
    <MyText>
      RecipeHub Hi there testing this new version of my app just a new testfor a
      very long text
    </MyText>
  );
};
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
  const dispatch = useDispatch();
  const userId = useSelector(({Foodbook}) => Foodbook.auth.user._id);

  useEffect(() => {
    const handlePushNotifs = async () => {
      if (userId) {
        const authStatus = await messaging().requestPermission();

        messaging()
          .getToken()
          .then((deviceToken) => {
            dispatch(registerToken(deviceToken, userId));
          });

        messaging().onMessage((message) => {
          const {title, body} = message.notification;

          if (
            title === 'Feed By' ||
            title?.includes('feed by') ||
            body?.includes('feed by')
          ) {
            //user send follow request don't play sound
          } else {
            playBackgroundSound('push_notification.aac');
          }
        });

        messaging().onNotificationOpenedApp((remoteMessage) => {
          console.log('Notification caused app to open from background state');
          navigation.navigate('TabNav');
        });

        messaging()
          .getInitialNotification()
          .then((remoteMessage) => {
            console.log('Notification caused app to open from quit state');
            navigation.navigate('TabNav');
            navigation.reset({
              index: 0,
              routesName: [{name: 'TabNav'}],
            });
          });
      }
    };

    handlePushNotifs();
  }, [userId]);

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
          name="RecipeHub"
          component={RecipeHub}
          options={{
            tabBarButton: (props) => (
              <TabBarItem
                {...props}
                tabNumber={1}
                iconHt={wp(7)}
                iconWid={wp(7)}
                navigateTo="RecipeHub"
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
                icon="heart"
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
