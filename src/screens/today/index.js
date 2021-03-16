import * as React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {List} from 'react-native-paper';
import {Header} from '../../components';

const SPENDING = [
  {id: 1, code: 'ANUONG', name: 'Ăn uống', total: 200000},
  {id: 2, code: 'ANUONG', name: 'Ăn uống', total: 200000},
  {id: 3, code: 'ANUONG', name: 'Ăn uống', total: 200000},
  {id: 4, code: 'ANUONG', name: 'Ăn uống', total: 200000},
  {id: 5, code: 'ANUONG', name: 'Ăn uống', total: 200000},
  {id: 6, code: 'ANUONG', name: 'Ăn uống', total: 200000},
  {id: 7, code: 'ANUONG', name: 'Ăn uống', total: 200000},
];

export function TodayScreen() {
  return (
    <View style={styles.container}>
      <Header title="To day" />
      <View style={styles.content}>
        <FlatList
          data={SPENDING}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            return (
              <List.Item
                style={styles.spendingItem}
                title="First Item"
                description="Item description"
                left={props => <List.Icon {...props} icon="folder" />}
                right={props => (
                  <View style={styles.itemRight}>
                    <Text {...props}>{item.total}</Text>
                  </View>
                )}
                onPress={() => {}}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EFF7',
  },
  content: {
    flex: 1,
  },
  spendingItem: {
    backgroundColor: '#fff',
  },
  itemRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
