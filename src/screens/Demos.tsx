import React from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';

import colors from '../constants/colors';
import { TextInput } from '../components/Form';
import { useLogin } from '../utils/auth';
import { Button } from '@/components/Button';
import { Feather } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
  },
});

export const TextDemo = () => (
  <View style={styles.container}>
    <Text style={{ fontSize: 24 }}>Text biasa</Text>
    <Text style={{ fontSize: 24, fontFamily: 'Lato_400Regular' }}>
      Text biasa lato
    </Text>
    <Feather name="home" size={24} color="black" />
  </View>
);

export const FormDemo = () => {
  const { submit, errors, email, setEmail, password, setPassword } = useLogin();

  return (
    <View style={styles.container}>
      <TextInput
        label="Email Address"
        placeholder="Enter your email..."
        value={email}
        onChangeText={(text: string) => setEmail(text)}
        errorText={errors.email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        placeholder="Enter your password..."
        value={password}
        onChangeText={(text: string) => setPassword(text)}
        secureTextEntry
        errorText={errors.password}
        autoCapitalize="none"
      />
      <Button onPress={submit}>Sign In</Button>
    </View>
  );
};

export const ButtonDemo = () => (
  <View style={styles.container}>
    <Button onPress={() => Alert.alert('you pressed the default button')}>
      Default Button
    </Button>
    <Button
      type="outline"
      onPress={() => Alert.alert('you pressed the outline button')}
    >
      Outline Button
    </Button>
  </View>
);
