import { Box, StatusBar, View } from 'native-base';
import * as React from 'react';
import HeaderSection from './components/HeaderSection';
import ProductSection from './components/ProductSection';

interface DashboardPageProps {}

const DashboardPage = (props: DashboardPageProps) => {
  return (
    <View flex={1} background={'white'}>
      <StatusBar barStyle="dark-content" />
      <Box safeAreaTop bg="white" />
      <ProductSection headerComponent={<HeaderSection />} />
    </View>
  );
};

export default DashboardPage;
