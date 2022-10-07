import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { Main } from './navigation/Main';
import AppLoading from 'expo-app-loading';
import { useCachedResources } from './hooks';

export default function App() {
  const { isLoadingComplete, fontsLoaded } = useCachedResources();

  if (!isLoadingComplete && !fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </>
  );
}
