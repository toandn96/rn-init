import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  titleStyle: {
    textAlign: 'center',
  },
});

export function Header({title}) {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Action />
      <Appbar.Content title={title} titleStyle={styles.titleStyle} />
      <Appbar.Action />
    </Appbar.Header>
  );
}
