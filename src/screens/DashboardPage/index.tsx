import { Colors } from '@/constants';
import { Box, StatusBar, Text, View } from 'native-base';
import * as React from 'react';
import HeaderSection from './components/HeaderSection';

interface DashboardPageProps {}

const DashboardPage = (props: DashboardPageProps) => {
  return (
    <View flex={1} background={Colors.base.lightBG}>
      <HeaderSection />
      <Text>Dashboard</Text>
    </View>
  );
};

export default DashboardPage;
