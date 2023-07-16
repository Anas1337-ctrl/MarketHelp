import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {baseStyle, theme} from '../config';

export const CheckBox = ({text, value, ...restProps}) => {
  return (
    <BouncyCheckbox
      {...restProps}
      size={20}
      fillColor={theme.colors.blue}
      unfillColor={theme.colors.silver}
      text={text}
      textStyle={{
        fontSize: baseStyle.fontSize(12),
        lineHeight: baseStyle.lineHeight(15),
        color: theme.colors.black,
        fontFamily: theme.font.regular,
        opacity: 0.6,
        textDecorationLine: 'none',
      }}
      onPress={isChecked => {}}
    />
  );
};
