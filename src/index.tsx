import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import AppLoading from 'expo-app-loading';
import AppNavigator from './config/navigation';
import { useCachedResources } from './hooks';
import { Provider } from 'react-redux';
import { store } from './config/store';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  const { isLoadingComplete, fontsLoaded } = useCachedResources();

  if (!isLoadingComplete && !fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <Provider store={store}>
        <NativeBaseProvider>
          <StatusBar style="auto" />
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    </>
  );
}
