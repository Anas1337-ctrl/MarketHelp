import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme, baseStyle} from '../config';

export const Paragraph = ({style, center, children, ...restProps}) => {
  return (
    <Text
      {...restProps}
      style={[
        {...styles.paragraph, textAlign: center ? 'center' : 'auto'},
        style,
      ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    fontSize: baseStyle.fontSize(12),
    lineHeight: baseStyle.lineHeight(15),
    color: theme.colors.black,
    fontFamily: theme.font.regular,
    opacity: 0.6,
  },
});
