import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  onPress: () => void;
}

export default function Button({label, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    borderRadius: 6,
  },

  label: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
  },
});
