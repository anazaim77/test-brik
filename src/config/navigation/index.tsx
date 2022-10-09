import DashboardPage from '@/screens/DashboardPage';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MainStackParams } from './type';

const MainStack = createStackNavigator<MainStackParams>();

const AppNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Dashboard"
        component={DashboardPage}
        options={{
          header: undefined,
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
};

export default AppNavigator;
