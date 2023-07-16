import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {baseStyle, theme} from '../config';

export const Input = ({
  placeholder,
  secureTextEntry,
  keyboardType,
  value,
  style,
  onChangeText,
  ...restProps
}) => {
  return (
    <TextInput
      {...restProps}
      style={[styles.input, style]}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: baseStyle.borderRadius(24),
    borderWidth: baseStyle.borderWidth(1),
    borderColor: theme.colors.grey,
    paddingVertical: baseStyle.paddingVertical(10),
    paddingHorizontal: baseStyle.paddingHorizontal(20),
  },
});
