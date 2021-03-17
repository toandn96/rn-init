import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NAVIGATION_ROUTES} from '../appConstants';

import RootNavigator from './root.navigator';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export {AppContainer, NAVIGATION_ROUTES};
