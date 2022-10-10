import { FormControl, Icon, Input, Select } from 'native-base';
import * as React from 'react';
import { Entypo } from '@expo/vector-icons';
import { Colors } from '@/constants';

interface SelectInputProps {
  label: string;
  placeholder?: string;
}

const SelectInput = ({ label, placeholder }: SelectInputProps) => {
  const [service, setService] = React.useState('');

  return (
    <>
      <FormControl.Label>{label}</FormControl.Label>

      <Select
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder={placeholder || 'Pick an Item...'}
        borderRadius="10"
        p="3"
        mb={2}
        onValueChange={itemValue => setService(itemValue)}
        dropdownIcon={
          <Icon
            name="chevron-down"
            mr={'6px'}
            size={6}
            as={<Entypo name="chevron-down" color={Colors.font.secondary} />}
          />
        }
      >
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
      </Select>
    </>
  );
};

export default SelectInput;
