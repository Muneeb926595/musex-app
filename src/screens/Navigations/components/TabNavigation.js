import firebase from '@react-native-firebase/app';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import TabBarItem from './TabBarItem';
import {registerToken} from 'store/auth/AuthActions';
import {playBackgroundSound} from 'helpers';

const firebaseConfig = {
  apiKey: 'AIzaSyCze9b6m9qjEVUEYuJuK5u6gAca5Pumujc',
  authDomain: 'foodbook-beta-1p5.firebaseapp.com',
  databaseURL: 'https://foodbook-beta-1p5.firebaseio.com',
  projectId: 'foodbook-beta-1p5',
  storageBucket: 'foodbook-beta-1p5.appspot.com',
  messagingSenderId: '210660078855',
  appId: '1:210660078855:web:227214bc8a180380dd01a2',
  measurementId: 'G-0TB5LSG4WG',
};
if (!firebase?.apps?.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Tab = createBottomTabNavigator();

const Fooder = () => {
  return <></>;
};

const TabNav = ({navigation}) => {
  const [activeMenu, setActiveMenu] = useState('Fooder');
  // const dispatch = useDispatch();
  // const userId = useSelector(({Foodbook}) => Foodbook.auth.user._id);

  // useEffect(() => {
  //   const handlePushNotifs = async () => {
  //     if (userId) {
  //       const authStatus = await messaging().requestPermission();

  //       messaging()
  //         .getToken()
  //         .then(deviceToken => {
  //           dispatch(registerToken(deviceToken, userId));
  //         });

  //       messaging().onMessage(message => {
  //         const {title, body} = message.notification;

  //         if (
  //           title === 'Feed By' ||
  //           title?.includes('feed by') ||
  //           body?.includes('feed by')
  //         ) {
  //           //user send follow request don't play sound
  //         } else {
  //           playBackgroundSound('push_notification.aac');
  //         }
  //       });

  //       messaging().onNotificationOpenedApp(remoteMessage => {
  //         console.log('Notification caused app to open from background state');
  //         navigation.navigate('TabNav');
  //       });

  //       messaging()
  //         .getInitialNotification()
  //         .then(remoteMessage => {
  //           console.log('Notification caused app to open from quit state');
  //           navigation.navigate('TabNav');
  //           navigation.reset({
  //             index: 0,
  //             routesName: [{name: 'TabNav'}],
  //           });
  //         });
  //     }
  //   };

  //   handlePushNotifs();
  // }, [userId]);

  return (
    <React.Fragment>
      <Tab.Navigator
        lazy={true}
        tabBarOptions={{
          style: {
            backgroundColor: 'transparent',
            position: 'absolute',
            height: wp(16),
            alignItems: 'center',
            borderTopColor: 'transparent',
            display: 'flex',
            flexDirection: 'row',
          },
          keyboardHidesTabBar: true,
        }}>
        <Tab.Screen
          name="Fooder"
          component={Fooder}
          options={{
            tabBarButton: props => (
              <TabBarItem
                {...props}
                tabNumber={1}
                iconHt={wp(8)}
                iconWid={wp(8)}
                text="tab-fooders"
                navigateTo="Fooder"
                activeMenu={activeMenu}
                icon="navigation-fooders"
                focused={props.focused}
                navigation={navigation}
                setActiveMenu={setActiveMenu}
              />
            ),
            tabBarLabel: props => null,
          }}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
};

export default TabNav;
