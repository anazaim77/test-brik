import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { ListItem, ListSeparator } from '../components/List';
import { MainStackParams } from '@/config/navigation/type';
import { useGetAllGoodsQuery } from '@/store/goods/goodQuery';
import { Colors } from '@/config/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.base.lightBG,
    paddingVertical: 20,
  },
});

const screens = [
  {
    title: 'Text',
    subtitle: 'An example of using the Text.js components.',
    target: 'TextDemo',
  },
  {
    title: 'Form',
    subtitle: 'An example of using the Form.js components.',
    target: 'FormDemo',
  },
  {
    title: 'Button',
    subtitle: 'An example of using the Button.js components.',
    target: 'ButtonDemo',
  },
];

type Props = {
  navigation: StackNavigationProp<MainStackParams, 'List'>;
};

export const List = ({ navigation }: Props) => {
  const { data, isLoading } = useGetAllGoodsQuery(null);
  console.log('data', data);

  return (
    <FlatList
      style={styles.container}
      data={screens}
      keyExtractor={item => item.title}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subtitle={item.subtitle}
          // @ts-ignore
          // Disabling the next line because all the item.targets are valid - that data just
          // isn't getting picked up by TypeScript
          onPress={() => navigation.push(item.target)}
        />
      )}
      ItemSeparatorComponent={ListSeparator}
      ListHeaderComponent={ListSeparator}
      ListFooterComponent={ListSeparator}
    />
  );
};
