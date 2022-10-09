import { ButtonDemo, FormDemo, TextDemo } from '@/screens/Demos';
import { List } from '@/screens/List';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MainStackParams } from './type';

const MainStack = createStackNavigator<MainStackParams>();

const AppNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="List" component={List} />
      <MainStack.Screen
        name="TextDemo"
        component={TextDemo}
        options={{ headerTitle: 'Text Demo' }}
      />
      <MainStack.Screen
        name="FormDemo"
        component={FormDemo}
        options={{ headerTitle: 'Button Demo' }}
      />
      <MainStack.Screen
        name="ButtonDemo"
        component={ButtonDemo}
        options={{ headerTitle: 'Button Demo' }}
      />
    </MainStack.Navigator>
  );
};

export default AppNavigator;
