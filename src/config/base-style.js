import {verticalScale, scale, moderateScale} from 'react-native-size-matters';

export const baseStyle = {
  height: value => verticalScale(value),

  width: value => moderateScale(value),

  fontSize: value => scale(value),

  lineHeight: value => verticalScale(value),

  paddingTop: value => verticalScale(value),

  paddingBottom: value => verticalScale(value),

  paddingVertical: value => verticalScale(value),

  paddingRight: value => moderateScale(value),

  paddingLeft: value => moderateScale(value),

  paddingHorizontal: value => moderateScale(value),

  marginTop: value => verticalScale(value),

  marginBottom: value => verticalScale(value),

  marginVertical: value => verticalScale(value),

  marginRight: value => moderateScale(value),

  marginLeft: value => moderateScale(value),

  marginHorizontal: value => moderateScale(value),

  borderRadius: value => moderateScale(value),

  borderWidth: value => moderateScale(value),

  borderTopLeftRadius: value => verticalScale(value),

  borderTopRightRadius: value => verticalScale(value),
};
