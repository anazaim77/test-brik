import { SelectInput, TextInput } from '@/components';
import { OptionType } from '@/components/input/SelectInput';
import { categoryOptions } from '@/constants/options';
import { Button, ScrollView, View } from 'native-base';
import React, { useCallback, useMemo, useState } from 'react';
import { showMessage } from 'react-native-flash-message';

// interface AddProductPageProps {}

interface IFields {
  name: string;
  category: string | OptionType;
  description: string;
  weight: string;
  height: string;
  price: string;
}

const AddProductPage = () => {
  const [field, setfield] = useState<IFields>({
    name: '',
    category: '',
    description: '',
    weight: '',
    height: '',
    price: '',
  });
  const entriedField = useMemo(() => Object.entries(field), [field]);

  const onFieldChange = useCallback((name: string, value: string | object) => {
    setfield(e => ({ ...e, [name]: value }));
  }, []);

  const onSubmit = useCallback(() => {
    const hasEmptyField = !!entriedField.some(item => item[1] === '');
    if (hasEmptyField) {
      showMessage({
        message: 'Please fill the empty field',
        type: 'danger',
      });
      return;
    }

    console.log('field', field, hasEmptyField);
  }, [field, showMessage, entriedField]);

  return (
    <View flex={1} bg={'white'}>
      <ScrollView _contentContainerStyle={{ px: 6, py: 4 }}>
        <TextInput
          name={'name'}
          label="Name"
          value={field.name}
          placeholder="Name"
          onChange={onFieldChange}
        />
        <SelectInput
          name={'category'}
          value={field.category}
          label="Category"
          placeholder="Category"
          onChange={onFieldChange}
          option={categoryOptions}
        />
        <TextInput
          name={'description'}
          value={field.description}
          label="Description"
          placeholder="Description"
          onChange={onFieldChange}
        />
        <TextInput
          name={'weight'}
          value={field.weight}
          label="Weight"
          placeholder="Weight"
          keyboardType="numeric"
          onChange={onFieldChange}
        />
        <TextInput
          name={'height'}
          value={field.height}
          label="Height"
          placeholder="Height"
          keyboardType="numeric"
          onChange={onFieldChange}
        />
        <TextInput
          name={'price'}
          value={field.price}
          label="price"
          placeholder="price"
          keyboardType="numeric"
          onChange={onFieldChange}
        />
        <Button
          onPress={onSubmit}
          mt={6}
          rounded={'full'}
          colorScheme={'green'}
        >
          Submit
        </Button>
      </ScrollView>
    </View>
  );
};

export default AddProductPage;
