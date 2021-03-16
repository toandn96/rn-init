import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './root.navigator';
import {NAVIGATION_ROUTES} from '../appConstants/routes';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export {AppContainer, NAVIGATION_ROUTES};
