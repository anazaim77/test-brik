import { Box, FormControl, Icon, Input, Text, View } from 'native-base';
import * as React from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { KeyboardTypeOptions } from 'react-native';

interface TextInputProps {
  label: string;
  value?: string;
  setValue?: string;
  errorMessage?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
}

const TextInput = ({
  label,
  errorMessage,
  placeholder,
  keyboardType,
}: TextInputProps) => {
  return (
    <>
      <FormControl isInvalid={!!errorMessage}>
        <FormControl.Label>{label}</FormControl.Label>
        <Input
          placeholder={placeholder}
          width="100%"
          borderRadius="10"
          p="3"
          fontSize="14"
          keyboardType={keyboardType}
        />
        <FormControl.ErrorMessage
          leftIcon={
            <Icon
              name={'warning-outline'}
              as={<Ionicons name={'warning-outline'} />}
            />
          }
        >
          Please make a selection!
        </FormControl.ErrorMessage>
      </FormControl>
    </>
  );
};

export default TextInput;
