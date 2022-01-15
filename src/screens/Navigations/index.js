import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {TabNav} from './components';
import {Col} from 'components';
import {Search, Player} from 'screens';

const Stack = createStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          options={{
            gestureEnabled: false,
          }}
          name="TabNav">
          {(props) => (
            <Col relative>
              <TabNav {...props} />
            </Col>
          )}
        </Stack.Screen>
        <Stack.Screen
          options={{
            cardStyle: {
              backgroundColor: '#ffffff',
            },
          }}
          name="Search"
          component={Search}
        />
        <Stack.Screen
          options={{
            cardStyle: {
              backgroundColor: '#ffffff',
            },
          }}
          name="Player"
          component={Player}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
