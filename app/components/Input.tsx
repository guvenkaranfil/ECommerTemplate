import React from 'react';
import {TextInput, TextInputProps, StyleSheet} from 'react-native';

interface InputProps extends TextInputProps {
  value: string;
  onChangeText: (value: string) => void;
}

export default function Input({value, onChangeText, ...rest}: InputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor="#3C3C43"
      value={value}
      onChangeText={onChangeText}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 5,
    height: 40,
    borderWidth: 0.5,
    borderColor: '#3C3C43',
    borderRadius: 5,
  },
});
