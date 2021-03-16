/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {PersistGate} from 'redux-persist/integration/react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {AppContainer} from './navigations';
import store, {persistor} from './stores';

enableScreens();
MaterialCommunityIcons.loadFont();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider>
          <SafeAreaView style={styles.safeAreaView}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <AppContainer />
          </SafeAreaView>
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default App;

global.devLog = (tag, message) => {
  console.log('tag:', tag);
  console.log('message:', message);
  if (__DEV__) {
    if (!message) {
      console.log(tag);
    } else {
      console.log(tag, message);
    }
  }
};
