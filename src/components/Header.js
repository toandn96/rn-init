import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Appbar, TextInput} from 'react-native-paper';

export function Header({title}) {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Action />
      <Appbar.Content title={title} titleStyle={styles.titleStyle} />
      <Appbar.Action />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  titleStyle: {
    textAlign: 'center',
  },
});
