import { SelectInput, TextInput } from '@/components';
import { Button, ScrollView, Select, View } from 'native-base';
import React from 'react';

// interface AddProductPageProps {}

const AddProductPage = () => {
  const [service, setService] = React.useState('');

  return (
    <View flex={1} bg={'white'}>
      <ScrollView _contentContainerStyle={{ px: 6, py: 4 }}>
        <TextInput label="Name" placeholder="Name" />
        <SelectInput label={'Category'} />
        <TextInput label="Description" placeholder="Description" />
        <TextInput label="Weight" placeholder="Weight" keyboardType="numeric" />
        <TextInput label="Height" placeholder="Height" keyboardType="numeric" />
        <TextInput label="price" placeholder="price" keyboardType="numeric" />
        <TextInput label="Image" placeholder="Image" />
        <Button mt={6} rounded={'full'} colorScheme={'green'}>
          Submit
        </Button>
      </ScrollView>
    </View>
  );
};

export default AddProductPage;
