import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {baseStyle, theme} from '../config';

export const Heading = ({style, center, children, ...restProps}) => {
  return (
    <Text
      {...restProps}
      style={[
        {...styles.heading, textAlign: center ? 'center' : 'auto'},
        style,
      ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: baseStyle.fontSize(24),
    lineHeight: baseStyle.lineHeight(29),
    color: theme.colors.black,
    fontFamily: theme.font.regular,
  },
});
