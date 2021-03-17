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

import store, {persistor} from '@stores';
import {AppContainer} from '@navigations';

enableScreens();
MaterialCommunityIcons.loadFont();

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

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

export default App;
