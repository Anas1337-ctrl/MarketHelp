import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from '../config';

export const Wrapper = ({children, style}) => {
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});
