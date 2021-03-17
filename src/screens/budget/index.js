import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Header} from '@components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EFF7',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export function BudgetScreen() {
  return (
    <View style={styles.container}>
      <Header title="To day" />
      <View style={styles.content}>
        <Text>BudgetScreen222</Text>
      </View>
    </View>
  );
}
