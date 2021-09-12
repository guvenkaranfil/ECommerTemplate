import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';

interface TypographyProps extends TextProps {
  children: (string | Element)[] | string | string[];
  style?: TextStyle;
}

export default function Typography({children, style}: TypographyProps) {
  return <Text style={style}>{children}</Text>;
}
