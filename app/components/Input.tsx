import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  value: string;
  onChangeText: (value: string) => void;
}

export default function Input({value, onChangeText, ...rest}: InputProps) {
  return <TextInput value={value} onChangeText={onChangeText} {...rest} />;
}
