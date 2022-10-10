import { NavigationProp } from '@react-navigation/native';
import { Box, Fab, Icon, StatusBar, View } from 'native-base';
import * as React from 'react';
import HeaderSection from './components/HeaderSection';
import ProductSection from './components/ProductSection';
import { AntDesign } from '@expo/vector-icons';

interface DashboardPageProps {
  navigation: NavigationProp<any>;
}

const DashboardPage = ({ navigation }: DashboardPageProps) => {
  return (
    <View flex={1} background={'white'}>
      <StatusBar barStyle="dark-content" />
      <Box safeAreaTop bg="white" />
      <ProductSection
        navigation={navigation}
        headerComponent={<HeaderSection />}
      />
      <Fab
        position="absolute"
        size="sm"
        background={'success.400'}
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
      />
    </View>
  );
};

export default DashboardPage;
