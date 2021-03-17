/** @format */
import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {NAVIGATION_ROUTES} from '@moneymoon/appConstants';

import BottomTabNavigator from './tabs.navigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const BottomTab = () => <BottomTabNavigator />;

  return (
    <Stack.Navigator
      initialRouteName={NAVIGATION_ROUTES.ROOT}
      screenOptions={{header: () => null}}>
      <Stack.Screen
        name={NAVIGATION_ROUTES.ROOT}
        component={BottomTab}
        options={{
          header: () => null,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};
export default RootNavigator;
