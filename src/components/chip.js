import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {baseStyle, theme} from '../config';
import {Paragraph} from './paragraph';

export const Chip = ({
  label,
  style,
  checked,
  chipStyle,
  labelStyle,
  ...restProps
}) => {
  return (
    <TouchableOpacity
      {...restProps}
      style={[
        {
          ...styles.chip,
          backgroundColor: checked ? theme.colors.blue : theme.colors.silver,
        },
        chipStyle,
      ]}>
      <Paragraph style={[styles.text, labelStyle]}>{label}</Paragraph>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingVertical: baseStyle.paddingVertical(5),
    paddingHorizontal: baseStyle.paddingHorizontal(10),
    borderRadius: baseStyle.borderRadius(23),
  },

  text: {
    color: theme.colors.white,
    opacity: 1,
  },
});
