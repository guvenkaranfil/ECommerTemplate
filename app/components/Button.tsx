import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  onPress: () => void;
}

export default function Button({label, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity {...rest}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}
